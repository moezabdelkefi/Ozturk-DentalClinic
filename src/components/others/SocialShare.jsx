import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SocialShare = () => {
  return (
    <>
      <li>
        <Link
          to="https://www.facebook.com/dr.abdurrahmanozturk.tr"
          target="_blank"
        >
          <i className="fab fa-facebook-f"></i>
        </Link>
      </li>
      <li>
        <Link
          to="https://www.instagram.com/dr.abdurrahmanozturk.tr"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
        </Link>
      </li>
    </>
  );
};

export default SocialShare;
