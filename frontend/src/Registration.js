import React, { useState, useCallback } from "react";
import { Form, Button, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api/registrations";

// Store course options outside to avoid unnecessary re-renders
const COURSES = ["AI", "Data Science", "Web Technologies", "Advanced Programming"];

// Regex for validation
const NAME_REGEX = /^[a-zA-Z\s]{3,50}$/;
const EMAIL_REGEX = /\S+@\S+\.\S+/;

const Registration = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", course: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Handle input changes efficiently
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  // Validate form before submission
  const validateForm = () => {
    const { fullName, email, course } = formData;

    if (!NAME_REGEX.test(fullName.trim())) {
      setMessage({ type: "danger", text: "Full Name must be 3-50 characters and contain only letters." });
      return false;
    }
    if (!EMAIL_REGEX.test(email)) {
      setMessage({ type: "danger", text: "Invalid email format." });
      return false;
    }
    if (!course) {
      setMessage({ type: "danger", text: "Please select a course." });
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await axios.post(API_URL, formData);
      setMessage({ type: "success", text: "Registration Successful!" });
      setFormData({ fullName: "", email: "", course: "" }); // Reset form
    } catch (error) {
      console.error("Error:", error);
      setMessage({
        type: "danger",
        text: error.response?.data?.message || "Failed to register. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center text-dark fw-bold">
            <span className="text-danger fw-bold">C</span>ourse 
            <span className="text-danger fw-bold"> R</span>egistration
          </h2>

          {message.text && <Alert variant={message.type}>{message.text}</Alert>}

          <Form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
            
            {/* Full Name */}
            <Form.Group controlId="fullName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                aria-label="Full Name"
              />
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                aria-label="Email"
              />
            </Form.Group>

            {/* Course Selection */}
            <Form.Group controlId="course" className="mb-3">
              <Form.Label>Choose Course</Form.Label>
              <Form.Select name="course" value={formData.course} onChange={handleChange} required aria-label="Course Selection">
                <option value="">Select a Course</option>
                {COURSES.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            {/* Submit Button */}
            <div className="text-center">
              <Button variant="success" type="submit" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : "Register"}
              </Button>
            </div>
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
