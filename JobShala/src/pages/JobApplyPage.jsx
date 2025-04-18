




import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { JobData } from "../data/JobData";

const JobApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jobData, setJobData] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  useEffect(() => {
    const job = JobData.find((j) => j.id === parseInt(id));
    setJobData(job);
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedStatus = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    const newEntry = {
      jobId: id,
      jobTitle: jobData.title,
      ...form,
    };

    localStorage.setItem("appliedJobs", JSON.stringify([...storedStatus, newEntry]));
    navigate("/status");
  };

  if (!jobData) return <div className="text-center p-10 text-white">Loading...</div>

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white/10 text-white backdrop-blur-md shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Apply for {jobData.title}</h2>
      <p className="mb-4 text-gray-300">{jobData.type} •  {jobData.location}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-white/20 rounded placeholder-gray-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-white/20 rounded placeholder-gray-400"
          required
        />
        <input
          type="file"
          name="resume"
          accept=".pdf,.docx"
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-white/20 rounded text-gray-300"
          required
        />
        <textarea
          name="coverLetter"
          placeholder="Write your cover letter..."
          value={form.coverLetter}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-white/20 rounded h-32 placeholder-gray-400"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplyPage;



