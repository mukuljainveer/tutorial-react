import React, { Component } from "react";
import { gql } from "@apollo/client";
// import { Query } from "react-apollo";

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookListClass extends Component {
  render() {
    return (
      //   <Query query={getBookQuery}>

      //   </Query>
      <div>
        {/* {console.log("DATA", data)} */}
        <h1>BOOK LIST CLASS</h1>
      </div>
    );
  }
}

export default BookListClass;
