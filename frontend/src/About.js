import React from "react";

const AboutAccordion = () => {
  return (
    <div className="container mt-5" style={{ marginTop: "6rem" }}> {/* Increased margin further */}
      <div className="accordion " id="aboutAccordion" >
        
        {/* Vision Section */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button 
              className="accordion-button" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseOne" 
              aria-expanded="true" 
              aria-controls="collapseOne"
            >
              Our Vision
            </button>
          </h2>
          <div 
            id="collapseOne" 
            className="accordion-collapse collapse show" 
            aria-labelledby="headingOne" 
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              TechMantra aims to become a leading platform for technology enthusiasts, 
              offering insightful articles, tutorials, and resources for learning new tech skills.
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button 
              className="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseTwo" 
              aria-expanded="false" 
              aria-controls="collapseTwo"
            >
              Our Mission
            </button>
          </h2>
          <div 
            id="collapseTwo" 
            className="accordion-collapse collapse" 
            aria-labelledby="headingTwo" 
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              At TechMantra, we aim to make technology accessible to everyone by 
              providing high-quality, easy-to-understand tutorials and engaging content.
            </div>
          </div>
        </div>

      </div>
      <div className="container my-5">
      <div className="card shadow-lg border-0 rounded p-4">
        <div className="card-body">
        <h2 className="text-center fw-bold mb-3">
  <span className="text-dark">A</span>bout  
  <span className="text-danger"> T</span>ech
  <span className="text-danger">M</span>antra
</h2>

          <p className="text-dark">
            At <strong>TechMantra</strong>, we believe in empowering learners with cutting-edge skills that shape the future. 
            Our platform is dedicated to <strong>bridging the gap between technology and aspiring professionals</strong> 
            by offering high-quality learning resources, hands-on training, and career guidance.
          </p>

          <p className="text-dark">
            We strive to be a <strong>leading platform</strong> for technology enthusiasts, providing in-depth knowledge, 
            structured courses, and industry insights to help individuals thrive in an ever-evolving tech landscape.
          </p>

          <h4 className="fw-bold mt-3 text-success">What We Offer?</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ <strong>Resources on Emerging Technologies</strong>  AI, Machine Learning, Cloud Computing, Blockchain, Cybersecurity, and more.</li>
            <li className="list-group-item">✅ <strong>Comprehensive Courses</strong>  Industry-relevant content designed to upskill and enhance technical expertise.</li>
            <li className="list-group-item">✅ <strong>Interview Preparation & Career Guidance</strong>  Mock interviews, resume-building tips, and job-ready training.</li>
            <li className="list-group-item">✅ <strong>Hands-on Projects & Live Workshops</strong>Practical experience to help learners implement their knowledge in real-world scenarios.</li>
          </ul>

          <h4 className="fw-bold mt-4 text-success">Our Alumni Network</h4>
          <p className="text-dark">
            Our learners are now thriving in <strong>top organizations</strong> across various industries, making a significant impact with the skills they gained from TechMantra. 
            With a strong <strong>alumni community</strong>, we continue to provide career support, networking opportunities, and ongoing learning resources.
          </p>

        </div>
      </div>
    </div>
   
    </div>
  );
};

export default AboutAccordion;

