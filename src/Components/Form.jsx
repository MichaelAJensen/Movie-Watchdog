import React from "react"

class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (            
                <div>
                    <h1 className="form-header"> Movie Watchdog</h1>
                    <form className="form" onSubmit={this.props.handleAddMovie}>
                        <input className="inputBox" type="text"
                            placeholder="Title"
                            name="title"
                            value={this.props.title}
                            onChange={this.props.handleInput}
                            required />
                        <input className="inputBox" type="text"
                            placeholder="Director"
                            name="director"
                            value={this.props.director}
                            onChange={this.props.handleInput}
                            required />
                        <input className="inputBox" type="text"
                            placeholder="Genre"
                            name="genre"
                            value={this.props.genre}
                            onChange={this.props.handleInput}
                            required />
                        <input className="button1" type="submit" />
                    </form>
                      
                </div>
        )
    }
}
export default Form
            
                    







