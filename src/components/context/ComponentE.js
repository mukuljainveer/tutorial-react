import React, { Component } from 'react'
import ComponentF from './ComponentF'
import { UserContext } from './userContext'

export default class ComponentE extends Component {

    static contextType=UserContext

    render() {
        console.log(this.context)
        return (
            <div>
                <h1>COMPONENT E</h1>
                <ComponentF/>
            </div>
        )
    }
}
