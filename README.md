# JobShala
A sleek, minimal React + Tailwind project to browse, apply, and track job applications in real time.
🚀 Overview

This project is a Job Application Tracker built with React. Users can:

Browse job listings

Apply for jobs using a simple form

View application status on a dedicated tracking page

It's ideal for practicing frontend skills, React routing, and global state handling via Context API.

🛠 Tech Stack

React JS – SPA architecture using functional components

Tailwind CSS – Utility-first CSS framework for clean UI

React Router DOM – Routing between pages

Context API – Global state management

React Toastify (optional) – For success notifications

📌 Features

🏠 Job List Page (/)

Displays job cards in a responsive grid

Each card shows:

Job title

Company name

Short description

"Apply Now" button

📝 Apply Page (/apply/:id)

Shows pre-filled job information

Application form includes:

Name

Email

Resume link (optional)

Cover letter/message

On submit:

Data saved in global context

Toast shown

Redirect to Status Page

📊 Status Page (/status)

Lists all applied jobs

Shows:

Job title

Company

Application date/time

Status (default: Pending)

📂 Folder Location

This project lives under the React-Projects repo:

React-Projects/
└── job-application-tracker/
    ├── public/
    ├── src/
    ├── package.json
    └── ...

📷 Screenshots

(Add screenshots of each page here - Job List, Apply Form, Status Page)

📎 How to Run Locally

git clone https://github.com/actionxbar-14/React-Projects
cd React-Projects/job-application-tracker
npm install
npm start

👨‍💻 Author

Made by Anubhav Pathak

📄 License

MIT – Feel free to fork & build!

