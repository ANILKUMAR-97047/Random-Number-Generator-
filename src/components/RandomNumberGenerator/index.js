// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNum: 0,
  }

  getRandomNum = () => Math.ceil(Math.random() * 100)

  incrementButton = () => {
    const num = this.getRandomNum()
    this.setState(prevState => ({randomNum: num}))
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="bg-container">
        <div className="random-number-container">
          <h1 className="random-number-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.incrementButton}
          >
            Generate
          </button>
          <p className="random-number">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
