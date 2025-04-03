import { useState } from "react";
import styles from "./MovieList.module.css";
import { useEffect } from "react";

const MovieList = () => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=cba95d401a14ab806ffc13a5052aab89&query=`;
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      const fetchMovie = async () => {
        const res = await fetch(url + keyword);
        const data = await res.json();
        setList(data.results);
        console.log(list);
      };
      fetchMovie();
      setIsClicked(false);
    }
  }, [isClicked]);
  const MovieCard = () => {
    // list를 props로 받도록 수정
    return (
      <>
        {list.map((item) => (
          <li key={item.id}>
            {" "}
            {/* key prop 추가 */}
            <img
              src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
              alt={item.original_title}
            />{" "}
            {/* alt 속성 추가 */}
            <h2>{item.original_title}</h2>
            <p>{item.vote_average}</p>
            <p>개봉일: {item.release_date}</p>
            <p>{item.overview}</p>
          </li>
        ))}
      </>
    );
  };

  const MoviePrac = () => {
    return (
      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
              alt={item.original_title}
            />
            <h2>{item.original_title}</h2>
            <p>{item.vote_average}</p>
            <p>개봉일: {item.release_date}</p>
            <p>{item.overview}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.movie}>
      <h1>영화 검색</h1>
      <div className={styles.search_box}>
        <input
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          type="text"
          placeholder="영화 제목을 검색하세요"
        />
        <button
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          검색
        </button>
      </div>
      <ul className={styles.list}>
        {/*  {list.map((item) => {
          return (
            <li>
              <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} />
              <h2>{item.original_title}</h2>
              <p>{item.vote_average}</p>
              <p>개봉일: {item.release_date}</p>
              <p>{item.overview}</p>
            </li>
          );
        })} */}
        <MoviePrac />
      </ul>
    </div>
  );
};

export default MovieList;
