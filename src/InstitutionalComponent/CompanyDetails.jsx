import React, { useState } from "react";
import "../../src/FormComponent/FormComponent.css"
const CompanyDetails = ({ selectedAccount, onClose }) => {

  const registerObject={
    option1: "Company Register",
    option2: "Gharelu Tatha Sana Udhyog",
    option3: "Banijya Bibhag",
    option4: "Nagarpalika/Gaunpalika",
  }
  const businessObject={
    option1:"Mobile Gallery",
    option2:"Photocopy Center",
    option3:"Photo Studio",
    option4:"Stationary",
    option5:"Remittance Center",
    option6:"Tours and Travels",
    option7:"Law Firms",
    option8:"Others",
  }
  const [formData, setFormData] = useState({
    accountType: "",
   nameofcompany:"",
   register:"",
   businesstype:"",
   contact:"",
   yearsinservice:"",
   email:"",
   website:""
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
          <h2 id="title-personal">Provide Company Details</h2>

          <form>
            <div className="main-form-container">
              <div className="form-main">
              <div className="form">
                  <label className="contact labelname required" htmlFor=" nameofcompany">
                  Name of Company
                  </label>
                  <br />
                    <input
                      className="contactnumber selectonly"
                      type="text"
                      name=" nameofcompany"
                    />
                
                </div>
                <div className="form">
                  <label className="salutation labelname required" htmlFor="salutation">
                  Business Type
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
                    
                      {Object.keys(businessObject).map((key) => (
                    <option key={key} value={key}>
                      {businessObject[key]}
                    </option>
                  ))}
                </select>
                </div>

                <div className="form">
                  <label className="gender labelname required" htmlFor="gender">
                    Years in Service
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
                    <option value="5years">Above 5 Years</option>
                    <option value="3years">3-5 Years</option>
                    <option value="1years">1-3 Years</option>
                    <option value="New">Newly Registered</option>
                  </select>
                </div>
                <div className="form">
                  <label className="contact labelname required" htmlFor=" nameofcompany">
                 Website
                  </label>
                  <br />
                    <input
                      className="contactnumber selectonly"
                      type="text"
                      name=" nameofcompany"
                    />
                
                </div>
              </div>

              <div className="form-right">
              <div className="form">
                  <label className="salutation labelname required" htmlFor=" gender">
                   Registered With
                  </label>
                  <br />
                  <select
                    className="salutation-select selectonly"
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
                  {Object.keys(registerObject).map((key) => (
                    <option key={key} value={key}>
                      {registerObject[key]}
                    </option>
                  ))}
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

export default CompanyDetails;
