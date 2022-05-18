import React, { Component } from "react";

class Practice extends Component{
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentdidmount");
    }
    render() {
        console.log("render");
        return(
            <>
                <div>컴포넌트 생성시 라이프 사이클</div>
                <div>state 초기값 {this.state}</div>
            </>
        )
    }
}
export default Practice;