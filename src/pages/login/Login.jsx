import styles from "./login.module.css";
import Image from "../../assets/FrameImg.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};


const validateSchame = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").max(50, "Too Long!"),
});

const Login = () => {
  const navigate = useNavigate();

  // const handleValidate = (values) => {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = "Invalid email address";
  //   }
  //   if (!values.password) {
  //     errors.password = "Required";
  //   } else if (values.password.length < 8) {
  //     errors.password = "Min 8";
  //   }

  //   return errors;
  // };

  // Handle submit
  const onSubmit = (values, { setSubmitting }) => {
    const loginAdmin = "admin@gmail.com";
    const passAdmin = "87654321";
    if (values.email === loginAdmin && values.password === passAdmin) {
      toast.success("Success");
      navigate("/dashboard");
      setSubmitting(false);
    } else {
      toast.error("Login or password is incorrect");
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.content}>
      {/* Wrapper item */}
      <div className={styles.contentWrapper}>
        {/* Image */}
        <img className={styles.image} src={Image} alt="Login page person" />
      </div>

      {/* Wrapper item */}

      <div className={styles.contentWrapper}>
        {/* Form */}

        <Formik
          initialValues={initialValues}
          validationSchema={validateSchame}
          // validate={handleValidate}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <>
              <form className={styles.form} onSubmit={handleSubmit}>
                {/* Title */}
                <h1 className={styles.title}>Login</h1>

                {/* Login */}
                <input
                autoFocus
                  className={styles.input}
                  name="email"
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <small className={styles.errors}>
                  {errors.email && touched.email && errors.email}
                </small>

                {/* Password */}
                <input
                  className={styles.input}
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <small className={styles.errors}>
                  {errors.password && touched.password && errors.password}
                </small>

                {/* Submit btn */}
                <button
                  className={styles.btn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Login"}
                </button>
              </form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
