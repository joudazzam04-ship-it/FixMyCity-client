import React from "react";

function ReportFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  onReset
}) {

  const statuses = [
    "All",
    "Pending Review",
    "Assigned",
    "In Progress",
    "Under Review",
    "Resolved",
    "Rejected"
  ];

  const priorities = [
    "All",
    "High",
    "Medium",
    "Low"
  ];

  return (
    <section className="admin-card admin-filter-bar">

      <input
        type="text"
        className="admin-search-input"
        placeholder="Search by issue or location..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      <div className="admin-filter-group">

        <label htmlFor="status-filter">
          Status
        </label>

        <select
          id="status-filter"
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
        >

          {statuses.map((status) => (
            <option
              key={status}
              value={status}
            >
              {status}
            </option>
          ))}

        </select>

      </div>

      <div className="admin-filter-group">

        <label htmlFor="priority-filter">
          Priority
        </label>

        <select
          id="priority-filter"
          value={priorityFilter}
          onChange={(event) =>
            setPriorityFilter(event.target.value)
          }
        >

          {priorities.map((priority) => (
            <option
              key={priority}
              value={priority}
            >
              {priority}
            </option>
          ))}

        </select>

      </div>

      <button
        type="button"
        className="admin-reset-button"
        onClick={onReset}
      >
        Reset
      </button>

    </section>
  );
}

export default ReportFilters;