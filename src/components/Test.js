import React, { Component } from 'react'
import styles from '../styles/Test.module.css'

export default class Test extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.txt}> HELLO FROM TEST COMPONENT</h1>
            </div>
        )
    }
}
