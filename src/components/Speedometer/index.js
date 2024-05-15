// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  incrementSpeed = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  decrementSpeed = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer"
        />
        <h2 className="increase-speed">speed is {count}mph</h2>
        <p className="speed-limit">Min Limit is 0mph, Max limit is 200mph </p>
        <div>
          <button
            type="button"
            className="button-1"
            onClick={this.incrementSpeed}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button-2"
            onClick={this.decrementSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
