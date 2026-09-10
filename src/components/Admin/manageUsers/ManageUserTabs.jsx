import React from "react";

function ManageUserTabs({ activeTab, setActiveTab }) {
  const tabs = ["All Users", "Employees", "Citizens"];

  return (
    <div className="manage-users-tabs">

      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={`manage-users-tab ${
            activeTab === tab ? "active" : ""
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}

    </div>
  );
}

export default ManageUserTabs;