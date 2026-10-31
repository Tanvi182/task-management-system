import React from "react";
import { Container, Carousel, Card } from "react-bootstrap";

function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager",
      image: "https://i.pravatar.cc/150?img=47",
      review:
        "ProjectFlow has completely changed how our team manages projects. Everything is organized in one place, and tracking tasks has become incredibly easy.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Software Developer",
      image: "https://i.pravatar.cc/150?img=12",
      review:
        "I love how simple and user-friendly ProjectFlow is. Assigning tasks, tracking deadlines, and collaborating with teammates is now much easier.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Wilson",
      role: "Team Leader",
      image: "https://i.pravatar.cc/150?img=44",
      review:
        "A great platform for keeping everyone on the same page. The task board makes it easy to understand project progress and manage responsibilities.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Miller",
      role: "Business Analyst",
      image: "https://i.pravatar.cc/150?img=11",
      review:
        "ProjectFlow provides a clean workspace for managing multiple projects. Its simple interface saves time and helps our team stay productive.",
      rating: 5,
    },
  ];

  return (
    <div style={{ backgroundColor: "#f5f8ff" }}>
      <Container className="py-3">

        {/* Heading */}
        <div className="text-center mb-5">
          <span className="badge bg-primary rounded-pill px-3 py-2">
            TESTIMONIALS
          </span>

          <h2 className="fw-bold mt-3">
            What People Say About Us
          </h2>

          <p className="text-muted">
            Discover how ProjectFlow helps teams work smarter.
          </p>
        </div>

        {/* Card Carousel */}
        <div className="mx-auto" style={{ maxWidth: "750px" }}>
          <Carousel
            indicators={true}
            controls={true}
            interval={3000}
            pause="hover"
            variant="dark"
          >
            {reviews.map((item) => (
              <Carousel.Item key={item.id}>
                <Card
                  className="border-0 shadow rounded-4 mx-4 mb-5"
                  style={{ minHeight: "390px" }}
                >
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center p-4 p-md-5">

                    {/* <div
                      className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        fontSize: "30px",
                      }}
                    >
                    </div> */}

                    {/* Review */}
                    <p className="text-secondary fs-5 lh-lg">
                      {item.review}
                    </p>

                    {/* Rating */}
                    <div className="text-warning fs-4 mb-3">
                      {"★".repeat(item.rating)}
                      <span className="text-secondary">
                        {"☆".repeat(5 - item.rating)}
                      </span>
                    </div>

                    {/* Profile */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-circle mb-3"
                      style={{
                        width: "75px",
                        height: "75px",
                        objectFit: "cover",
                        border: "4px solid #e8efff",
                      }}
                    />

                    <h5 className="fw-bold mb-1">
                      {item.name}
                    </h5>

                    <p className="text-primary mb-0">
                      {item.role}
                    </p>

                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-4">
          <h4 className="fw-bold">
            Your Team Could Be Next!
          </h4>

          <p className="text-muted">
            Start organizing your work and make every project count.
          </p>
        </div>

      </Container>
    </div>
  );
}

export default Testimonials;
