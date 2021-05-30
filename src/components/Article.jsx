import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { samurays } from "../data/samurays";
import { Button } from "antd";
import "./Article.css";

const Article = () => {
  const params = useParams();
  const history = useHistory();
  const idArticle = Number(params.id) - 1;
  const [article] = useState(samurays[idArticle]);

  const redirectNews = () => history.push("/news");

  const { name, descr, imgUrl, tags } = article;
  return (
    article && (
      <div className="article">
        <h2>{name}</h2>
        <div className="article-content">
          <img src={imgUrl} alt={name} />
          <div className="article-info">
            <div style={{ paddingRight: "50px" }}>{descr}</div>
            <div style={{ marginTop: "10px" }}>
              Tags:{" "}
              {tags.map((el, index) => (
                <Button type="dashed" key={index}>
                  {el}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <Button
            type="primary"
            onClick={redirectNews}
          >{'Nazad'}</Button>
        </div>
      </div>
    )
  );
};

export default Article;
