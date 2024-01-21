const express= require('express');
const cors= require('cors');
const compression=require('compression');

require('./connection/connection');
const routes= require('./routes/index.route');

const app= express();

const PORT= process.env.PORT|| 8000;
var corsOptions = {
  origin: '*'||"http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({limit: '50mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true,limit: '50mb' }));

app.use(express.static(__dirname+'/public/uploads/'));

app.use(compression());

//routes

app.use('/api/v1/user',routes.user);

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})

