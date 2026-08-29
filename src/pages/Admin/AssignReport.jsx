import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import AdminSidebar from "../../components/Admin/adminDashboard/AdminSidebar";
import AdminTopbar from "../../components/Admin/adminDashboard/AdminTopbar";

import "../../css/adminDashboard/AdminLayout.css";
import "../../css/adminDashboard/AdminCard.css";
import "../../css/adminReportPage/AdminReport.css";
import "../../css/adminAssignReport/AdminAssignReport.css";

import { FiImage } from "react-icons/fi";

function AssignReport({ reports, setReports, users, departments }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const report = reports.find((item) => item.id === Number(id));

  const [department, setDepartment] = useState(report ? report.department || "" : "");
  const [employeeId, setEmployeeId] = useState(report && report.assignedTo ? String(report.assignedTo) : "");
  const [priority, setPriority] = useState(report ? report.priority || "" : "");
  const [adminNote, setAdminNote] = useState(report ? report.adminNote || "" : "");

  if (!report) {
    return (
      <div className="admin-layout">
        <AdminSidebar />
        <main className="admin-content">
          <h2>Report not found</h2>
        </main>
      </div>
    );
  }

  const availableEmployees = users.filter(
    (user) => user.role === "employee" && user.department === department
  );

  function getUserName(userId) {
    const user = users.find((item) => item.id === userId);
    return user ? user.name : "Unknown";
  }

  function handleDepartmentChange(event) {
    setDepartment(event.target.value);
    setEmployeeId("");
  }

  function handleAssign() {
    if (department === "" || employeeId === "" || priority === "") {
      alert("Please select a department, an employee, and a priority.");
      return;
    }

    const today = new Date().toLocaleDateString();

    setReports((currentReports) =>
      currentReports.map((item) =>
        item.id === report.id
          ? {
              ...item,
              department: department,
              assignedTo: Number(employeeId),
              priority: priority,
              adminNote: adminNote,
              assignedDate: today,
              status: "Assigned",
              history: [...item.history, { status: "Assigned", date: today }]
            }
          : item
      )
    );

    alert("Report assigned successfully");
    navigate("/admin/reports");
  }

  function handleReject() {
    const today = new Date().toLocaleDateString();

    setReports((currentReports) =>
      currentReports.map((item) =>
        item.id === report.id
          ? {
              ...item,
              status: "Rejected",
              adminNote: adminNote,
              history: [...item.history, { status: "Rejected", date: today }]
            }
          : item
      )
    );

    alert("Report rejected");
    navigate("/admin/reports");
  }

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-content">
        <AdminTopbar
          title="Assign Report"
          subtitle="Review the report and assign it to a department and employee."
        />

    

        <section className="admin-card">
  <div className="admin-card-header">
    <h2>Report Summary</h2>
  </div>

  <div className="assign-summary-top">

    {report.image ? (
      <img
        src={report.image}
        alt={report.title}
        className="assign-report-image"
      />
    ) : (
      <div className="assign-report-image assign-report-image-empty">
        <FiImage />
      </div>
    )}

    <div className="assign-summary-content">

      <h3 className="assign-report-title">{report.title}</h3>

      <div className="assign-summary-grid">
        <div>
          <span className="assign-label">Category</span>
          <p>{report.category}</p>
        </div>

        <div>
          <span className="assign-label">Location</span>
          <p>{report.location}</p>
        </div>

        <div>
          <span className="assign-label">Date Reported</span>
          <p>{report.reportedDate}</p>
        </div>

        <div>
          <span className="assign-label">Status</span>
          <p>
            <span
              className={`admin-status-badge ${report.status
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              {report.status}
            </span>
          </p>
        </div>

        <div>
          <span className="assign-label">Reported By</span>
          <p>{getUserName(report.reportedBy)}</p>
        </div>

        <div>
          <span className="assign-label">Current Assignee</span>
          <p>{report.assignedTo ? getUserName(report.assignedTo) : "Unassigned"}</p>
        </div>
      </div>

    </div>
  </div>

  <div className="assign-description">
    <span className="assign-label">Description</span>
    <p>{report.description}</p>
  </div>
</section>

        <section className="admin-card">
          <div className="admin-card-header">
            <h2>Assign Report</h2>
          </div>

          <div className="assign-form-grid">

            <div className="assign-field">
              <label htmlFor="department">Department / Service *</label>
              <select
                id="department"
                value={department}
                onChange={handleDepartmentChange}
              >
                <option value="">Select department or service</option>
                {departments.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="assign-field">
              <label htmlFor="employee">Assign to Employee *</label>
              <select
                id="employee"
                value={employeeId}
                onChange={(event) => setEmployeeId(event.target.value)}
                disabled={department === ""}
              >
                <option value="">
                  {department === ""
                    ? "Select a department first"
                    : "Select employee"}
                </option>

                {availableEmployees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>

              {department !== "" && availableEmployees.length === 0 && (
                <p className="assign-warning">
                  No employees in this department.
                </p>
              )}
            </div>

            <div className="assign-field">
              <label htmlFor="priority">Priority *</label>
              <select
                id="priority"
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
              >
                <option value="">Select priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="assign-field assign-field-wide">
              <label htmlFor="admin-note">Admin Note (Optional)</label>
              <textarea
                id="admin-note"
                maxLength={500}
                placeholder="Add a note about this assignment..."
                value={adminNote}
                onChange={(event) => setAdminNote(event.target.value)}
              ></textarea>
              <span className="assign-counter">{adminNote.length} / 500</span>
            </div>

          </div>

          <div className="assign-actions">
            <button
              type="button"
              className="assign-reject-button"
              onClick={handleReject}
            >
              Reject Report
            </button>

            <button
              type="button"
              className="assign-submit-button"
              onClick={handleAssign}
            >
              Assign Report
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AssignReport;