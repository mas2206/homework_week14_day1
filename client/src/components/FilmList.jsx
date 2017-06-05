import React from "react";
import Film from "./Film.jsx";

class FilmList extends React.Component {

  render() {

    const filmNodes = this.props.data.map((film) => {
      return (
        <Film filmName={film.filmName} key={film.id}>
          {film.filmTime}
        </Film> 
      );
    });

    return (
      <div className="film-list">
        {filmNodes}
      </div>
    );
  };

};

export default FilmList;