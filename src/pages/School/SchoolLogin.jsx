import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "../../utils/userSlice";

const SchoolLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post(
        "http://localhost:4000/school/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      // Check if login was successful based on the response status code
      if (response.status === 200) {
        console.log("Login successful");
        // Navigate to "/school" route if login was successful
        dispatch(setUser(response.data));
        navigate("/");
      } else {
        // Handle other response statuses if needed
        console.error("Error logging in:", response.data);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
     <div className="flex flex-col items-center justify-center gap-12 h-screen">
     <h1 className="font-mono text-bold text-20   text-center">Principal Login</h1>
      <section className=" flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <form onSubmit={loginHandler}>
            {" "}
            {/* Form wrapper */}
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Email Address"
              value={email}
              autoComplete="email-address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don&apos;t have an account?{" "}
            <Link
              className="text-red-600 hover:underline hover:underline-offset-4"
              to={"/schoolRegister"}
            >
              Register
            </Link>
          </div>
        </div>
      </section>
     </div>
    </>
  );
};

export default SchoolLogin;
