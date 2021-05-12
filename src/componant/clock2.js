import React, { Component } from 'react'

export default class clock2 extends Component {
    constructor (props) {
        super (props) 
        this.state = {date : new Date ()} 
        this.timer = null
    }
    tick () {
        this.setState ({date: new Date()}) 
    }
    componentDidMount () {
        this.timer = window.setInterval ( this.tick.bind(this), 1000)
    }
    componentWillUnmount () {
        window.clearInterval (this.timer)
    }
    render() {
        const date = new Date ()
        return (
            <div>
                <h1> {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()} </h1>
            </div>
        )
    }
}
