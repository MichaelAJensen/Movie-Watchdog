import React from "react"

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1 className="watchlist-header">My Movie Watchlist</h1>
                <div>
                    {this.props.movies.map((movie, i) => {
                        return (
                            <div className="watchlist" key={i}>
                                <h3 >Title:  {movie.title}</h3>
                                <h3>Director: {movie.director} </h3>
                                <h3>Genre: {movie.genre} </h3>
                                <div>
                                    <button className="button2" onClick={() => this.props.handleDeleteMovie(movie.id)}>Watched</button>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Card




