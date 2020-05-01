import React from 'react';
import './App.css';
import States from "./components/States";
import All from "./components/All";
import Countries from "./components/Countries";
import Hopkins from "./components/Hopkins";

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            inputValue: '20',
            renderView: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({
            renderView: this.state.renderView,
            inputValue: evt.target.value
        });
    }

    handleClick(view) {
        this.setState({
            renderView: view,
            inputValue: this.state.inputValue
        });
    }


    render() {
        return (
            <div>
                <All/>
                <label htmlFor="limit">Limit</label><br/>
                <input type="number" id="limit" name="limit" value={this.state.inputValue}
                       onChange={evt => this.handleChange(evt)}/>

                <div>
                    <button onClick={() => this.handleClick("Countries")}>Countries</button>
                    <button onClick={() => this.handleClick("States")}>States</button>
                    <button onClick={() => this.handleClick("Hopkins")}>Hopkins</button>
                </div>

                {this.state.renderView === "Countries" ? <Countries limit={this.state.inputValue}/> : null}
                {this.state.renderView === "States" ? <States limit={this.state.inputValue}/> : null}
                {this.state.renderView === "Hopkins" ? <Hopkins limit={this.state.inputValue}/> : null}
            </div>
        )

    }
}