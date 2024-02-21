import React, { useState } from "react";
import "../FormComponent/FormComponent.css";

const SurveyQuestionCompany = ({ selectedAccount, onClose }) => {
  const ObjectAnswer = {
    option1: "छ ",
    option2: "छैन ",
  };

  const [formData, setFormData] = useState({
    Question: "",
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
          <h2 id="title-personal">उत्तर दिनुहोस् </h2>

          <form>
            <div className="main-form-container">
              <div className="form-main">
                <div className="form">
                  <label
                    className="salutation labelname required"
                    htmlFor=" province"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाई राम्रो इन्टरनेटको पहुँचमा हुनुहुन्छ?
                  </label>
                  <br />
                  <select
                    className="salutation-select selectonly"
                    name="province"
                    value={
                      localStorage.province
                        ? localStorage.getItem(" province")
                        : formData.province
                    }
                    disabled={localStorage.getItem("salutation") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="district"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाई आफ्नो ग्राहकहरुलाई वित्तिय सेवा प्रदान गर्नु हुन्छ ?
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
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="localBody"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाई संग आफ्नै computer /laptop अथवा smart phone छ ?
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="localBody"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाई Mobile Banking या Internet Banking प्रयोग गर्नु
                    हुन्छ ?
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="localBody"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाई eSewa , Khalti जस्ता Wallet प्रयोग गर्नु हुन्छ?
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="localBody"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाइलाई Fonepay QR सम्बधि जानकारी छ ?
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="localBody"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाइ शेयर बजारमा आवद्ध हुनुहुन्छ ?
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-right">
                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="localBody"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाई ले कुनै वित्तिय कम्पनिहरु संग सहकार्य गर्नु भएको छ ?
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="localBody"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाई ले वित्तिय साक्षरता सम्बधि कुनै तालिम वा परामर्श
                    लिनु भएको छ ?
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="localBody"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाई संग वित्तिय क्षेत्र मा काम गरेको अनुभ छ ?
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="localBody"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाई ATM Card/Credit Card प्रयोग गर्नु हुन्छ ?
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="localBody"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाई ले आफ्नो जीवन बीमा गर्नु भएको छ ?
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form">
                  <label
                    className="gender labelname required"
                    htmlFor="localBody"
                    style={{
                      fontSize: "12px",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    के तपाई ले आफ्नो व्यवसाय को बीमा गर्नु भएको छ?
                  </label>
                  <br />
                  <select
                    className="gender-select selectonly"
                    name="gender"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  >
                    {Object.keys(ObjectAnswer).map((key) => (
                      <option key={key} value={key}>
                        {ObjectAnswer[key]}
                      </option>
                    ))}
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

export default SurveyQuestionCompany;
