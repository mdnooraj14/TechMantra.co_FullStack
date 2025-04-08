import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const Courses = () => {
  return (
    <Container className="mt-6">
 <h1 className="text-center display-4 fw-bold mb-4">
  <span className="text-danger">A</span>vailable 
  <span className="text-danger">C</span>ourses
</h1>






      {/* AI Section */}
      <h2>
        <Badge bg="danger">AI</Badge>
      </h2>
      <Row className="g-3">
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img
              variant="top"
              src="https://emarsys.com/app/uploads/2020/03/real-ai-1536x1024.jpg.webp"
              alt="AI Using Python"
            />
            <Card.Body>
              <Card.Title>AI Using Python</Card.Title>
              <Card.Text>Learn the Fundamentals of Python Concepts & AI Intro</Card.Text>
              <Button href="Price.html" variant="primary">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.science.org/do/10.5555/article.2437077/full/ai_feature_image-1710956808020.jpg"
              alt="AI Algo's"
            />
            <Card.Body>
              <Card.Title>AI Algo's</Card.Title>
              <Card.Text>This Course helps to Explore AI and its Algo's</Card.Text>
              <Button href="Price.html" variant="primary">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img
              variant="top"
              src="https://miro.medium.com/v2/resize:fit:1400/1*cG6U1qstYDijh9bPL42e-Q.jpeg"
              alt="ML Beginning"
            />
            <Card.Body>
              <Card.Title>ML-Beginning</Card.Title>
              <Card.Text>This Course helps to Know about ML and its role in AI</Card.Text>
              <Button href="Price.html" variant="primary">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img
              variant="top"
              src="https://cipmnigeria.org.ng/wp-content/uploads/2018/11/HiRes-17.jpg"
              alt="Project"
            />
            <Card.Body>
              <Card.Title>Project</Card.Title>
              <Card.Text>Get started with the real-time project</Card.Text>
              <Button href="Price.html" variant="primary">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2><Badge bg="danger">Data Science</Badge></h2>
      <Row className="g-3">
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://ciracollege.com/wp-content/uploads/2020/11/How-to-Learn-Python.jpg" alt="Advance Python" />
            <Card.Body>
              <Card.Title>Advance Python</Card.Title>
              <Card.Text>Learn the EDA and Data Visualization Data Warehouse</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://i0.wp.com/www.institutedata.com/wp-content/uploads/2023/07/Mastering-machine-learning-unlocking-the-potential-of-advanced-algorithms-for-enhanced-performance-.png?fit=940%2C470&ssl=1" alt="Advance ML" />
            <Card.Body>
              <Card.Title>Advance ML</Card.Title>
              <Card.Text>Learn ML Advance concepts for building models</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://images.prismic.io/turing/652ebec8fbd9a45bcec81892_Which_Language_Is_Useful_for_NLP_and_Why_62f7833585.webp?auto=format,compress" alt="NLP Fundamentals" />
            <Card.Body>
              <Card.Title>NLP Fundamentals</Card.Title>
              <Card.Text>Explore NLP and its role in AI and Data Science</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://cipmnigeria.org.ng/wp-content/uploads/2018/11/HiRes-17.jpg" alt="Project" />
            <Card.Body>
              <Card.Title>Project</Card.Title>
              <Card.Text>Hands-on project experience for skill enhancement</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2><Badge bg="danger">Web Development</Badge></h2>
      <Row className="g-3">
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://camo.githubusercontent.com/21bb8ae3629c4852404841252c65baa38426e4c0d01a68a0f7e6fd121d4649dc/68747470733a2f2f7777772e69696d2e66722f65636f6c652d7765622f77702d636f6e74656e742f75706c6f6164732f323031372f30312f48544d4c352e6a7067" alt="HTML & CSS" />
            <Card.Body>
              <Card.Title>HTML & CSS</Card.Title>
              <Card.Text>Learn the fundamentals of web development</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://images.opencollective.com/bootstrap/a892851/background.png" alt="Bootstrap" />
            <Card.Body>
              <Card.Title>Bootstrap</Card.Title>
              <Card.Text>Explore the Bootstrap framework</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://learnbatta.com/assets/images/javascript/javascript-logo.png" alt="JavaScript" />
            <Card.Body>
              <Card.Title>JavaScript</Card.Title>
              <Card.Text>Advanced features for web interactivity</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://cipmnigeria.org.ng/wp-content/uploads/2018/11/HiRes-17.jpg" alt="BackEnd Project" />
            <Card.Body>
              <Card.Title>BackEnd with Project</Card.Title>
              <Card.Text>Hands-on backend development</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2><Badge bg="danger">Advance Programming Language</Badge></h2>
      <Row className="g-3">
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://www.inapps.net/wp-content/uploads/2022/05/java_logo_640.jpg " alt="Java" />
            <Card.Body>
              <Card.Title>Java</Card.Title>
              <Card.Text>Learn Java From Scratch</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://media.geeksforgeeks.org/wp-content/uploads/20230819113602/dsa-by-sandeep-jain.png" class="card-img-top" alt="Course Title 2" />
            <Card.Body>
              <Card.Title>DSA</Card.Title>
              <Card.Text>Explore the Advance topics in DSA from scratch</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://www.clicdata.com/wp-content/uploads/2023/03/consolidation.jpg" alt="JavaScript" />
            <Card.Body>
              <Card.Title>SQL & DBMS</Card.Title>
              <Card.Text>Delve into the World Of DataBase</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-5">
          <Card>
            <Card.Img variant="top" src="https://github.blog/wp-content/uploads/2023/01/1200x640-2.png?fit=1200%2C640" alt="BackEnd Project" />
            <Card.Body>
              <Card.Title>Git</Card.Title>
              <Card.Text>Learn Git-commands by doing Various project</Card.Text>
              <Button href="Price.html" variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      

      


    </Container>
  );
};

export default Courses;
