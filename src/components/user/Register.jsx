import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userActions";
import axios from "axios";
// import { dispatch } from "react";

const Register = () => {
  const alert = useAlert();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
  });

  const { name, email, password, passwordConfirm, phoneNumber } = user;
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/images/avatar.jpg");
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  // use effect to handle redirection and error alerts
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/";
    }
    if (error) {
      console.log(error);
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error]);



  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    if (password !== passwordConfirm) {
      alert.error("Password do not match");
      return;
    }
    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("passwordConfirm", passwordConfirm);
    formData.set("phoneNumber", phoneNumber);
    formData.set("avatar", avatar);
    console.log([...formData.entries()]);

    dispatch(register(formData));
  };




  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      if (file) {
        setAvatar(file);
  
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
          }
        };
        reader.readAsDataURL(file);
      }
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  



  return (
    <>
      <div className="row wrapper">
        <div className="col-10 col-lg-5 registration-form">
          <form
            className="shadow=lg"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <h1 className="mb-3">Register</h1>
            <div className="form-group">
              <label htmlFor="name_field">Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                name="name"
                value={name}
                onChange={onChange}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirm_field">Password Confirm</label>
              <input
                type="password"
                id="passwordConfirm_field"
                className="form-control"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber_field">Phone Number</label>
              <input
                type="number"
                id="phoneNumber_field"
                className="form-control"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <img
                      src={avatarPreview}
                      className="rounded-circle"
                      alt="Avatar Preview"
                    />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="customFile"
                    accept="images/*"
                    onChange={onChange}
                  ></input>
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>
            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;




// import React, { useState, useEffect } from "react";
// import { useAlert } from "react-alert";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

// const Register = () => {
//   const alert = useAlert();
//   const dispatch = useDispatch();
//   const { isAuthenticated, error, loading } = useSelector((state) => state.auth);

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     passwordConfirm: "",
//     phoneNumber: "",
//   });

//   const { name, email, password, passwordConfirm, phoneNumber } = user;
//   const [avatar, setAvatar] = useState("");
//   const [avatarPreview, setAvatarPreview] = useState("/images/avatar.jpg");

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error, alert]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (password !== passwordConfirm) {
//       alert.error("Passwords do not match");
//       return;
//     }

//     const formData = new FormData();
//     formData.set("name", name);
//     formData.set("email", email);
//     formData.set("password", password);
//     formData.set("passwordConfirm", passwordConfirm);
//     formData.set("phoneNumber", phoneNumber);
//     formData.set("avatar", avatar);

//     try {
//       console.log("Sending signup request...");
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/users/signup",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           withCredentials: true,
//         }
//       );

//       console.log("Signup response:", data);

//       if (data.success) {
//         alert.success("Signup successful!");
//         window.location.href = "/";
//       } else {
//         alert.error(data.message || "Signup failed!");
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       alert.error(error.response?.data?.message || error.message);
//     }
//   };

//   // const onChange = (e) => {
//   //   if (e.target.name === "avatar") {
//   //     const reader = new FileReader();

//   //     reader.onload = () => {
//   //       if (reader.readyState === 2) {
//   //         setAvatarPreview(reader.result);
//   //         setAvatar(reader.result);
//   //       }
//   //     };

//   //     reader.readAsDataURL(e.target.files[0]);
//   //   } else {
//   //     setUser({ ...user, [e.target.name]: e.target.value });
//   //   }
//   // };


//   const onChange = (e) => {
//     if (e.target.name === "avatar") {
//       const file = e.target.files[0];
//       if (file) {
//         setAvatar(file);
  
//         const reader = new FileReader();
//         reader.onload = () => {
//           if (reader.readyState === 2) {
//             setAvatarPreview(reader.result);
//           }
//         };
//         reader.readAsDataURL(file);
//       }
//     } else {
//       setUser({ ...user, [e.target.name]: e.target.value });
//     }
//   };
  


//   return (
//     <div className="row wrapper">
//       <div className="col-10 col-lg-5 registration-form">
//         <form
//           className="shadow-lg"
//           onSubmit={submitHandler}
//           encType="multipart/form-data"
//         >
//           <h1 className="mb-3">Register</h1>

//           <div className="form-group">
//             <label htmlFor="name_field">Name</label>
//             <input
//               type="text"
//               id="name_field"
//               className="form-control"
//               name="name"
//               value={name}
//               onChange={onChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email_field">Email</label>
//             <input
//               type="email"
//               id="email_field"
//               className="form-control"
//               name="email"
//               value={email}
//               onChange={onChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password_field">Password</label>
//             <input
//               type="password"
//               id="password_field"
//               className="form-control"
//               name="password"
//               value={password}
//               onChange={onChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="passwordConfirm_field">Confirm Password</label>
//             <input
//               type="password"
//               id="passwordConfirm_field"
//               className="form-control"
//               name="passwordConfirm"
//               value={passwordConfirm}
//               onChange={onChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phoneNumber_field">Phone Number</label>
//             <input
//               type="text"
//               id="phoneNumber_field"
//               className="form-control"
//               name="phoneNumber"
//               value={phoneNumber}
//               onChange={onChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="avatar_upload">Avatar</label>
//             <div className="d-flex align-items-center">
//               <div>
//                 <figure className="avatar mr-3 item-rtl">
//                   <img
//                     src={avatarPreview}
//                     className="rounded-circle"
//                     alt="Avatar Preview"
//                   />
//                 </figure>
//               </div>
//               <div className="custom-file">
//                 <input
//                   type="file"
//                   name="avatar"
//                   className="custom-file-input"
//                   id="customFile"
//                   accept="image/*"
//                   onChange={onChange}
//                 />
//                 <label className="custom-file-label" htmlFor="customFile">
//                   Choose Avatar
//                 </label>
//               </div>
//             </div>
//           </div>

//           <button
//             id="register_button"
//             type="submit"
//             className="btn btn-block py-3"
//             disabled={loading}
//           >
//             REGISTER
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
