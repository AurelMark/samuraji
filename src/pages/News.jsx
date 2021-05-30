import React from "react";
import NewsSingle from "../components/NewsSingle";
import { samurays } from "../data/samurays";

const News = () => {
  return samurays ? (
    samurays.map(({ ...otherProps }, index) => (
      <NewsSingle key={index} {...otherProps} />
    ))
  ) : (
    <div>Loading...</div>
  );
};

export default News;
