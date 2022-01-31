// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {countInMin: 0, countInSec: 0}

  runTimer = () => {
    this.setState(prevState => ({countInSec: prevState.countInSec + 1}))
  }

  onClickStart = () => {
    this.intervalId = setInterval(this.runTimer, 1000)
  }

  onClickStop = () => {
    const {countInSec} = this.state
    clearInterval(this.intervalId)
    this.setState({countInSec})
  }

  onClickReset = () => {
    clearInterval(this.intervalId)
    this.setState({countInSec: 0})
  }

  renderCount = () => {
    const {countInMin, countInSec} = this.state
    const time = countInMin * 60 + countInSec
    const min = Math.floor(time / 60)
    const sec = Math.floor(time % 60)
    const stringifiedMin = min > 9 ? min : `0${min}`
    const stringifiedSec = sec > 9 ? sec : `0${sec}`

    return `${stringifiedMin}:${stringifiedSec}`
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stop-watch-container">
          <div className="name-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <p className="name">Timer</p>
          </div>
          <h1 className="time-count">{this.renderCount()}</h1>
          <div>
            <button
              type="button"
              className="btn bg-green"
              onClick={this.onClickStart}
            >
              Start
            </button>
            <button
              type="button"
              className="btn bg-red"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn bg-yellow"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
