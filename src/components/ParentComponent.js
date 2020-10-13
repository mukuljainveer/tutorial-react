import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

export default class ParentComponent extends Component {
    state={
        name:'viswas'
    }

    componentDidMount(){
        // console.log('PARENT COMPONENT DIDMONUNT')
        setInterval(()=>{
            this.setState({name:'viswas'})
        },2000)
    }

    render() {
        console.log('************************* PARENT COMPONENT RENDER ******************************')
        return (
            <div>
                {/* <PureComp name={this.state.name}/>
                <RegularComponent name={this.state.name}/> */}
                <MemoComponent name={this.state.name}/>
            </div>
        )
    }
}
