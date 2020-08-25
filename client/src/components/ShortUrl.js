import React, { Component  } from "react";
import "./ShortUrl.css";

const ShortUrl = (props) => {
  const shortUrl = props.shorty;
  console.log("shortUrl: " + shortUrl);
  if (shortUrl !== "") {
    return (
      <div>
        <p className="shorturl-display">Your shortened URL is ready to use: <a href={props.shorty} target="_blank">{props.shorty}</a></p>
    </div>
    );
  }
  return (
    <div></div>
  );
};

export default ShortUrl;
