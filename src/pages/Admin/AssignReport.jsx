import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AdminSidebar from "../../components/Admin/adminDashboard/AdminSidebar";
import AdminTopbar from "../../components/Admin/adminDashboard/AdminTopbar";
import ReportActivity from "../../components/Admin/adminDashboard/ReportActivity";

import "../../css/adminDashboard/AdminLayout.css";
import "../../css/adminDashboard/AdminCard.css";
import "../../css/adminReportPage/AdminReport.css";
import "../../css/adminAssignReport/AdminAssignReport.css";

import { FiImage } from "react-icons/fi";

function AssignReport({ currentUser, setCurrentUser }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const savedUser = JSON.parse(localStorage.getItem("user") || "null");
  const user = currentUser || savedUser;

  const [report, setReport] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const [departmentId, setDepartmentId] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [priority, setPriority] = useState("");
  const [adminNote, setAdminNote] = useState("");

  useEffect(() => {
    fetchReport();
    fetchDepartments();
  }, [id]);

  const fetchReport = async () => {
    const res = await fetch(`http://localhost:5000/api/reports/${id}`);
    const data = await res.json();

    if (res.ok) {
      setReport(data);
      setDepartmentId(data.department_id ? String(data.department_id) : "");
      setEmployeeId(data.assigned_to ? String(data.assigned_to) : "");
      setPriority(data.priority || "");
      setAdminNote(data.admin_note || "");
    }

    setLoading(false);
  };

  const fetchDepartments = async () => {
    const res = await fetch("http://localhost:5000/api/departments");
    const data = await res.json();
    setDepartments(data);
  };

  const fetchEmployees = async (deptId) => {
    if (deptId === "") {
      setEmployees([]);
      return;
    }

    const res = await fetch(
      `http://localhost:5000/api/users/employees/department/${deptId}`,
      { headers: { "x-role": user.role } }
    );
    const data = await res.json();
    setEmployees(data);
  };

  // Load the employee list whenever a department is chosen,
  // including the one already saved on the report.
  useEffect(() => {
    fetchEmployees(departmentId);
  }, [departmentId]);

  const handleDepartmentChange = (event) => {
    setDepartmentId(event.target.value);
    setEmployeeId("");
  };

  const handleAssign = async () => {
    if (departmentId === "" || employeeId === "" || priority === "") {
      alert("Please select a department, an employee, and a priority.");
      return;
    }

    const res = await fetch(`http://localhost:5000/api/reports/${id}/assign`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-role": user.role,
      },
      body: JSON.stringify({
        department_id: Number(departmentId),
        assigned_to: Number(employeeId),
        priority: priority,
        admin_note: adminNote,
        changed_by: user.id,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Report assigned successfully");
    navigate("/admin/reports");
  };

  const handleReject = async () => {
    const res = await fetch(`http://localhost:5000/api/reports/${id}/reject`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-role": user.role,
      },
      body: JSON.stringify({
        admin_note: adminNote,
        changed_by: user.id,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Report rejected");
    navigate("/admin/reports");
  };

  function formatDate(value) {
    if (!value) return "—";
    return new Date(value).toLocaleDateString();
  }

  if (loading) {
    return (
      <div className="admin-layout">
        <AdminSidebar currentUser={user} setCurrentUser={setCurrentUser} />
        <main className="admin-content">
          <h2>Loading report...</h2>
        </main>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="admin-layout">
        <AdminSidebar currentUser={user} setCurrentUser={setCurrentUser} />
        <main className="admin-content">
          <h2>Report not found</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <AdminSidebar currentUser={user} setCurrentUser={setCurrentUser} />

      <main className="admin-content">
        <AdminTopbar
          title="Assign Report"
          subtitle="Review the report and assign it to a department and employee."
          currentUser={user}
          setCurrentUser={setCurrentUser}
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
                  <p>{report.category || "—"}</p>
                </div>

                <div>
                  <span className="assign-label">Location</span>
                  <p>{report.location}</p>
                </div>

                <div>
                  <span className="assign-label">Date Reported</span>
                  <p>{formatDate(report.reported_date)}</p>
                </div>

                <div>
                  <span className="assign-label">Status</span>
                  <p>
                    <span
                      className={`admin-status-badge ${(report.status || "")
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {report.status}
                    </span>
                  </p>
                </div>

                <div>
                  <span className="assign-label">Reported By</span>
                  <p>{report.reported_by_name || "—"}</p>
                </div>

                <div>
                  <span className="assign-label">Current Assignee</span>
                  <p>{report.assigned_to_name || "Unassigned"}</p>
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
                value={departmentId}
                onChange={handleDepartmentChange}
              >
                <option value="">Select department or service</option>
                {departments.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="assign-field">
              <label htmlFor="employee">Assign to Employee *</label>
              <select
                id="employee"
                value={employeeId}
                onChange={(event) => setEmployeeId(event.target.value)}
                disabled={departmentId === ""}
              >
                <option value="">
                  {departmentId === ""
                    ? "Select a department first"
                    : "Select employee"}
                </option>

                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>

              {departmentId !== "" && employees.length === 0 && (
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
        <ReportActivity
          history={report.history || []}
          notes={report.notes || []}
          images={report.progressImages || []}
        />
      </main>
    </div>
  );
}

export default AssignReport;