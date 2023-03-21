import { useEffect , useState } from "react";
import "../css/movie.css";

function Movie(props) {
  const change = () => {
    let txt = document.querySelector(".title").textContent;
    console.log(txt);
  } 
  
  return (
    <div className="movie">
      <ul>
        <li onClick={change}>
          <img src={props.image} />
        </li>
        <li className="title">{props.name}</li>
        <li>{props.rating}</li>
        <li>{props.date}</li>
      </ul>
    </div>
  );
}

export default Movie;
