import React, { useState } from "react";
import "../FormComponent/FormComponent.css";
const EducationalDetails = ({ selectedAccount, onClose }) => {
  const [formData, setFormData] = useState({
    highestEducation: "",
    faculty: "",
    boardUniversity: "",
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
          <h2 id="title-personal">Provide your Educational Details</h2>

          <form>
            <div className="main-form-container">
              <div className="form-main">
                <div className="form">
                  <label className="salutation labelname required" htmlFor="salutation">
                  highest Education
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
                  <label className="gender labelname required" htmlFor="gender">
                  Faculty
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
              </div>

              <div className="form-right">
              <div className="form">
                  <label className="gender labelname required" htmlFor="gender">
                  Board/University
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
                    <option value="tu">TU</option>
                    <option value="pu">Pokhara University</option>
                    <option value="pcu">Purbanchal University</option>
                    <option value="fwu">Far Western  University</option>
                    <option value="hseb">Higher Secondary Education Board</option>
                    <option value="slc">SLC</option>
                    <option value="uslc">Under SLC</option>
                    <option value="others">Other Universities of Nepal</option>
                  </select>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EducationalDetails;
