import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./App.module.css";
/* import Header from "./Header.js"; */
import { useState, useRef } from "react";
import React from "react";

/* const Header = () => {
  return (
    <header>
      <h1>WEB</h1>World Wide Web!
    </header>
  );
}; */
//esline-disable-next-line
const Nav = (props) => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState("");
  const [list, setList] = useState(props.list);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const inputRef = useRef(null);
  const addList = () => {
    setCurrentIndex(list.length);
    setShow(true);
    setList([...list, edit]);
  };
  const deleteList = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  const changeText = (e) => {
    setEdit(e.target.value);
  };
  const showEditText = (index) => {
    if (show) {
      //수정되고 나서
      const newList = [...list];
      newList[index] = edit;
      setList(newList);
      setEdit("");
      setShow(false);
      setCurrentIndex(-1);
    } else {
      //수정 전
      setEdit(list[index]);
      setCurrentIndex(index);
      setShow(true);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }, 0);
    }
  };

  const MappedList = () =>
    list.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <li onClick={() => deleteList(index)} key={index}>
            {item}
            {currentIndex === -1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showEditText(index);
                }}
              >
                edit
              </button>
            )}
            {currentIndex === index && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showEditText(index);
                }}
              >
                save
              </button>
            )}
          </li>
        </React.Fragment>
      );
    });

  return (
    <nav>
      <button onClick={() => addList()}>ADD</button>
      <ul>
        <MappedList />
      </ul>
      {show && (
        <input
          onChange={(e) => {
            changeText(e);
          }}
          type="text"
          ref={inputRef}
          value={edit}
        />
      )}
    </nav>
  );
};

const commentData = {
  author: {
    avatarUrl: "http://ggoreb.com/images/img_avatar1.png",
    name: "backak",
  },
  text: "hello",
};

const Avatar = (props) => {
  return (
    <div>
      <img
        className="avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
      />
    </div>
  );
};
const Comment = (props) => {
  return (
    <div className="comment">
      <div className="user-info">
        <Avatar {...props} />
        <div className="user-info-name">{props.author.name}</div>
      </div>
      <div className={styles.title} style={{ fontSize: "2rem" }}>
        {props.text}
      </div>
      {/* <div className="comment-date">{formatDate(props.date)}</div> */}
    </div>
  );
};

const App = () => {
  const [list, setList] = useState(["HTML", "CSS", "JavaScriptss"]);
  const [toc, setToc] = useState(null);
  /*  const url = "http://ggoreb.com/api/toc.jsp";
  
 */
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setToc(data);
    };
    fetchData();
  }, []);
  const DataList = () => {
    toc.map((item) => {
      return <p>{item.title}</p>;
    });
  };
  return (
    <div className="App">
      {/* <DataList /> */}
      <Nav list={list} />
      <Comment {...commentData} />
    </div>
  );
};

export default App;
