import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./App.module.css";
import Header from "./Header.js";
function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

/* const Header = () => {
  return (
    <header>
      <h1>WEB</h1>World Wide Web!
    </header>
  );
}; */
//esline-disable-next-line
const Nav = ({ list }) => {
  const MappedList = () =>
    list.map((item) => {
      return <li key={item}>{item}</li>;
    });

  return (
    <nav>
      <ul>
        <MappedList />
        <li>
          <a href="3.html">JavaScript</a>
        </li>
      </ul>
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
  console.log(props);
  return (
    <div className="comment">
      <div className="user-info">
        <Avatar {...props} />
        <div className="user-info-name">{props.author.name}</div>
      </div>
      <div className={styles.title} style={{ "font-size": "2rem" }}>
        {props.text}
      </div>
      {/* <div className="comment-date">{formatDate(props.date)}</div> */}
    </div>
  );
};

const App = () => {
  const list = ["HTML", "CSS", "JavaScriptss"];

  return (
    <div className="App">
      <Header title={"KBO"} desc={"HI"} />
      <Header />
      <Nav list={list} />
      <Comment {...commentData} />
      <BasicExample />
    </div>
  );
};

export default App;
