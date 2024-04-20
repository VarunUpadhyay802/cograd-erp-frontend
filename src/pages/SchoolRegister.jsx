import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SchoolRegister = () => {
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const data = await axios.post("http://localhost:4000/school/register", {
        schoolName,
        email,
        password,
      });
      console.log("Registration successful:", data);
      navigate("/school"); // Redirect to school page after successful registration
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <form onSubmit={registerHandler}>
      <section className="flex h-screen flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm flex flex-col gap-2 ">
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="School Name"
            value={schoolName}
            onChange={(e) => {
              setSchoolName(e.target.value);
            }}
            autoComplete="organization" // Add autocomplete attribute
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="email" // Add autocomplete attribute
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded "
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            autoComplete="new-password" // Add autocomplete attribute
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Dont have an account?{" "}
            <Link
              className="text-red-600 hover:underline hover:underline-offset-4"
              to={"/principalRegister"}
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </form>
  );
};

export default SchoolRegister;
