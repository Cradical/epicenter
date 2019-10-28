import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class Timer extends Component {
  state = {
    status: false,
    runningTime: 0,
  }

  componentDidMount() {
    this.handleClick()
  }

  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.runningTime
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime })
        })
      }
      return { status: !state.status }
    })
  }

  handleReset = () => {
    this.setState({ runningTime: 0, status: false })
  }

  render() {
    const { status, runningTime } = this.state
    return (
      <div>
        <h4>
          Timer:
          <span> {runningTime}ms</span>
        </h4>
        {/* <Button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</Button>
        <Button onClick={this.handleReset}>Reset</Button> */}
      </div>
    )
  }
}
