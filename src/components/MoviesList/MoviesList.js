import s from "./MoviesList.module.css";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

export const MoviesList = () => (
  <ul className={s.list}>
    {/* {movies.map((movie) => ( */}
      <li className={s.item}>
      {/*  key={movie.id} >
        <p className={s.text}>{movie.name + " : " + movie.number}</p> */}
      </li>
    {/* ))} */}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
