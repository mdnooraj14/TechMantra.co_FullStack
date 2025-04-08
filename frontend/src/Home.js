import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.css"; // Custom CSS

const Home = () => {
  return (
    <section className="py-1 px-1 rounded text-dark text-center mx-auto my-3 w-100 mt-auto">
      {/* Rotating Heading Instead of Logo */}
      <div className="container1 mb-2 rotating-heading">
        <h1 className="display-2 fw-bold">
          <span className="text-danger">T</span>ech
          <span className="text-danger">M</span>antra
        </h1>
      </div>

      {/* Section Heading */}
      <h5 className="fw-bold text-decoration-underline services-heading">Our Services</h5>

      {/* Carousel Wrapper */}
      <div
        id="serviceCarousel"
        className="carousel slide mx-auto"
        data-bs-ride="carousel"
        data-bs-interval="500"
        style={{ width: "70%", maxWidth: "600px" }}
      >
        <div className="carousel-inner rounded">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/405/952/939/future-tech-technics-wallpaper-preview.jpg"
              className="d-block w-100 rounded"
              alt="Futuristic Training"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-danger bg-opacity-100 p-2 rounded">
              <h5 className="fw-bold">Futuristic Technology Trainings</h5>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5439381.jpg&fm=jpg"
              className="d-block w-100 rounded"
              alt="Interview Preparation"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-info bg-opacity-100 p-2 rounded">
              <h5 className="fw-bold">Interview Preparation</h5>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="https://www.kistkakutur.com/wp-content/uploads/slider3/digital-learning-elets.png"
              className="d-block w-100 rounded"
              alt="Placement Assistance"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-warning bg-opacity-100 p-2 rounded">
              <h5 className="fw-bold">Placement Assistance</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
