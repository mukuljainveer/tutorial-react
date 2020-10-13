import React, { Component } from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'
import ComponentC from './components/context/ComponentC'
import { UserProvider } from './components/context/userContext'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import HoverCounter from './components/HoverCounter'
import ParentComponent from './components/ParentComponent'
import RefsDemo from './components/RefsDemo'
import Test from './components/Test'
import User from './components/User'

// 1) Create the Context
// 2) Provide a Context Value
// 3) Consume the Context Value

export class App extends Component {
  
  render() {
    return (
      <div className="App">
          {/* <ParentComponent/> */}
          {/* <RefsDemo/> */}
          {/* <FocusInput/> */}
          {/* <FRParentInput/> */}
          {/* <ClickCounter/> */}
          {/* <HoverCounter/> */}
          {/* <User/> */}
          {/* <Test/> */}

          <UserProvider value="Mukul Jain">
            <ComponentC/>
          </UserProvider>
      </div>
    )
  }
}

export default App
