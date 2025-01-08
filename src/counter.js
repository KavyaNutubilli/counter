import React from 'react';
import './counter.css';

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    Increment(){
        this.setState({
            count: this.state.count+1
        },
        ()=>{ console.log(this.state.count) }
    )
    }

    Clear(){
        this.setState({
            count: 0
        })
    }

    Decrement(){
        this.setState({
            count: this.state.count-1
        })
        console.log(this.state.count);
    }
    render(props){
        return(
            <>
            <center id="container">
                <h1>Interactive Counter</h1>
                <div id="box">
                <h4>Count: {this.state.count}</h4>
                <div id="btn">
                <button class="btn" onClick={this.Increment.bind(this)}>Increment</button>
                <button class="btn" onClick={this.Clear.bind(this)}>Clear</button>
                <button class="btn" onClick={this.Decrement.bind(this)}>Decrement</button>
                </div>
                </div>
            </center>
            </>
        );
    }
}

export default Counter;