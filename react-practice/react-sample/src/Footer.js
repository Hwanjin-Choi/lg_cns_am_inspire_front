import React from "react";

const Footer = ({ data }) => {
  const MappedData = () =>
    data.map((item, index) => {
      return <h5 key={index}>{item}</h5>;
    });

  return (
    <footer>
      <MappedData />
    </footer>
  );
};

export default Footer;
