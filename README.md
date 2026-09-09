# FixMyCity — Frontend

## What Is This Application

FixMyCity is a civic issue reporting web application that connects citizens with their local municipality. Citizens report public problems such as potholes, broken streetlights, water leaks and uncollected garbage. Municipality staff receive those reports, work on them, and post progress updates back to the citizen who reported the issue.

This repository contains the React frontend. The REST API it communicates with lives in a separate repository, [FixMyCity-server](https://github.com/joudazzam04-ship-it/FixMyCity-server).

## Description

The application serves three types of user, each with their own interface.

**Citizens** register an account, submit reports with a photo and a map-pinned location, and follow the status of everything they have reported. They can see the full status history of a report along with any notes and progress photos added by the assigned employee.

**Employees** see only the reports assigned to them. They update a report's status through its lifecycle, add progress notes, and upload photos of the work carried out.

**Administrators** oversee the whole system. They review incoming reports and either assign them to a department and employee with a priority, or reject them. They also manage user accounts and create employee accounts.

A report moves through six states: Pending Review, Assigned, In Progress, Under Review, Resolved and Rejected. Every transition is recorded with a timestamp so all three roles can see how a report progressed.

## User Requirements

### Citizen

- Register an account and log in
- Submit a report with a title, category, description, location pinned on a map, and an optional photo
- View a dashboard summarising their reports
- View a list of all reports they have submitted
- View the full details of a report, including its status history
- See notes and progress photos added by the assigned employee
- View and update their own profile

### Employee

- Log in with an account created by an administrator
- View a dashboard of reports assigned to them
- Update the status of an assigned report
- Add progress notes visible to the citizen and the administrator
- Upload progress photos of the work carried out
- View the full update history of a report
- View and update their own profile

### Administrator

- Log in with an administrator account
- View a dashboard with system-wide statistics
- View, search and filter all reports by status and priority
- Assign a report to a department and employee, set its priority, and add a note
- Reject a report with an explanatory note
- View the full activity history of any report, including employee notes and photos
- View, search and filter all user accounts
- Create employee accounts and assign them to a department
- Activate and deactivate user accounts

## Technologies

| Technology | Purpose |
|---|---|
| React 18 | User interface library |
| Vite | Build tool and development server |
| React Router | Client-side routing between pages |
| React Bootstrap | Navigation bar components |
| React Icons | Icon set used throughout the interface |
| Leaflet | Interactive map for pinning report locations |
| OpenStreetMap / Nominatim | Map tiles and reverse geocoding of coordinates to addresses |
| CSS | Custom styling, one stylesheet per feature area |

Data is fetched from the backend using the browser's native `fetch` API. Each page component fetches the data it needs and re-fetches after any change, so the interface always reflects the database.

## Getting Started

### Prerequisites

- Node.js version 18 or later
- The [FixMyCity-server](https://github.com/joudazzam04-ship-it/FixMyCity-server) backend running on port 5000

### Installation

Clone the repository and move into it:

```bash
git clone https://github.com/joudazzam04-ship-it/FixMyCity-client.git
cd FixMyCity-client
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Test Accounts

The seed data in the backend includes the following accounts:

| Role | Email | Password |
|---|---|---|
| Administrator | admin@fixmycity.jo | temp1234 |

Citizen accounts can be created through the registration page. Employee accounts are created by an administrator from the Manage Users page.

## Project Structure

```
src/
├── components/     Reusable UI components, grouped by role
│   ├── Admin/
│   ├── Citizen/
│   ├── emp/
│   └── Home/
├── pages/          Full page components, one per route
│   ├── Admin/
│   ├── Auth/
│   ├── Citizen/
│   ├── Emp/
│   └── Home/
├── css/            Stylesheets, one folder per feature area
├── assets/         Images and logo
├── App.jsx         Route definitions and logged-in user state
└── main.jsx        Application entry point
```