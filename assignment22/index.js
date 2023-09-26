const app = require('./app');
const port = process.env.RUNNING_PORT;

app.listen(port,()=>{
    console.log("server run success");
})