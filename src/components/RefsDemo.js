import React, { Component } from 'react'

export class RefsDemo extends Component {

    constructor(props){
        super(props)
    
        this.inputRefs=React.createRef()
    }

    componentDidMount(){
        this.inputRefs.current.focus()
    }

    render() {
        return (
            <div>
                <input ref={this.inputRefs}/>
                <button>Focus</button>
            </div>
        )
    }
}

export default RefsDemo
