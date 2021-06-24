// This file is in charge of database connection

const mongoose = require("mongoose");

function connect(callback) {
  let connectionString = `mongodb+srv://Todo_2021_CS:todopassword@todo.ayhqu.mongodb.net/todoApp?retryWrites=true&w=majority`;

  console.log("connect to db....");

  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log("There was an error connecting to mongo: ", err);
    });

  mongoose.connection.once("open", callback);
}

module.exports = {
  connect,
};
