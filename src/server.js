const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");

console.log("Is this working? No way");

// const Datastore = require("nedb");

const server = express();

server.use(morgan("dev"));

server.use(methodOverride());
server.use(cookieParser());

server.use(cors());
server.use(compression());

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.static(__dirname + "/../client"));

const router = express.Router();

router.post("/add", (request, response) => {
  //const database = new Datastore('database_easyaddress.db');
  //database.loadDatabase();

  //const data = 'No friggin way, it is here?!'

  //database.insert(data)

  console.log("I got a request: ", request.body);
  return response.send({ test: "Email received" });
});

// go to http://localhost:3000/api/test
router.get("/test", (request, response) => {
  console.log("test endpoint hit.");
  return response.send("Test Worked!");
});

server.use("/api", router);

server.listen(3000, () => console.log("Listening on port 3000"));
