import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

import Header from "../../components/UserHeader/UserHeader";
import Sidebar from "../../components/SideBar/SideBar";
import DashboardStats from "../../components/UserdashboardStat/UserdashboardStat";

import ProjectForm from "../../components/ProjectForm/ProjectForm";
import ProjectList from "../../components/ProjectList/ProjectList";

import TaskForm from "../../components/TaskForm/TaskForm";
import TaskFilters from "../../components/TaskFilter/TaskFilter";
import TaskBoard from "../../components/TaskBoard/TaskBoard";

// PROJECT REDUCER
import {
  fetchProjects,
  addProject,
  updateProject,
  deleteProject
} from "../../features/projectReducer";

// TASK REDUCER
import {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask
} from "../../features/taskSlice";


const UserDashboard = ({ onLogout }) => {

  const dispatch = useDispatch();

  // ---------------- REDUX STORE ----------------

  const projectState = useSelector(
    (state) => state.projects || {}
  );

  const taskState = useSelector(
    (state) => state.tasks || {}
  );

  const projects = Array.isArray(projectState.projects)
    ? projectState.projects
    : [];

  const tasks = Array.isArray(taskState.tasks)
    ? taskState.tasks
    : [];

  const projectLoading = projectState.loading;
  const taskLoading = taskState.loading;

  const projectError = projectState.error;
  const taskError = taskState.error;


  // ---------------- USERS ----------------

  const users = [
    { id: 1, name: "Tanvi" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" }
  ];


  // ---------------- LOCAL STATES ----------------

  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);

  const [editProject, setEditProject] = useState(null);
  const [editTask, setEditTask] = useState(null);

  const [activePage, setActivePage] = useState("Overview");

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    priority: "",
    projectId: ""
  });


  // ---------------- FETCH DATA ----------------

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        await Promise.all([
          dispatch(fetchProjects()).unwrap(),
          dispatch(fetchTasks()).unwrap()
        ]);

      } catch (error) {

        console.error("Dashboard Fetch Error:", error);

      }

    };

    loadDashboard();

  }, [dispatch]);


  // ---------------- PROJECT CRUD ----------------

  // ADD PROJECT

  const handleAddProject = () => {

    setEditProject(null);
    setShowProjectForm(true);

  };


  // CREATE / UPDATE PROJECT

  const handleSaveProject = async (data) => {

    if (!data.name?.trim()) {

      alert("Please enter project name.");
      return;

    }

    try {

      const projectData = {
        ...data,
        createdBy: 1,
        members: [1],
        createdAt:
          editProject?.createdAt || new Date().toISOString()
      };

      if (editProject) {

        await dispatch(
          updateProject({
            id: editProject.id,
            projectData
          })
        ).unwrap();

        alert("Project updated successfully!");

      } else {

        await dispatch(
          addProject(projectData)
        ).unwrap();

        alert("Project created successfully!");

      }

      setShowProjectForm(false);
      setEditProject(null);

    } catch (error) {

      console.error("Project CRUD Error:", error);

      alert(
        "Project operation failed: " +
        (error?.message || error)
      );

      throw error;

    }

  };


  // EDIT PROJECT

  const handleEditProject = (project) => {

    setEditProject(project);
    setShowProjectForm(true);

  };


  // DELETE PROJECT

  const handleDeleteProject = async (id) => {

    if (!window.confirm(
      "Are you sure you want to delete this project and its tasks?"
    )) {
      return;
    }

    try {

      const relatedTasks = tasks.filter(
        (task) => String(task.projectId) === String(id)
      );

      // Delete related tasks first

      for (const task of relatedTasks) {

        await dispatch(
          deleteTask(task.id)
        ).unwrap();

      }

      // Delete project

      await dispatch(
        deleteProject(id)
      ).unwrap();

      alert("Project deleted successfully!");

    } catch (error) {

      console.error("Project Delete Error:", error);

      alert("Unable to delete project.");

    }

  };


  // CLOSE PROJECT FORM

  const handleCloseProject = () => {

    setShowProjectForm(false);
    setEditProject(null);

  };


  // ---------------- TASK CRUD ----------------

  // ADD TASK

  const handleAddTask = () => {

    if (projects.length === 0) {

      alert("First create a project, then add tasks.");
      return;

    }

    setEditTask(null);
    setShowTaskForm(true);

  };


  // CREATE / UPDATE TASK

  const handleSaveTask = async (data) => {

    if (!data.title?.trim()) {

      alert("Please enter task title.");
      return;

    }

    if (!data.projectId) {

      alert("Please select a project.");
      return;

    }

    try {

      const taskData = {
        ...data,
        projectId: Number(data.projectId),
        assignedTo: data.assignedTo
          ? Number(data.assignedTo)
          : "",
        status: data.status || "Todo",
        priority: data.priority || "Medium"
      };

      if (editTask) {

        await dispatch(
          updateTask({
            id: editTask.id,
            taskData
          })
        ).unwrap();

        alert("Task updated successfully!");

      } else {

        await dispatch(
          addTask(taskData)
        ).unwrap();

        alert("Task created successfully!");

      }

      setShowTaskForm(false);
      setEditTask(null);

    } catch (error) {

      console.error("Task CRUD Error:", error);

      alert(
        "Task operation failed: " +
        (error?.message || error)
      );

      throw error;

    }

  };


  // EDIT TASK

  const handleEditTask = (task) => {

    setEditTask(task);
    setShowTaskForm(true);

  };


  // DELETE TASK

  const handleDeleteTask = async (id) => {

    if (!window.confirm("Are you sure you want to delete this task?")) {
      return;
    }

    try {

      await dispatch(
        deleteTask(id)
      ).unwrap();

      alert("Task deleted successfully!");

    } catch (error) {

      console.error("Task Delete Error:", error);

      alert("Unable to delete task.");

    }

  };


  // UPDATE TASK STATUS

  const handleStatusChange = async (id, status) => {

    try {

      const task = tasks.find(
        (item) => String(item.id) === String(id)
      );

      if (!task) {

        alert("Task not found.");
        return;

      }

      await dispatch(
        updateTask({
          id: task.id,
          taskData: {
            ...task,
            status
          }
        })
      ).unwrap();

    } catch (error) {

      console.error("Status Update Error:", error);

      alert("Unable to update task status.");

    }

  };


  // CLOSE TASK FORM

  const handleCloseTask = () => {

    setShowTaskForm(false);
    setEditTask(null);

  };


  // ---------------- FILTER TASKS ----------------

  const filteredTasks = tasks.filter((task) => {

    const searchMatch = (task.title || "")
      .toLowerCase()
      .includes((filters.search || "").toLowerCase());

    const statusMatch =
      !filters.status ||
      task.status === filters.status;

    const priorityMatch =
      !filters.priority ||
      task.priority === filters.priority;

    const projectMatch =
      !filters.projectId ||
      String(task.projectId) === String(filters.projectId);

    return (
      searchMatch &&
      statusMatch &&
      priorityMatch &&
      projectMatch
    );

  });


  // ---------------- DASHBOARD UI ----------------

  return (

    <div className="dashboard-wrapper container-fluid d-flex p-0">

      {/* SIDEBAR */}

      <Sidebar
        activePage={activePage}
        onSelect={setActivePage}
      />


      <div className="dashboard-content container-fluid">

        {/* HEADER */}

        <Header
          user="Tanvi"
          onLogout={onLogout}
        />


        <div className="container-fluid p-4">

          {/* PAGE HEADING */}

          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">

            <div>

              <h3 className="fw-bold">
                {activePage}
              </h3>

              <p className="text-muted mb-0">
                Manage your projects and tasks.
              </p>

            </div>


            {/* ACTION BUTTONS */}

            <div className="d-flex gap-2">

              <Button
                variant="outline-primary"
                onClick={handleAddProject}
              >
                + Add Project
              </Button>

              <Button
                variant="primary"
                onClick={handleAddTask}
                disabled={projects.length === 0}
              >
                + Add Task
              </Button>

            </div>

          </div>


          {/* LOADING */}

          {(projectLoading || taskLoading) && (

            <p className="text-primary">
              Loading dashboard data...
            </p>

          )}


          {/* ERRORS */}

          {projectError && (

            <p className="text-danger">
              Project Error: {projectError}
            </p>

          )}

          {taskError && (

            <p className="text-danger">
              Task Error: {taskError}
            </p>

          )}


          {/* OVERVIEW PAGE */}

          {activePage === "Overview" && (

            <>

              <DashboardStats
                projects={projects}
                tasks={tasks}
              />


              <h5 className="fw-bold mb-3 mt-4">
                Recent Projects
              </h5>


              <ProjectList
                projects={projects}
                onEdit={handleEditProject}
                onDelete={handleDeleteProject}
              />


              <h5 className="fw-bold mb-3 mt-4">
                Task Board
              </h5>


              <TaskFilters
                filters={{
                  ...filters,
                  projects
                }}
                setFilters={setFilters}
              />


              <TaskBoard
                tasks={filteredTasks}
                users={users}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onStatusChange={handleStatusChange}
              />

            </>

          )}


          {/* PROJECTS PAGE */}

          {activePage === "Projects" && (

            <ProjectList
              projects={projects}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
            />

          )}


          {/* TASKS PAGE */}

          {activePage === "Tasks" && (

            <>

              <TaskFilters
                filters={{
                  ...filters,
                  projects
                }}
                setFilters={setFilters}
              />


              <TaskBoard
                tasks={filteredTasks}
                users={users}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onStatusChange={handleStatusChange}
              />

            </>

          )}


          {/* TEAM MEMBERS PAGE */}

          {activePage === "Team Members" && (

            <>

              <h5 className="fw-bold mb-3">
                Team Members
              </h5>

              {users.map((user) => (

                <p key={user.id}>
                  {user.name}
                </p>

              ))}

            </>

          )}

        </div>

      </div>


      {/* PROJECT FORM MODAL */}

      <ProjectForm
        show={showProjectForm}
        onHide={handleCloseProject}
        onSave={handleSaveProject}
        editProject={editProject}
      />


      {/* TASK FORM MODAL */}

      <TaskForm
        show={showTaskForm}
        onHide={handleCloseTask}
        onSave={handleSaveTask}
        projects={projects}
        users={users}
        editTask={editTask}
      />

    </div>

  );

};

export default UserDashboard;