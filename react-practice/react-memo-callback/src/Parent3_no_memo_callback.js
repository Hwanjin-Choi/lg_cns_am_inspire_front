/* import React, { useCallback, useEffect, useState } from "react";

// Parent의 state가 바뀌면서 Child 새로고침
// handleClick 함수 항상 다시 생성
const Child = React.memo((props) => {
  console.log(`🔁 Child 렌더링 ${props.value}`);

  useEffect(() => {
    console.log("handleClick 새로 생성");
  }, [props.handleClick]);

  return (
    <div>
      <h2>Child</h2>
      <button onClick={props.handleClick}>자식 버튼</button>
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => console.log("자식 버튼 클릭");

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <Child value="변하지 않는 props" handleClick={handleClick} />
    </div>
  );
}

export default Parent;
 */

import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(
  ({ onClickWithDependency, onClickNoDependency }) => {
    console.log("🔁 Child 렌더링!");
    return (
      <div>
        <button onClick={onClickWithDependency}>
          자식 버튼 (의존성 있는 콜백)
        </button>
        <button onClick={onClickNoDependency}>
          자식 버튼 (의존성 없는 콜백)
        </button>
      </div>
    );
  }
);

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // count 상태에 의존하는 콜백 (count가 변경되면 함수 참조가 변경됨)
  const handleClickWithDependency = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    console.log("🔥 의존성 있는 콜백 - 카운트 증가:", count + 1);
  }, [count]);

  // 의존성이 없는 콜백 (컴포넌트가 처음 렌더링될 때만 생성되고 참조가 유지됨)
  const handleClickNoDependency = useCallback(() => {
    setOtherCount((prevOtherCount) => prevOtherCount + 1);
    console.log("💧 의존성 없는 콜백 - otherCount 증가:", otherCount + 1);
  }, []);

  console.log("Parent 렌더링!");

  return (
    <div>
      <p>카운트: {count}</p>
      <p>Other 카운트: {otherCount}</p>
      <button onClick={() => setCount(count + 1)}>부모 카운트 증가</button>
      <ChildComponent
        onClickWithDependency={handleClickWithDependency}
        onClickNoDependency={handleClickNoDependency}
      />
    </div>
  );
}

export default ParentComponent;
