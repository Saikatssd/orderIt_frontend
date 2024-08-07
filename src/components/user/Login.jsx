import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );
  //function to handle form submission
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/";
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch,isAuthenticated, error]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="row wrapper mt-10">
            <div className="col-10 col-lg-5">
              <form className="shadow-lg" onSubmit={submitHandler}>
                <h1 className="mb-4 text-3xl font-semibold">Login</h1>
                <div className="form-group">
                  <label htmlFor="email_field">Email</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="form-group ">
                  <label htmlFor="password_field">Password</label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <Link to="/users/forgetPassword" className="float-right mb-4">
                  Forgot Password
                </Link>
                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py3"
                >
                  LOGIN
                </button>

                <Link to="/users/signup" className="float-right mt-12">
                  NEW USER?
                </Link>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
