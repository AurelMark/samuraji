import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./NewsSingle.css";

const NewsSingle = ({ id, name, descr, imgUrl, tags }) => {
  return id ? (
    <div className="news-single">
      <h2>{name}</h2>
      <div className="news-single-content">
        <div style={{ paddingRight: "50px" }}>{descr}</div>
        <img src={imgUrl} alt={name} />
      </div>
      <div style={{marginTop: '10px'}}>
      Tagi: {tags.map((el, index) => (
          <Button type="dashed" key={index}>{el}</Button>
        ))}
      </div>
      <div style={{ marginTop: "25px" }}>
        <Link to={`/news/${id}`}>
          <Button type="primary">{`Więcej szczegółów`}</Button>
        </Link>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default NewsSingle;
