import "./App.css";
import { useEffect, useRef, useState } from "react";

const { kakao } = window;
let ref = null;

const MapContainer = () => {
  ref = useRef();
  const [list, setList] = useState([]);

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.511, 126.7298),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    ref.current = map;

    const fetchData = async () => {
      const data = await fetch(
        "http://ggoreb.pythonanywhere.com/location/data/?page=1&count=50"
      );
      const result = await data.json();
      result.data.map((item) => {
        const Lat = item.latitude;
        const Lon = item.longitude;
        const markerPosition = new kakao.maps.LatLng(Lat, Lon);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(ref.current);
      });
    };
    fetchData();
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
};

function App() {
  return (
    <>
      <h1>Kakao Map</h1>
      <MapContainer />
      <button
        onClick={() => {
          var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
          ref.current.setCenter(moveLatLon);
        }}
      >
        이동
      </button>
    </>
  );
}

export default App;
