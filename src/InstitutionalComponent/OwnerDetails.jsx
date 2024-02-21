import React, { useState } from "react";
import "../FormComponent/FormComponent.css";
const OwnerDetails = ({ selectedAccount, onClose }) => {
  const [formData, setFormData] = useState({
    highestEducation: "",
    faculty: "",
    boardUniversity: "",
    salutation: "",
    gender: "",
    contactNumber: "",
    fullName: "",
    dateOfBirth: "",
    emailAddress: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  return (
    <>
    <div className="main-container-personal">
        <div className="form-container">
          <h2 id="title-personal">Provide your Details</h2>

          <form>
            <div className="main-form-container">
              <div className="form-main">
              <div className="form">
                  <label className="salutation labelname required" htmlFor="salutation">
                    Salutation:
                  </label>
                  <br />
                  <select
                    className="salutation-select selectonly"
                    name="salutation"
                    value={
                      localStorage.salutation
                        ? localStorage.getItem("salutation")
                        : formData.salutation
                    }
                    disabled={localStorage.getItem("salutation") !== null}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                  </select>
                </div>
                <div className="form">
                  <label className="gender labelname required" htmlFor="gender">
                    Gender:
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.gender
                        ? localStorage.getItem("gender")
                        : formData.gender
                    }
                    disabled={localStorage.getItem("gender") !== null}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form">
                  <label className="salutation labelname required" htmlFor="salutation">
                  highest Education:
                  </label>
                  <br />
                  <select
                    className="salutation-select selectonly"
                    name="salutation"
                    value={
                      localStorage.salutation
                        ? localStorage.getItem("salutation")
                        : formData.salutation
                    }
                    disabled={localStorage.getItem("salutation") !== null}
                    onChange={handleChange}
                    required
                  >
                   <option value="">Select</option>
                    <option value="masters">Masters</option>
                    <option value="bachelors">Bachelors</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="slc">SLC</option>
                    <option value="literateonly">Literate Only</option>
                  </select>
                </div>

                <div className="form">
                  <label className="contact labelname required" htmlFor="contactNumber">
                    Contact No:
                  </label>
                  <div className="">
                    <input
                      className="contactnumber selectonly"
                      type="number"
                      name="contactNumber"
                      placeholder="+977"
                    />
                  </div>
                </div>
              </div>

              <div className="form-right">
              <div className="a">
                  <label className="labelname required" htmlFor="fullName">
                    Full Name:
                  </label>
                  <br />
                  <input
                    className="fullname  selectonly "
                    type="text"
                    name="FullName"
                    value={
                      localStorage.FullName
                        ? localStorage.getItem("FullName")
                        : formData.FullName
                    }
                    disabled={localStorage.getItem("FullName") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form">
                  <label className="dob labelname required" htmlFor="dateOfBirth">
                    Date of Birth:
                  </label>
                  <br />
                  <input
                    className="dateofbirth  selectonly"
                    type="date"
                    name="dateOfBirth"
                    value={
                      localStorage.dateOfBirth
                        ? localStorage.getItem("dateOfBirth")
                        : formData.dateOfBirth
                    }
                    disabled={localStorage.getItem("dateofBirth") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form">
                  <label className="gender labelname required" htmlFor="gender">
                  Faculty:
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.gender
                        ? localStorage.getItem("gender")
                        : formData.gender
                    }
                    disabled={localStorage.getItem("gender") !== null}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="management">Management</option>
                    <option value="Science">Science</option>
                    <option value="education">Education/Arts</option>
                    <option value="humanities">Humanities</option>
                    <option value="others">Others</option>
                    <option value="null">NA</option>
                  
                  </select>
                </div>
                <div className="form">
                  <label className="email labelname required" htmlFor="emailAddress">
                    Email Address:
                  </label>
                  <br />
                  <input
                    className="email-field  selectonly "
                    type="email"
                    name="emailAddress"
                    value={
                      localStorage.emailAddress
                        ? localStorage.getItem("emailAddress")
                        : formData.emailAddress
                    }
                    disabled={localStorage.getItem("emailAddress") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OwnerDetails;
