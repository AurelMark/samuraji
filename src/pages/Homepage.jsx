import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Witamy na stronie</h1>
      <Link to="/news">
        <Button type="primary">Pokaż artykuły!</Button>
      </Link>
    </div>
  );
};

export default Homepage;
