import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ textAlign: "center", padding: "2rem 0", fontSize: "0.9rem" }}
    >
      <p>
        {" "}
        {new Date().getFullYear()} Uma Sthotrabhashyam. Built with React +
        TypeScript.
      </p>
    </footer>
  );
};

export default Footer;
