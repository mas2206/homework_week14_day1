import React from "react";
import FilmList from "./FilmList.jsx";

class FilmBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          filmName: "Goodfellas",
          filmTime: "19:00"
        },
        {
          id: 2,
          filmName: "Pulp Fiction",
          filmTime: "20:00"
        },
        {
          id: 3,
          filmName: "No Country for Old Men",
          filmTime: "21:00"
        },
        {
          id: 4,
          filmName: "Predator",
          filmTime: "22:00"
        },
        {
          id: 5,
          filmName: "Alien",
          filmTime: "23:00"
        }
      ]
    };
  };

  render() {
    return (
    <div className="film-list">
      <FilmList data={this.state.data} />
    </div>
    );
  };

};

export default FilmBox;