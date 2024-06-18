import styles from "./login.module.css";
import Image from "../../assets/FrameImg.png";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

// const initialValues = {
//   email: "",
//   password: "",
// };

const Login = () => {

  
  // handleValidate
  // const handleValidate = (values) => {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = "Invalid email address";
  //   }
  //   if (!values.password) {
  //     errors.password = "Required";
  //   } else if ( values.password.length < 8 ){
  //     errors.password = "Min 8"
  //   }

  //     return errors;
  // };

  // // Handle submit
  // const onSubmit = (values, { setSubmitting }) => {
  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 2));
  //     setSubmitting(false);
  //   }, 400);
  // };

  const [form,setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e)=> {
    setForm({
      ...form,
      [e.target.value] : e.target.value
    })
    console.log(form);
  }



  const handleSubmit = (e)=> {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\- [^\s@]{2,}$/i;
    if(!regex.test(form?.email)){
      toast.error ('This is not a valid email')
    }

    if(!form?.password) {
      toast.error('password is required')
    }
    else if(form?.password.length < 4) {
      toast.error("password must be more than 4 characters")
    }
  }

  return (
    <div className={styles.content}>
      {/* Wrapper item */}
      <div className={styles.contentWrapper}>
        {/* Image */}
        <img className={styles.image} src={Image} alt="Login page person" />
      </div>

      {/* Wrapper item */}

      <div className={styles.contentWrapper}>
        <>
          {/* Form */}

          <ToastContainer>
            <form className={styles.form} onSubmit={(e)=>handleSubmit(e.target.value)}>
              {/* Title */}
              <h1 className={styles.title}>Login</h1>

              {/* Login */}
              <input
                className={styles.input}
                name="email"
                type="text"
                placeholder="Email"
                onChange={handleChange}
              />
              {/* <small className={styles.errors}>
                  {errors.email && touched.email && errors.email}
                </small> */}

              {/* Password */}
              <input
                className={styles.input}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              {/* <small className={styles.errors}>
                  {errors.password && touched.password && errors.password}
                </small> */}

              {/* Submit btn */}
              <button
                className={styles.btn}
                type="submit"
                // disabled={isSubmitting}
              >
                Login
              </button>

              {/* <pre>{JSON.stringify(values, null, 20)}</pre> */}
            </form>
      </div>
    </div>
  );
};

export default Login;
