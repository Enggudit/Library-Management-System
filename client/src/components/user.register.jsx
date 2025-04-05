import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import axios from 'axios'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [timeLimit, setTimeLimit] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email,
      password,
      timeLimit
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

      if (response.status === 201) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        setSubmitted(true)
        setTimeout(() => navigate('/home'), 2000)
      }

      setEmail('')
      setFirstName('')
      setLastName('')
      setPassword('')
      setTimeLimit('')
    } catch (err) {
      console.error("Registration failed", err)
    }
  }

  return (
    <div className="w-screen h-screen relative">
      <img className="w-full h-full object-cover absolute z-[-1]" src="../public/images/library.jpg" alt="library background" />

      <div className="max-w-md text-white mx-auto p-6 bg-zinc-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Library Registration</h2>

        <form onSubmit={submitHandler} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-1/2 p-2 border rounded text-white"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-1/2 p-2 border rounded text-white"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded text-white"
          />

          <div>
            <label className="block font-medium mb-2">Membership Time Limit <span className="text-red-500">*</span></label>
            <div className="space-y-2">
              {["6_months", "1_year", "2_years", "5_years"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="timeLimit"
                    value={option}
                    checked={timeLimit === option}
                    onChange={(e) => setTimeLimit(e.target.value)}
                    required
                  />
                  <span>{option.replace("_", " ").replace("year", "Year").replace("years", "Years")}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>

          {submitted && (
            <div className="mt-4 text-green-400 text-center font-medium">
              User Registered Successfully! Redirecting...
            </div>
          )}
        </form>

      </div>
    </div>
  )
}

export default UserSignup
