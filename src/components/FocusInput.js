import React, { Component } from 'react'
import Input from './utility/Input'

export default class FocusInput extends Component {
    constructor(props){
        super(props)
        this.inputReff=React.createRef()
    }
    focusHandler=()=>{
        console.log(this.inputReff.current.focusInput())
    }

    render() {
        return (
            <div>
                <Input ref={this.inputReff}/>
                <button onClick={this.focusHandler}>Focus</button>
            </div>
        )
    }
}
