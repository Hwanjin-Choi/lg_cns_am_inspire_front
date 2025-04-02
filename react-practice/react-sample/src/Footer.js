import React from "react";

const Footer = ({ data }) => {
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "beige";
    e.target.style.textDecoration = "underline";

    e.target.style.cursor = "pointer";
  };
  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "unset";
    e.target.style.textDecoration = "none";
  };

  const MappedData = () =>
    data.map((item, index) => {
      return (
        <h5
          onMouseEnter={(e) => {
            handleMouseEnter(e);
          }}
          onMouseLeave={(e) => {
            handleMouseLeave(e);
          }}
          key={index}
        >
          {item}
        </h5>
      );
    });

  return (
    <footer>
      <MappedData />
    </footer>
  );
};

export default Footer;
