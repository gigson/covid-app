import React from 'react';
import './App.css';
import States from "./components/States";
import Worldwide from "./components/Worldwide";
import Countries from "./components/Countries";
import Provinces from "./components/Provinces";

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            limit: '20',
            renderView: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({
            limit: evt.target.value
        });
    }

    handleClick(view) {
        this.setState({
            renderView: view,
        });
    }


    render() {
        return (
            <div>
                <Worldwide/>

                <label htmlFor="limit">Limit</label><br/>
                <input type="number" id="limit" name="limit" value={this.state.limit}
                       onChange={evt => this.handleChange(evt)}/>

                <div>
                    <button onClick={() => this.handleClick("Countries")}>Countries</button>
                    <button onClick={() => this.handleClick("States")}>States</button>
                    <button onClick={() => this.handleClick("Provinces")}>Provinces</button>
                </div>

                {this.state.renderView === "Countries" ? <Countries limit={this.state.limit}/> : null}
                {this.state.renderView === "States" ? <States limit={this.state.limit}/> : null}
                {this.state.renderView === "Provinces" ? <Provinces limit={this.state.limit}/> : null}
            </div>
        )

    }
}