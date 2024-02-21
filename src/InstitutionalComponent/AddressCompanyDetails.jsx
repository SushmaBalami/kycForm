import React, { useState } from "react";
import "../FormComponent/FormComponent.css";

const AddressCompanyDetails = ({ selectedAccount, onClose }) => {
    const ProvinceObject = {
        option1: "Province No.1",
        option2: "Madhesh Pradesh",
        option3: "Bagmati Pradesh",
        option4: "Gandaki Pradesh",
        option5: "Lumbini Pradesh",
        option6: "Karnali Pradesh",
        option7: "Sudurpashchim",
      };
      const DistrictObject = {
        option1: "District 1",
        option2: "District 2",
        option3: "District 3",
        option4: "District 4",
        option5: "District 5", 
        option6: "District 6",
        option7: "District 7",
        option8: "District 8",
        option9: "District 9",
      };
      const LocalBodyObject={
        option1:"Sidingba Rural Municipality",
        option2:"Meringden Rural Municipality",
        option3:"  Maiwakhola Rural Municipality",
        option4:"Phaktanglung Rural Municipality",
        option5:"Sirijangha Rural Municipality	",
        option6:"Mikwakhola Rural Municipality	",
        option7:"Aathrai Tribeni Rural Municipality",
        option8:"Pathivara Yangwarak Rural Municipality	",
        option9:"Phungling Municipality",
        option10:"Sabhapokhari Rural Municipality",
        option11:"Chainpur Municipality	",
        option12:"Khandbari Municipality",
        option13:"Likhupike Rural Municipality",
        option14:"Nechasalyan Rural Municipality",
        option15:"Thulung Dudhkoshi Rural Municipality",
        option16:"Maapya Dudhkoshi Rural Municipality",
        option17:"Chandragiri Municipality",
        option18:"Bhaktapur Municipality",


      }
      const [formData, setFormData] = useState({
        province: "",
        district: "",
        localBody: "",
        wardNo: "",
        toleStreetName: "",
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
          <h2 id="title-personal">Provide your Address Details</h2>

          <form>
            <div className="main-form-container">
              <div className="form-main">
                <div className="form">
                  <label className="salutation labelname required" htmlFor=" province">
                    Province:
                  </label>
                  <br />
                  <select
                    className="salutation-select selectonly"
                    name="province"
                    value={
                      localStorage. province
                        ? localStorage.getItem(" province")
                        : formData. province
                    }
                    disabled={localStorage.getItem("salutation") !== null}
                    onChange={handleChange}
                    required
                  >
                     <option value="" disabled>
                    Select Province
                  </option>
                  {Object.keys(ProvinceObject).map((key) => (
                    <option key={key} value={key}>
                      {ProvinceObject[key]}
                    </option>
                  ))}
                </select>
                </div>

                <div className="form">
                  <label className="gender labelname required" htmlFor="district">
                    District:
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="district"
                    value={
                      localStorage.district
                        ? localStorage.getItem("district")
                        : formData.district
                    }
                    disabled={localStorage.getItem("district") !== null}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                    Select District
                  </option>
                  {Object.keys(DistrictObject).map((key) => (
                    <option key={key} value={key}>
                      {DistrictObject[key]}
                    </option>
                  ))}
                </select>
                </div>
                <div className="form">
                  <label className="gender labelname required" htmlFor="localBody">
                    Local Body:
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                   
                  >
                    <option value="" disabled>
                    Select Province
                  </option>
                  {Object.keys(LocalBodyObject).map((key) => (
                    <option key={key} value={key}>
                      {LocalBodyObject[key]}
                    </option>
                  ))}
                </select>
                </div>
              </div>

              <div className="form-right">
              <div className="a">
                  <label className="labelname required" htmlFor=" wardNo">
                    Ward No.
                  </label>
                  <br />
                  <input
                    className="fullname  selectonly "
                    type="text"
                    name="wardNo"
                    value={
                      localStorage.wardNo
                        ? localStorage.getItem("  wardNo")
                        : formData.  wardNo
                    }
                    disabled={localStorage.getItem("  wardNo") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="a">
                  <label className="labelname required" htmlFor="toleStreetName">
                    Tole/Street Name
                  </label>
                  <br />
                  <input
                    className="fullname  selectonly "
                    type="text"
                    name="toleStreetName"
                    value={
                      localStorage.toleStreetName
                        ? localStorage.getItem("toleStreetName")
                        : formData.toleStreetName
                    }
                    disabled={localStorage.getItem("toleStreetName") !== null}
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

export default AddressCompanyDetails ;
