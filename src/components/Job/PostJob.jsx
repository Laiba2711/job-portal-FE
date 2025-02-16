import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";


const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");

  const { isAuthorized, user } = useContext(Context);
  const navigate = useNavigate();

  // Redirect if user is not an employer
  useEffect(() => {
    if (!isAuthorized || (user && user.role !== "Employer")) {
      navigate("/");
    }
  }, [isAuthorized, user, navigate]);

  const handleJobPost = async (e) => {
    e.preventDefault();

    let jobData = {
      title,
      description,
      category,
      country,
      city,
      location,
    };

    if (salaryType === "Fixed Salary") {
      jobData.fixedSalary = fixedSalary;
      jobData.salaryFrom = "";
      jobData.salaryTo = "";
    } else if (salaryType === "Ranged Salary") {
      jobData.salaryFrom = salaryFrom;
      jobData.salaryTo = salaryTo;
      jobData.fixedSalary = "";
    }

    try {
      const res = await axios.post("http://localhost:5000/api/v1/job/post", jobData, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="job-post-container">
      <div className="form-box">
        <h3>𝐏𝐨𝐬𝐭 𝐚 𝐍𝐞𝐰 𝐉𝐨𝐛</h3>
        <form onSubmit={handleJobPost}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job Title" required />
          
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="Graphics & Design">Graphics & Design</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Frontend Web Development">Frontend Web Development</option>
            <option value="MERN Stack Development">MERN Stack Development</option>
            <option value="Account & Finance">Account & Finance</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Video Animation">Video Animation</option>
            <option value="MEAN Stack Development">MEAN Stack Development</option>
            <option value="Data Entry Operator">Data Entry Operator</option>
          </select>

          <div className="location-fields">
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
          </div>

          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location (e.g., Remote, Onsite)" required />

          <div className="salary-section">
            <select value={salaryType} onChange={(e) => setSalaryType(e.target.value)}>
              <option value="default">Select Salary Type</option>
              <option value="Fixed Salary">Fixed Salary</option>
              <option value="Ranged Salary">Ranged Salary</option>
            </select>

            {salaryType === "Fixed Salary" && (
              <input type="number" value={fixedSalary} onChange={(e) => setFixedSalary(e.target.value)} placeholder="Enter Fixed Salary" required />
            )}

            {salaryType === "Ranged Salary" && (
              <div className="salary-range">
                <input type="number" value={salaryFrom} onChange={(e) => setSalaryFrom(e.target.value)} placeholder="Salary From" required />
                <input type="number" value={salaryTo} onChange={(e) => setSalaryTo(e.target.value)} placeholder="Salary To" required />
              </div>
            )}
          </div>

          <textarea rows="20" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Job Description" required />

          <button type="submit" className="submit-btn">Create Job</button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;