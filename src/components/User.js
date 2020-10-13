import React, { Component } from 'react'
import styles from '../styles/User.module.css'

export default class User extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.txt}>HELLO FROM USER COMPONENT</h1>
            </div>
        )
    }
}
