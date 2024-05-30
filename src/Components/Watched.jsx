import React from "react"

class Watched extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>
                    <h3 className="watchlist-header">Already Watched</h3>
                    <div>
                        {this.props.alreadyWatched.map((movie, i) => {
                            return (
                                <div className="watchlist" key={i}>
                                    <h3>Title:  {movie.title}</h3>
                                    <button className="button3" type="button" onClick={() => this.props.veryLastDelete(movie.id)}>Delete</button>
                                    {console.log('knnn', this.props.veryLastDelete)}

                                </div>

                            )
                        })}
                    </div>
                </div>

            </div>
        )
    }
}
export default Watched








