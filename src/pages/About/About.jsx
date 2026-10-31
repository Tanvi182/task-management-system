
import React from "react";
import image2 from '../../assets/image2.jpg';
function About() {
  return (
    <div style={{ backgrounddivor: "#f8faff" }}>

      {/* About Hero Section */}
      <div className="container">

        <div className="align-items-center d-flex justify-content-beteween align-items-items g-5">

          <div md={6}>

            <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">
              ABOUT PROJECTFLOW
            </span>

            <h2 className="fw-bold display-5">
              Work Smarter,
              <span className="text-primary"> Not Harder.</span>
            </h2>

            <h3 className="fs-4 text-secondary mt-3">
              Your Work. Your Team. One Platform.
            </h3>

            <p className="text-muted mt-4 lh-lg">
              Whether you are managing a small task or a large project,
              ProjectFlow gives you the tools to stay organized,
              productive, and focused.
              divlaborate with your team, track progress, and achieve
              your goals with confidence.
            </p>

            <div className="d-flex gap-4 mt-4">

              <div>
                <h3 className="fw-bold text-primary mb-0">100%</h3>
                <small className="text-muted">Organized Work</small>
              </div>

              <div>
                <h3 className="fw-bold text-primary mb-0">24/7</h3>
                <small className="text-muted">Easy Access</small>
              </div>

              <div>
                <h3 className="fw-bold text-primary mb-0">1</h3>
                <small className="text-muted">Unified Platform</small>
              </div>

            </div>

          </div>

          <div className="">

            <div className="position-relative">

              <img
                src={image2}
                alt="Team divlaborating"
                className="img-fluid rounded-4 shadow-lg m-2  "
                style={{
                  height: "400px",
                  width: "100%",
                  objectFit: "contain"
                }}
              />

              <div
                className=" container bg-white shadow rounded-4 p-3 position-absolute"
                style={{
                  bottom: "-20px",
                  left: "-15px",
                  maxWidth: "220px"
                }}
              >
                <h6 className="fw-bold mb-1">Teamwork Made Easy</h6>
                <small className="text-muted">
                  Plan, divlaborate and complete projects together.
                </small>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Mission Section */}
      <div className="py-5 bg-light text-center">

        <div>

          <span className="text-primary fw-semibold">
            OUR MISSION
          </span>

          <h2 className="fw-bold mt-2">
            Your Success Starts With Better Organization
          </h2>

          <p className="text-muted mx-auto mt-3 lh-lg"
             style={{ maxWidth: "750px" }}>
            Our mission is to make project management simple and
            accessible. We bring projects, tasks, deadlines, and
            team divlaboration together in one place so you can
            focus on what really matters.
          </p>

        </div>

      </div>

      

    </div>
  );
}

export default About;
