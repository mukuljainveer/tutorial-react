import React, { Component } from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import ComponentC from "./components/context/ComponentC";
import { UserProvider } from "./components/context/userContext";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import HoverCounter from "./components/HoverCounter";
import ParentComponent from "./components/ParentComponent";
import RefsDemo from "./components/RefsDemo";
import Test from "./components/Test";
import User from "./components/User";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import BookList from "./components/GraphQL/BookList";
import BookListClass from "./components/GraphQL/BookListClass";
import Mic from "./demo/Mic";
import HoverEffect from "./demo/material/HoverEffect";
import { ThemeProvider } from "@material-ui/core";
import theme from "./demo/material/theme/theme";
import Timers from "./components/Timers";

// 1) Create the Context
// 2) Provide a Context Value
// 3) Consume the Context Value

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

export class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          {/* <ParentComponent/> */}
          {/* <RefsDemo/> */}
          {/* <FocusInput/> */}
          {/* <FRParentInput/> */}
          {/* <ClickCounter/> */}
          {/* <HoverCounter/> */}
          {/* <User/> */}
          {/* <Test/> */}
          {/* <UserProvider value="Mukul Jain">
            <ComponentC/>
          </UserProvider> */}

          {/* <BookList/> */}
          {/* <BookListClass/> */}
          {/* <Mic/> */}

          {/* <ThemeProvider theme={theme}>
            <HoverEffect/>  
          </ThemeProvider> */}
          <Timers/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
