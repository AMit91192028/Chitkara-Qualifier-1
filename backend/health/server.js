require('dotenv').config();
const server = require('./src/app')

server.listen(3001,(err)=>{
    console.log("Server is running on http://localhost:3001")
})