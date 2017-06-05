import React from "react";

class Film extends React.Component {

  render() {
    return (
      <div className="film-div">
        <p className="film-name">
          {this.props.filmName}
        </p>
        {this.props.children}
      </div>
    );
  };

};

export default Film;