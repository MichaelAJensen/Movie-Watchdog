import React from "react"
import Form from "./Components/Form"
import Card from "./Components/Card"
import Watched from "./Components/Watched"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            alreadyWatched: [],
            title: "",
            director: "",
            genre: ""
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleAddMovie = this.handleAddMovie.bind(this)
        this.handleDeleteMovie = this.handleDeleteMovie.bind(this)
        this.veryLastDelete = this.veryLastDelete.bind(this)
    }
    handleInput(e) {
        let { value, name } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    handleAddMovie(e) {
        e.preventDefault()
        let movie = {
            title: this.state.title,
            director: this.state.director,
            genre: this.state.genre,
        }
        movie.id = Math.floor(Math.random() * 900000)

        this.setState({
            ...this.state,
            movies: [movie, ...this.state.movies],
            title: "",
            director: "",
            genre: ""
        })

    }
    handleDeleteMovie(id) {
        let deletedMovie = this.state.movies.filter(movie => movie.id !== id)
        let theChosenOne = this.state.movies.filter(movie => movie.id === id)[0]
        this.setState({
            movies: deletedMovie,
            alreadyWatched: [theChosenOne, ...this.state.alreadyWatched]

        })
        console.log(id)
    }
    veryLastDelete(id) {
        let deletedMovie = this.state.alreadyWatched.filter(movie => movie.id !== id)
        this.setState({
            alreadyWatched: deletedMovie,
        })
    }          
    render() {
        return (
           
            <div className="wrapper">
                <div className="input">
                    <Form
                        title={this.state.title}
                        genre={this.state.genre}
                        director={this.state.director}
                        handleAddMovie={this.handleAddMovie}
                        handleInput={this.handleInput}
                    />
                    <Watched
                        alreadyWatched={this.state.alreadyWatched}
                        veryLastDelete={this.veryLastDelete} />
                    <Card
                        movies={this.state.movies}
                        handleDeleteMovie={this.handleDeleteMovie}
                    />

                </div>
            </div>

        )
    }
}
export default App














