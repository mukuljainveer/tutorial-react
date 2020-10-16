const qraphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = qraphql;
const _ = require("lodash");

let books = [
  { name: "Name of Wind", genre: "Fantasy", id: "1", author_id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2", author_id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3", author_id: "3" },
  { name: "The Hero of Ages", genre: "Fantasy", id: "4", author_id: "2" },
  { name: "The Color of Magic", genre: "Fantasy", id: "5", author_id: "3" },
  { name: "The Light of Fantasy", genre: "Sci-Fi", id: "6", author_id: "3" },
];

let authors = [
  { name: "Patric Rothfuss", age: 44, id: "1" },
  { name: "Brandon Sanderson", age: 42, id: "2" },
  { name: "Terry Pratchett", age: 66, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: qraphql.GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.author_id });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: qraphql.GraphQLID },
    name: { type: GraphQLString },
    age: { type: qraphql.GraphQLInt },
    books: {
      type: new qraphql.GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { author_id: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    book: {
      type: BookType,
      args: { id: { type: qraphql.GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: qraphql.GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      },
    },
    books: {
      type: new qraphql.GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
    authors: {
      type: new qraphql.GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      },
    },
  }),
});

// eg.
//     books("id":"2"){
//         name
//         genre
//     }

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: qraphql.GraphQLInt },
        id: { type: qraphql.GraphQLID },
      },
      resolve(parent, args) {
        let data = { name: args.name, age: args.age, id: args.id };
        authors.push(data);
        return data;
      },
    },
    addBook: {
      type:BookType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author_id: { type: qraphql.GraphQLID },
      },
      resolve(parent, args) {
        let data = { name: args.name, genre: args.genre, author_id: args.author_id };
        books.push(data);
        return data;
      },
    }
  },
});

module.exports = new qraphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
