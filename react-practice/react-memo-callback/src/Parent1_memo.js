import React, { useState } from "react";

// Parent의 state가 바뀌면서 Child 새로고침되어야 하지만
// React.memo의 사용으로 새로고침되지 않음 (props가 바뀌지 않는 한)
const Child = React.memo((props) => {
  console.log(`🔁 Child 렌더링 ${props.value}`);
  return <h2>Child</h2>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("1번째");
  return (
    <div>
      <p>카운트: {count}</p>
      <button
        onClick={() => {
          const randomNum = parseInt(Math.random() * 2);
          setCount(count + 1);
          setValue(randomNum);
        }}
      >
        카운트 증가
      </button>
      <Child value={value} />
    </div>
  );
}

export default Parent;
