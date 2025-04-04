import React, { useState } from "react";

export default function LibraryRegisterForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    timeLimit: "6_months",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform further validation if needed
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="w-screen h-screen">
    <img className="w-full h-full absolute z-[-999]" src="../public/images/library.jpg" alt="" />
        <div className="max-w-md text-white mx-auto p-6 bg-zinc-600 absolute top-15 right-135 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Library Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />

            <div className="mt-4">
              <label className="block font-medium mb-1">Membership Time Limit <span className="text-red-500">*</span></label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="timeLimit"
                    value="6_months"
                    checked={formData.timeLimit === "6_months"}
                    onChange={handleChange}
                    required
                  />
                  <span>6 Months (Mandatory)</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="timeLimit"
                    value="1_year"
                    checked={formData.timeLimit === "1_year"}
                    onChange={handleChange}
                  />
                  <span>1 Year</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="timeLimit"
                    value="2_years"
                    checked={formData.timeLimit === "2_years"}
                    onChange={handleChange}
                  />
                  <span>2 Years</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="timeLimit"
                    value="5_years"
                    checked={formData.timeLimit === "5_years"}
                    onChange={handleChange}
                  />
                  <span>5 Years</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Register
            </button>

            {submitted && (
              <div className="mt-4 text-green-600 text-center font-medium">
                User Registered Successfully!
              </div>
            )}
          </form>
        </div>
    </div >
  );
}
