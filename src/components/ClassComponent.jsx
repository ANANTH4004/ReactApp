import React from 'react'

class ClassComponents extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Anand',
      count: 0,
    }
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    })
    console.log(this.state)
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }
  render() {
    return (
      <>
        <h1>Count is {this.state.count}</h1>
        <h1> This is a class component </h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }
}

export default ClassComponents
