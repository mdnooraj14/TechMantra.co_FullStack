import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Form } from "react-bootstrap";

const API_URL = "http://localhost:5000/registrations";

const RegistrationData = () => {
  const [registrations, setRegistrations] = useState([]);
  const [editIds, setEditIds] = useState([]); // Stores IDs of rows being edited
  const [editData, setEditData] = useState({}); // Stores changes for multiple rows

  // Fetch Registration Data
  useEffect(() => {
    axios.get(API_URL).then((res) => setRegistrations(res.data));
  }, []);

  // Handle Edit Button Click
  const handleEditClick = (reg) => {
    setEditIds((prev) => [...prev, reg.id]); // Add ID to edit list
    setEditData((prev) => ({
      ...prev,
      [reg.id]: { fullName: reg.fullName, email: reg.email, course: reg.course },
    }));
  };

  // Handle Input Change for a Specific Row
  const handleChange = (id, e) => {
    setEditData((prev) => ({
      ...prev,
      [id]: { ...prev[id], [e.target.name]: e.target.value },
    }));
  };

  // Save Updated Data
  const handleSave = (id) => {
    axios.put(`${API_URL}/${id}`, editData[id]).then(() => {
      setRegistrations((prev) =>
        prev.map((reg) => (reg.id === id ? { ...reg, ...editData[id] } : reg))
      );
      setEditIds((prev) => prev.filter((editId) => editId !== id)); // Remove from edit list
    });
  };

  // Delete Record
  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setRegistrations(registrations.filter((reg) => reg.id !== id));
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-dark">
        <span className="text-danger fw-bold">R</span>egistration 
        <span className="text-danger fw-bold"> D</span>ata
      </h2>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg, index) => (
            <tr key={reg.id}>
              <td>{index + 1}</td>
              <td>
                {editIds.includes(reg.id) ? (
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={editData[reg.id]?.fullName || ""}
                    onChange={(e) => handleChange(reg.id, e)}
                  />
                ) : (
                  reg.fullName
                )}
              </td>
              <td>
                {editIds.includes(reg.id) ? (
                  <Form.Control
                    type="email"
                    name="email"
                    value={editData[reg.id]?.email || ""}
                    onChange={(e) => handleChange(reg.id, e)}
                  />
                ) : (
                  reg.email
                )}
              </td>
              <td>
                {editIds.includes(reg.id) ? (
                  <Form.Select name="course" value={editData[reg.id]?.course || ""} onChange={(e) => handleChange(reg.id, e)}>
                    <option value="AI">AI</option>
                    <option value="DataScience">DataScience</option>
                    <option value="WebTechnologies">WebTechnologies</option>
                    <option value="Advance Programming">Advance Programming</option>
                  </Form.Select>
                ) : (
                  reg.course
                )}
              </td>
              <td>
                {editIds.includes(reg.id) ? (
                  <Button variant="success" onClick={() => handleSave(reg.id)} size="sm">
                    Save
                  </Button>
                ) : (
                  <Button variant="warning" onClick={() => handleEditClick(reg)} size="sm">
                    Edit
                  </Button>
                )}
                <Button
                  variant="danger"
                  onClick={() => handleDelete(reg.id)}
                  size="sm"
                  className="ms-2"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RegistrationData;
