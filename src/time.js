import React, {Component} from 'react'
import Timer from './timer.js'

class Time extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0
        }
        setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
    }
    
}
export default Time