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
        {console.log('loading',loading,'error',error,'data',data)}
      <ul>
        <li>Book1</li>
      </ul>
    </div>
  );
};

export default BookList;
