import React, { Component } from 'react'

export default class RegularComponent extends Component {
    componentDidMount(){
        // console.log('REGULAR COMPONENT DIDMONUNT')
    }
    render() {
        console.log('Regular COMPONENT RENDER')
        return (
            <div>
                <h1>Regular Component</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

