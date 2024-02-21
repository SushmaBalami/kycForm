import React, { useState } from "react";
import "../../src/Form/Form.css";
import Layout from "../Layout/Layout";
import { Collapse, Space } from "antd";
import OwnerDetails from "../InstitutionalComponent/OwnerDetails";
import CompanyDetails from "../InstitutionalComponent/CompanyDetails";
import AddressCompanyDetails from "../InstitutionalComponent/AddressCompanyDetails";
import SurveyQuestionCompany from "../InstitutionalComponent/SurveyQuestion";

const Institutional = () => {
  const [formData, setFormData] = useState({
    declaration: false,
    agreeToTerms: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      for (var key in formData) {
        localStorage.setItem(key, formData[key]);
      }

      // console.log("Form data submitted:", formData);
      onClose();
    } catch (error) {
      console.error("Error submitting KYC form:", error);
    }
  };
  const handleDiscard = () => {
    setFormData({
      declaration: false,
      agreeToTerms: false,
      accountType: "",
    
    });
    localStorage.clear();
  };
  const handleSubmit = async (e) => {
    localStorage.clear();
    e.preventDefault();
    try {
      const response = await axios.post("/api/kyc", formData);

      // console.log("Form data submitted:", formData);
      onClose();
    } catch (error) {
      console.error("Error submitting KYC form:", error);
    }
  };
  return (
    <>
      <Layout>
        <div className="main-container">
          <div className="title">BFA-Institutions</div>
          <div className="title-content">
            Financial Advisor Application Form-Institutional
          </div>
          <div className="content">
            Welcome to Bibaabo Financial Advisor (BFA) application section.
            Applying this form, you can officially become an agent of Bibaabo
            and start earning extra income by reselling the bank and financial
            products & services through our marketplace. This application does
            not cost any money; in fact, you can become a certified agent if you
            complete the form with accurate information. Please ask our customer
            care (Tel:01-5970313/14) if you encounter any problems applying for
            this application.
          </div>
          <hr />
          <div className="collapse-content">
            <Space direction="vertical">
              <Collapse
                accordion
                bordered={false}
                items={[
                  {
                    key: "1",
                    label: "Company Information",
                    children: <p>{<CompanyDetails/>}</p>,
                  },
                ]}
              />
              <Collapse
                accordion
                bordered={false}
                items={[
                  {
                    key: "2",
                    label: "Owner/Key Person Detail",
                    children: <p>{<OwnerDetails/>}</p>,
                  },
                ]}
              />
              <Collapse
                accordion
                bordered={false}
                items={[
                  {
                    key: "3",
                    label: "Business Address Detail",
                    children: <p>{<AddressCompanyDetails />}</p>,
                  },
                ]}
              />
              <Collapse
                accordion
                bordered={false}
                items={[
                  {
                    key: "4",
                    label: "Survey Questionnaire",
                    children: <p>{<SurveyQuestionCompany />}</p>,
                  },
                ]}
              />
            </Space>
          </div>
          <hr />
          <div className="declaration-content">
            <div className="declaration-first">
              <label className="declare">
                <input
                  type="checkbox"
                  name="declaration"
                  style={{
                    margin: "10px",
                  }}
                  checked={
                    localStorage.declaration
                      ? localStorage.getItem("declaration")
                      : formData.declaration
                  }
                  disabled={localStorage.getItem("declaration") !== null}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                I declare that all the information provided above is genuine and
                correct to the best of my knowledge.
              </label>
            </div>

            <div className="declaration-first">
              <label className="declare">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  style={{
                    margin: "10px",
                  }}
                  checked={
                    localStorage.agreeToTerms
                      ? localStorage.getItem("agreeToTerms")
                      : formData.agreeToTerms
                  }
                  disabled={localStorage.getItem("agreeToTerms") !== null}S
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                I agree to the terms and conditions to be applied.
              </label>
            </div>

            <div className="button-declaration">
              <button
                onClick={handleDiscard}
                type="button"
                className="discard-declare"
              >
                Discard
              </button>
              <button
                onClick={handleSubmit}
                type="submit"
                className="discard-declare"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Institutional;
