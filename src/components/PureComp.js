import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    componentDidMount(){
        // console.log('PURE COMPONENT DIDMONUNT')
    }

    render() {
        console.log('PURE COMPONENT RENDER')
        return (
            <div>
                <h1>Pure Component</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default PureComp
