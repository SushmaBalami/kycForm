import React from "react";

import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import '../../src/dashboard/Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div>
        <Layout>
        <button className="btn-login">
          <Link
            to="/login"
          >
           Agent Login
          </Link>
        </button>
        <button className="btn-login">
          <Link
            to="/individual"
          >
           INDIVIDUAL
          </Link>
        </button>
        <button className="btn-login">
          <Link
            to="/institutional"
          >
           INSTITUTIONAL
          </Link>
        </button>
        </Layout>
      </div>
    </>
  );
};

export default Dashboard;
