import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export default class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {(context)=>{
                        return(<h1>COMPONENT F : {context}</h1>)
                    }}
                </UserConsumer>
            </div>
        )
    }
}
