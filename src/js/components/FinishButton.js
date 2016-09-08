import React from 'react'

export default class FinishButton extends React.Component {
  constructor() {
  	super()
  	this.state = {
  		finished: false,
  	}
  	this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
	this.setState({
		finished: !this.state.finished,
	})
  }

  render() {
  	const text = this.state.finished ? 'finished' : 'not finished'
  	return (
  		  <button style={{backgroundColor: this.state.finished ? 'green' : 'red'}} onClick={this.handleClick}>{text}</button>  
  	)
  }
}