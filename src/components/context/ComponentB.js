import React, { Component } from 'react'
import ComponentD from './ComponentD'

export default class ComponentB extends Component {
    render() {
        return (
            <div>
                <h1>COMPONENT B</h1>
                <ComponentD/>
            </div>
        )
    }
}
