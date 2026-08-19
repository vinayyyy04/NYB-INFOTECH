import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    course: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess(false);
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (formData.gender === "") {
      newErrors.gender = "Please select your gender";
    }

    if (formData.course === "") {
      newErrors.course = "Please select a course";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms";
    }

    return newErrors;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    console.log("Registration Data:", formData);

    setErrors({});
    setSuccess(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      gender: "",
      course: "",
      terms: false,
    });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <div className="logo">R</div>

          <h1>Create Account</h1>
          <br></br>

          <p>Fill in your details to register</p>
        </div>

        {success && (
          <div className="success-message">
            ✓ Registration successful!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />

            {errors.fullName && (
              <span className="error">{errors.fullName}</span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>

            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              placeholder="Enter 10 digit number"
              value={formData.phone}
              onChange={handleChange}
            />

            {errors.phone && (
              <span className="error">{errors.phone}</span>
            )}
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender</label>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>

            {errors.gender && (
              <span className="error">{errors.gender}</span>
            )}
          </div>

          {/* Course */}
          <div className="form-group">
            <label>Course</label>

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select your course</option>
              <option value="React">React Development</option>
              <option value="Python">Python Development</option>
              <option value="Java">Java Development</option>
              <option value="Data Analytics">Data Analytics</option>
            </select>

            {errors.course && (
              <span className="error">{errors.course}</span>
            )}
          </div>

          {/* Password */}
          <div className="form-row">
            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Minimum 6 characters"
                value={formData.password}
                onChange={handleChange}
              />

              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {errors.confirmPassword && (
                <span className="error">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
          </div>

          {/* Terms */}
          <div className="terms">
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />

              <span>I agree to the Terms & Conditions</span>
            </label>

            {errors.terms && (
              <span className="error">{errors.terms}</span>
            )}
          </div>

          <button className="register-btn" type="submit">
            Create Account
          </button>
        </form>

        <p className="login-text">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;