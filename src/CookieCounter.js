import React, { Component } from "react";
import './CookieCounter.css'
import cookie from './cookie.jpeg'

class CookieCounter extends Component {
    constructor(props) { //super is used to call the constructor of its parents class. Needed to access the components
        super(props)

        this.state = {
            score: 0,
            multiplier: 1,
            cost: 10,
            interval: 10000
        }
    }

    ChangeScore = () => {
        this.setState({
            score: this.state.score + 1 * this.state.multiplier
        })
    }

    buyPoints = (cost, multiplier) => {
        if(this.state.score > cost) {
            this.setState({multiplier: multiplier})
            this.setState({score: this.state.score - cost})
        } else {
            alert("You don't have enough cookies")
        }
    }

    autoClickCookie = (cost, interval) => {
        if(this.state.score > cost) {
            this.setState({score: this.state.score - cost})
            clearInterval(setInterval(this.ChangeScore, interval))
            setInterval(this.ChangeScore, interval)
            this.setState({cost: cost * 2, interval: interval / 2})
        } else {
            alert("You don't have enough cookies")
        }
    }

    render() {
        return (
            <div className="Cookie-Counter">
                <h1>Hello!</h1>
                
                <button id="Cookie-Button" onClick={this.ChangeScore}></button>
                <h1 id="Score">Your Score is {this.state.score}</h1>
                <div>
                    <h1>Store</h1>
                    <button onClick={() => this.buyPoints(20,2)}>Buy Upgrade: 20 Points</button>
                    <button onClick={() => this.buyPoints(50, 3)}>Buy Upgrade: 50 Points</button>
                    <button onClick={() => this.buyPoints(100, 4)}>Buy Upgrade: 100 Points</button>
                </div>
                <div>
                    <button onClick={() => this.autoClickCookie(this.state.cost, this.state.interval)}>Buy AutoClick: {this.state.cost} Cookies</button>
                    {/* <button onClick={() => this.autoClickCookie(50, 5000)}>Buy AutoClick: 50 Cookies</button>
                    <button onClick={() => this.autoClickCookie(100, 1000)}>Buy AutoClick: 100 Cookies</button> */}
                </div>
            </div>
            
        )
    }
}

export default CookieCounter