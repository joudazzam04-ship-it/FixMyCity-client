import React from "react";

function UserFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter
}) {
  const resetFilters = () => {
    setSearch("");
    setStatusFilter("All");
  };

  return (
    <section className="admin-card admin-filter-bar">

      <input
        type="text"
        className="admin-search-input"
        placeholder="Search by name, email or phone..."
        value={search}
                                      //Get the current value inside the input box.
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="admin-filter-group">

        <label htmlFor="user-status">Status</label>

        <select
          id="user-status"
          value={statusFilter}
          onChange={(event) =>setStatusFilter(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

      </div>

      <button
        type="button"
        className="admin-reset-button"
        onClick={resetFilters}
      >
        Reset
      </button>

    </section>
  );
}

export default UserFilters;