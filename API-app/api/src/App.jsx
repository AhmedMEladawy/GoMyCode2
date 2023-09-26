import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";


export default function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  // function fetchMovies() {
  //   setIsLoading(true);
  //   setError(null);
  //   fetch("https://swapi.dev/api/films%22)
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       throw new Error("Something went wrong");
  //     })
  //     .then((data) => {
  //       setMovies(data.results);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => setError(err.message));
  // }

  async function fetchMovies() {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.get("https://swapi.dev/api/films%22")
      if (res.status === 200) {
        setMovies(res.data.results);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }

  let content = "";

  if (isloading && error === null) {
    content = "Loading...";
  }

  if (isloading === false && movies.length > 0) {
    content = movies.map((movie) => <div key={movie.title}>{movie.title}</div>);
  }

  if (error) {
    content = error;
  }

  return (
    <div>
      <button onClick={fetchMovies}>Fetch</button>
      <div>
        {/* {!isloading &&
          movies.length > 0 &&
          movies.map((movie) => <div key={movie.title}>{movie.title}</div>)}
        {error && <div>{error}</div>}
        {isloading && !error && <div>Loading...</div>} */}
        {content}
      </div>
    </div>
  );
}