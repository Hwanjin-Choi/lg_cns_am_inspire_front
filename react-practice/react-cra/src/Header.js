import React from "react";

const Header = (props) => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  /*   const factorial = (n) => {
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return factorial(n - 1) * n;
    }
  };
  const no_memo = React.useMemo(() => {
    console.log("factorial 연산");
    let result = factorial(count);
    return result;
  }, []);
 */
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
        {props.desc}
        <p
          onClick={() => {
            handleClick();
          }}
        >
          {count}
        </p>
        {no_memo}
      </header>
    </div>
  );
};

export default Header;
