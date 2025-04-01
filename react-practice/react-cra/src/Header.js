import React from "react";

const Header = (props) => {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
        {props.desc}
      </header>
    </div>
  );
};

export default Header;
