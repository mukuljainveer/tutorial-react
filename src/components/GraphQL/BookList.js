import React, { Component } from "react";
import { gql, useQuery } from "@apollo/client";

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBookQuery);

  return (
    <div>
      {console.log("loading", loading, "error", error, "data", data)}
      <h1>Book List</h1>
      <ul>
        <li>BookList</li>
      </ul>
    </div>
  );
};

export default BookList;
