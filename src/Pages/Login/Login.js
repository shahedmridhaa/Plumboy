import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/Authprovider";
import { Helmet } from "react-helmet";

const Login = () => {
  const { userLogin } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        fetch("https://plumbing-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("plumboy", data.token);
          });

        toast.success("Successfully login");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <Helmet>
        <title>login</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Do not have account
            <span
              tabIndex={0}
              role="link"
              aria-label="Sign up here"
              className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
            >
              {" "}
              <Link to="/regester" className="text-cyan-500">
                Please signin here
              </Link>
            </span>
          </p>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>

          <form onSubmit={handleLogin}>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Email
              </lable>
              <input
                aria-label="enter email adress"
                type="email"
                name="email"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-6 w-full">
              <lable className="text-sm font-medium leading-none text-gray-800">
                Password
              </lable>
              <input
                aria-label="enter Password"
                type="password"
                name="password"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Login my account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
