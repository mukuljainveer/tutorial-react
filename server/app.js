const express=require('express')
const {graphqlHTTP}=require('express-graphql')
const schema=require('./schema/schema')
const cors=require('cors')

const app=express();

//alow cors origin requests
app.use(cors())

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log('listning request on port 4000')
})

// module.exports = app;
