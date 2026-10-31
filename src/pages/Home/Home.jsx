
import React from "react";
import {  Button } from "react-bootstrap";
import image1 from '../../assets/image1.jpg';

const Home = () => {
  return (
    <div className="home-page container  d-flex align-items-center justify-content-center">

      {/* Hero Section */}
      <div className=" container py-5 ">

            <h2 className="fw-bold text-primary">
              Welcome to ProjectFlow
            </h2>

            <h3 className="fw-bold mt-3">
              Manage Your Projects.
              <br />
              Achieve More Together.
            </h3>

            <p className="text-muted mt-3">
              ProjectFlow helps you organize projects, manage tasks,
              divlaborate with team members, and track your progress
              from one simple dashboard.
            </p>

            <Button variant="primary" className="me-2">
              Get Started
            </Button>

            <Button variant="outline-primary">
              Learn More
            </Button>

            </div>
          <div className="mt-4 mt-md-0">
            <img
              src={image1}
              alt="Developer working on a project"
              className="home-image"
              style={{width:"600px"}}
            />
          </div>

    </div>

      
  );
};

export default Home;
