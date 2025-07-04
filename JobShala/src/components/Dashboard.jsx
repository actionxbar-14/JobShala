// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { IoMdHome } from "react-icons/io";
// import { FaBriefcase } from "react-icons/fa6";
// import { FaClipboardCheck } from "react-icons/fa";
// import { FaChartLine } from "react-icons/fa";
// import { FaBell } from "react-icons/fa";

// const Dashboard = ({ role = "candidate" }) => {
//   // Sidebar menu definitions per role
//   const menus = {
//     candidate: [
//       { key: "home", label: "Dashboard", icon: <IoMdHome /> },
//       { key: "jobs", label: "Eligible Jobs", icon: <FaBriefcase /> },
//       { key: "tests", label: "My Tests", icon: <FaClipboardCheck /> },
//       { key: "status", label: "Application Status", icon:<FaChartLine />},
//       { key: "alerts", label: "Notifications", icon: <FaBell /> },
//     ],
//     recruiter: [
//       { key: "home", label: "Dashboard", icon: <IoMdHome /> },
//       { key: "post", label: "Create Job", icon: <FaBriefcase /> },
//       { key: "candidates", label: "Applicants", icon: <FaClipboardCheck /> },
//       { key: "schedule", label: "Schedule Interview", icon: <FaChartLine /> },
//       { key: "alerts", label: "Notifications", icon: <FaBell /> },
//     ],
//     admin: [
//       { key: "home", label: "Dashboard", icon: <IoMdHome /> },
//       { key: "verify", label: "Verify Companies", icon: <FaBriefcase /> },
//       { key: "cleanup", label: "Remove Spam", icon: <FaChartLine /> },
//       { key: "usage", label: "Platform Usage", icon: <FaBell /> },
//     ],
//   };

//   const [active, setActive] = useState(menus[role][0].key);

//   const ActiveIcon = menus[role].find((m) => m.key === active)?.icon;

//   return (
//     <div className="min-h-screen flex bg-[#001a26] text-gray-200">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white/5 backdrop-blur-md border-r border-white/10 hidden md:block">
//         <div className="p-6 text-xl font-bold">JobBazar</div>
//         <nav className="flex flex-col gap-1 px-2">
//           {menus[role].map(({ key, label, icon: Icon }) => (
//             <button
//               key={key}
//               onClick={() => setActive(key)}
//               className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition ${
//                 active === key ? "bg-white/10" : ""
//               }`}
//             >
//               {/* <Icon className="w-5 h-5" />
//               {label} */}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         {/* <h1 className="text-2xl font-semibold mb-4 capitalize flex items-center gap-2">
//           {ActiveIcon && <ActiveIcon className="w-6 h-6" />} {active.replace(/(^.|_.)/g, (s) => s.toUpperCase())}
//         </h1> */}

//         {/* Placeholder sections – replace with real components */}
//         <section className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-sm">
//           <p className="text-gray-300 text-sm">
//             This is the <span className="font-medium">{active}</span> panel for the
//             <span className="font-medium"> {role}</span> role. Plug your real
//             components here.
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;




import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaBell } from "react-icons/fa";


/**
 * Dashboard component that adapts to three roles: "candidate", "recruiter", "admin".
 * Pass a `role` prop or fetch it from auth context.
 */
const Dashboard = ({ role = "candidate" }) => {
  // Sidebar menu definitions per role
  const menus = {
    candidate: [
      { key: "home", label: "Dashboard", icon: <IoMdHome/> },
      { key: "jobs", label: "Eligible Jobs", icon: <FaBriefcase/> },
      { key: "tests", label: "My Tests", icon: <FaClipboardCheck/> },
      { key: "status", label: "Application Status", icon: <FaChartLine/> },
      { key: "alerts", label: "Notifications", icon: <FaBell/> },
    ],
    recruiter: [
      { key: "home", label: "Dashboard", icon:  <IoMdHome/>},
      { key: "post", label: "Create Job", icon: <FaBriefcase/> },
      { key: "candidates", label: "Applicants", icon: <FaClipboardCheck/> },
      { key: "schedule", label: "Schedule Interview", icon: <FaChartLine/> },
      { key: "alerts", label: "Notifications", icon: <FaBell/> },
    ],
    admin: [
      { key: "home", label: "Dashboard", icon: <IoMdHome/> },
      { key: "verify", label: "Verify Companies", icon: <FaBriefcase/> },
      { key: "cleanup", label: "Remove Spam", icon: <FaClipboardCheck/> },
      { key: "usage", label: "Platform Usage", icon: <FaChartLine/> },
    ],
  };

  const [active, setActive] = useState(menus[role][0].key);

  const ActiveIcon = menus[role].find((m) => m.key === active)?.icon;

  return (
    <div className="min-h-screen flex bg-[#001a26] text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 backdrop-blur-md border-r border-white/10 hidden md:block z-[9998]">
        <div className="p-6 text-xl font-bold">JobBazar</div>
        <nav className="flex flex-col gap-1 px-2">
          {menus[role].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-15 px-4 py-2 rounded-md text-sm hover:bg-white/10 transition ${
                active === key ? "bg-white/10" : ""
              }`}
            >
             {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto z-[1]">
        {/* <h1 className="text-2xl font-semibold mb-4 capitalize flex items-center gap-2">
          {ActiveIcon && <ActiveIcon className="w-6 h-6" />}{" "}
          {active.replace(/(^.|_.)/g, (s) => s.toUpperCase())}
        </h1> */}

        {/* Placeholder sections – replace with real components */}
        <section className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-sm">
          <p className="text-gray-300 text-sm">
            This is the <span className="font-medium">{active}</span> panel for the
            <span className="font-medium"> {role}</span> role. Plug your real
            components here.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
