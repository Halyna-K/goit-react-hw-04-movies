import "./App.css";
import {useState, lazy, Suspense} from 'react';
import { NavLink, Route, Switch } from "react-router-dom";
import LoaderSpinner from './components/Loader/Loader';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import HomePage from "./pages/HomePage/HomePage";
// import NotFound from './pages/NotFound/NotFound';
import { SearchBar } from "./components/Searchbar/SearchBar";

const HomePage = lazy(() => import ('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));


const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className="navLink"
              activeClassName="activeNavLink"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="navLink"
              activeClassName="activeNavLink"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<LoaderSpinner/>}>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/movies">
          <MoviesPage title="Find movie" />
          <SearchBar />
        </Route>

        <Route>
        <NotFound text='Page not found'/>
        {/* <NotFound text='We don't have reviews for this movie.'/> */}
        </Route>
      </Switch>
      </Suspense>
    </div>
  );
}

export default App;
