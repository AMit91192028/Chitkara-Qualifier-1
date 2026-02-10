require('dotenv').config();
const server = require('./src/app')

server.listen(3000,(err)=>{
    console.log("Server is running on http://localhost:3000")
})