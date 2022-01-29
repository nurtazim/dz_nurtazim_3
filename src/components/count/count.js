import React from "react";

class Count extends React.Component {
    state = {
        count: 0
    }
    onIncrease = () => {
        this.setState(
            // {
        (oldState)=>({count: oldState.count+1})
        //     count: this.state.count + 1
        // })
        )
    }
    decrease=()=>{
        this.setState(
            (oldState)=>({count:oldState.count-1})
        )
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.onIncrease}> increase</button>
                <button onClick={this.decrease}>decrease</button>
            </div>
        )
    }
}

export default Count