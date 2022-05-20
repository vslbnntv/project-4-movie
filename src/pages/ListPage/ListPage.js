import React, { Component } from "react";
import "./ListPage.css";
import { connect } from "react-redux";
import { getList, getMovieInfoByImdbID } from "../../redux/actions";
import Header from "../../components/Header/Header";
class ListPage extends Component {
  state = {
    isClicked: false,
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    this.props.getList(id);
  
  }

  render() {
    console.log(this.props);
    return (
      <div className="list-page">
        <Header />
        <h1 className="list-page__title">{this.props.title}</h1>
        <ul>
          {this.props.movieDetails.map((item) => {
            return (
              <li key={item.imdbID} className="list-page__single-movie">
                <img
                  src={item.Poster}
                  className="single-movie__poster"
                  alt={item.Title}
                />
                <div className="info">
                  <h3 className="movie-item__title">{item.Title}</h3>
                  <h4 className="movie-item__about">Film haqqında:</h4>
                  <div className="list-page__details">
                    <div className="list-page__details-title">
                    İstehsal ili:
                    </div>
                    <div className="list-page__details-value">{item.Year}</div>
                  </div>
                  <div className="list-page__details">
                    <div className="list-page__details-title">Ölkə:</div>
                    <div className="list-page__details-value">
                      {item.Country}
                    </div>
                  </div>
                  <div className="list-page__details">
                    <div className="list-page__details-title">Janr</div>
                    <div className="list-page__details-value">{item.Genre}</div>
                  </div>
                  <div className="list-page__details-value">
                    <ul className="movie-item__info-list">
    
                      <li id="movie-item__info-item">
                        <button className="movie-item__add-button link-imdb">
                          <a
                            href={`https://www.imdb.com/title/${item.imdbID}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="list-page__link-imdb"
                          >
                            Daha artığına IMDB-də baxın
                          </a>
                        </button>
                      </li>
                    </ul>
                   
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getList: (id) => dispatch(getList(id)),
  getMovieInfoByImdbID: (listMovies) =>
    dispatch(getMovieInfoByImdbID(listMovies)),
});

const mapStateToProps = (state) => {
  return {
    title: state.title,
    movieDetails: state.movieDetails,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
