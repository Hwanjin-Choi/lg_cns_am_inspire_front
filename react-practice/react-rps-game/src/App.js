import "./App.css";
import styles from "./App.module.css";

function Title() {
  return (
    <div className="title">
      <h1>가위 바위 보 게임</h1>
    </div>
  );
}
function Scissors(props) {
  return (
    <div
      className={styles.control}
      onClick={() => {
        props.send("scissors");
      }}
    >
      <img src="http://ggoreb.com/images/react/scissors.png" />
    </div>
  );
}
function Rock(props) {
  return (
    <div
      className={styles.control}
      onClick={() => {
        props.send("rock");
      }}
    >
      <img src="http://ggoreb.com/images/react/rock.png" />
    </div>
  );
}
function Paper(props) {
  return (
    <div
      className={styles.control}
      onClick={() => {
        props.send("paper");
      }}
    >
      <img src="http://ggoreb.com/images/react/paper.png" />
    </div>
  );
}
function Result(props) {
  return (
    <div className="result">
      <h1>Com:</h1>
      <h1>Player:</h1>
      <h1></h1>
    </div>
  );
}
function App() {
  //0 1  2
  const list = ["가위", "바위", "보"];
  const [result, setResult] = useState({
    result: "선택해주세요",
  });
  const send = (item) => {
    console.log(item);
  };
  return (
    <div className="App">
      <Title />
      <Scissors
        send={(item) => {
          send(item);
        }}
      />
      <Rock
        send={(item) => {
          send(item);
        }}
      />
      <Paper
        send={(item) => {
          send(item);
        }}
      />
      <Result />
    </div>
  );
}

export default App;
