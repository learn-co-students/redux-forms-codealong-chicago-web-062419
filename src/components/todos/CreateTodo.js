import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    todo: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = this.state.todo
    this.props.addTodo(formData)
    this.setState({
      todo: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" name="todo" onChange={this.handleChange} value={this.state.todo}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addTodo: (formData) => dispatch({type: "ADD_TODO", payload: formData}) 
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);