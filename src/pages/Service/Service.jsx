import React from 'react'
import {Card } from 'react-bootstrap'
function Service() {
  return (
    <div>

        
    {/* Features Section */}
      <div className="container py-2">

        <div className="text-center mb-5">

          <span className="text-primary fw-semibold">
            WHY PROJECTFLOW?
          </span>

          <h2 className="fw-bold mt-2">
            Everything You Need to Stay Productive
          </h2>

          <p className="text-muted">
            Simple tools designed to make your everyday work easier.
          </p>

        </div>

        <div className="d-flex g-4 py-3">

          <div md={4}>
            <Card className="border-0 shadow-sm rounded-4 h-100">
              <Card.Body className="p-4">

                <div className="fs-1 mb-3">📁</div>

                <h4 className="fw-bold">
                  Project Management
                </h4>

                <p className="text-muted mb-0 lh-lg">
                  Create, organize, edit, and manage all your projects
                  from a single workspace.
                </p>

              </Card.Body>
            </Card>
          </div>

          <div md={4}>
            <Card className="border-0 shadow-sm rounded-4 h-100">
              <Card.Body className="p-4">

                <div className="fs-1 mb-3">🎯</div>

                <h4 className="fw-bold">
                  Task Management
                </h4>

                <p className="text-muted mb-0 lh-lg">
                  Assign tasks, set priorities, manage deadlines,
                  and monitor your progress.
                </p>

              </Card.Body>
            </Card>
          </div>

          <div md={4}>
            <Card className="border-0 shadow-sm rounded-4 h-100">
              <Card.Body className="p-4">

                <div className="fs-1 mb-3">🤝</div>

                <h4 className="fw-bold">
                  Team divlaboration
                </h4>

                <p className="text-muted mb-0 lh-lg">
                  Bring your team together, assign responsibilities,
                  and achieve goals efficiently.
                </p>

              </Card.Body>
            </Card>
          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(120deg, #0d6efd, #4338ca)"
        }}
      >

        <div>

          <h2 className="fw-bold">
            Great Things Happen When Teams Work Together.
          </h2>

          <p className="mt-3 mb-0 text-white-50">
            Stay organized. Stay productive. Make every project count.
          </p>

        </div>

      </div>
      </div>

      

  )
}

export default Service