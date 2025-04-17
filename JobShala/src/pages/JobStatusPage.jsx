const JobStatusPage = () => {
  const submittedApps = JSON.parse(localStorage.getItem("appliedJobs")) || [];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Applications</h2>
      {submittedApps.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {submittedApps.map((app, idx) => (
            <li key={idx} className="p-4 border rounded shadow">
              <h3 className="text-xl font-semibold">{app.jobTitle}</h3>
              <p><strong>Name:</strong> {app.name}</p>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Cover Letter:</strong> {app.coverLetter}</p>
              <p><strong>Resume:</strong> {app.resume?.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobStatusPage;
