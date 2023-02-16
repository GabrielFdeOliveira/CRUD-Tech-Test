import express from "express";
//Log HTTP requests and responses to the console.
import morgan from "morgan";
import cors from "cors";
import router from './routes/users.js'

//Creates the app
const app = express();
const PORT = process.env.PORT;
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type']
}));

app.use(morgan("dev"));
//Parse the JSON data in the request body
app.use(express.json());

//Mount the router 
app.use('/api/users', router);

//Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
