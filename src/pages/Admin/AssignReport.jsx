import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AdminSidebar from "../../components/Admin/adminDashboard/AdminSidebar";
import AdminTopbar from "../../components/Admin/adminDashboard/AdminTopbar";

import ReportSummary from "../../components/Admin/assignReport/ReportSummary";
import AssignForm from "../../components/Admin/assignReport/AssignForm";
import ReportActivity from "../../components/Admin/assignReport/ReportActivity";

import "../../css/adminDashboard/adminLayout.css";
import "../../css/adminDashboard/AdminCard.css";
import "../../css/adminReportPage/AdminReport.css";
import "../../css/adminAssignReport/AdminAssignReport.css";


function AssignReport({ currentUser, setCurrentUser }) {

  const { id } = useParams();
  const navigate = useNavigate();

  const savedUser = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const user = currentUser || savedUser;

  const [report, setReport] = useState(null);

  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);

  const [loading, setLoading] = useState(true);

  const [departmentId, setDepartmentId] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [priority, setPriority] = useState("");
  const [adminNote, setAdminNote] = useState("");


  // When page loads or report ID changes
  useEffect(() => {
    fetchReport();
    fetchDepartments();
  }, [id]);


  // Get one report
  const fetchReport = async () => {

    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/reports/${id}`
    );

    const data = await res.json();

    if (res.ok) {

      setReport(data);

      setDepartmentId(
        data.department_id ? String(data.department_id) : "");

      setEmployeeId(
        data.assigned_to ? String(data.assigned_to) : "");

      setPriority(data.priority || "");

      setAdminNote(data.admin_note || "");
    }

    setLoading(false);
  };


  // Get all departments
  const fetchDepartments = async () => {

    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/departments`
    );

    const data = await res.json();

    setDepartments(data);
  };


  // Get employees belonging to selected department
  const fetchEmployees = async (deptId) => {

    if (deptId === "") {
      setEmployees([]);
      return;
    }

    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/users/employees/department/${deptId}`,
      {
        headers: {
          "x-role": user.role
        }
      }
    );

    const data = await res.json();

    setEmployees(data);
  };


  // Whenever department changes, load its employees
  useEffect(() => {
    fetchEmployees(departmentId);
  }, [departmentId]);


  // When admin changes department
  const handleDepartmentChange = (event) => {

    setDepartmentId(event.target.value);
    setEmployeeId(""); //employees depend on department, so reset employee selection when department changes
  };


  // Assign report
  const handleAssign = async () => {

    if (
      departmentId === "" ||
      employeeId === "" ||
      priority === ""
    ) {

      alert(
        "Please select a department, an employee, and a priority."
      );

      return;
    }


    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/reports/${id}/assign`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          "x-role": user.role
        },

        body: JSON.stringify({
          department_id: Number(departmentId),
          assigned_to: Number(employeeId),
          priority: priority,
          admin_note: adminNote,
          changed_by: user.id
        })
      }
    );


    const data = await res.json();


    if (!res.ok) {
      alert(data.message);
      return;
    }


    alert("Report assigned successfully");

    navigate("/admin/reports");
  };


  // Reject report
  const handleReject = async () => {

    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/reports/${id}/reject`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          "x-role": user.role
        },

        body: JSON.stringify({
          admin_note: adminNote,
          changed_by: user.id
        })
      }
    );


    const data = await res.json();


    if (!res.ok) {
      alert(data.message);
      return;
    }


    alert("Report rejected");

    navigate("/admin/reports");
  };


if (loading) {
  return (
    <div className="admin-layout">
      <AdminSidebar
        currentUser={user}
        setCurrentUser={setCurrentUser}
      />

      <main className="admin-content">
        <h2>Loading report...</h2>
      </main>
    </div>
  );
}

if (!report) {
  return (
    <div className="admin-layout">
      <AdminSidebar
        currentUser={user}
        setCurrentUser={setCurrentUser}
      />

      <main className="admin-content">
        <h2>Report not found</h2>
      </main>
    </div>
  );
}


  return (

    <div className="admin-layout">

      <AdminSidebar
        currentUser={user}
        setCurrentUser={setCurrentUser}
      />


      <main className="admin-content">

        <AdminTopbar
          title="Assign Report"
          subtitle="Review the report and assign it to a department and employee."
          currentUser={user}
          setCurrentUser={setCurrentUser}
        />


        <ReportSummary
          report={report}
        />


        <AssignForm
          departments={departments}
          employees={employees}

          departmentId={departmentId}
          employeeId={employeeId}
          priority={priority}
          adminNote={adminNote}
          setEmployeeId={setEmployeeId}
          setPriority={setPriority}
          setAdminNote={setAdminNote}

          onDepartmentChange={handleDepartmentChange}
          onAssign={handleAssign}
          onReject={handleReject}
        />


        <ReportActivity
  history={report?.history || []}
  notes={report?.notes || []}
  images={report?.progressImages || []}
/>

      </main>

    </div>
  );
}


export default AssignReport;