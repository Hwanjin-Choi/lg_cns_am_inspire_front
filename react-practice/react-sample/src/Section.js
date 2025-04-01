import React from "react";

const Section = ({ data }) => {
  const MappedData = () => {
    return data.map((item, index) => {
      return <h4 key={index}>{item}</h4>;
    });
  };

  return (
    <section>
      <MappedData />
    </section>
  );
};

export default Section;
