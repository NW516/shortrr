import React from "react";
import "./ShortUrl.css";

const ShortUrl = (props) => {
  const shortUrl = props.shorty;
  const err = props.err;
  console.log("shortUrl: " + shortUrl);
  if (err !== "") {
    return (
      <div>
        <p className="shorturl-display">Please enter a valid URL</p>
      </div>
    );
  }
  if (shortUrl !== "") {
    return (
      <div>
        <p className="shorturl-display">Your shortened URL is ready to use: <a href={props.shorty} rel="noopener noreferrer" target="_blank">{props.shorty}</a></p>
    </div>
    );
  }
  return (
    <div></div>
  );
};

export default ShortUrl;
