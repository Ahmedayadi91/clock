import React, { Component } from 'react'

export default class clock extends Component {
constructor (props) {
    super(props) 
    this.state = {date : new Date ()}
    this.timer = null
}
componentDidMount () {
    this.timer = window.setInterval (this.tick.bind (this),1000)
}
componentWillUnmount () {
    window.clearInterval(this.timer)
}
tick () {
    this.setState ({date: new Date()}) 
}

    render() {
        const date = new Date () 
        return (
            <div>
               <h1> il est le {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()} </h1>
            </div>
        )
    }
}
