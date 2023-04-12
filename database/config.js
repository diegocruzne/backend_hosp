const mongoose = require("mongoose");

// mongo: diego | diegoMONGO123
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("DB Conectada :)");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora iniciar la BD");
  }
};

module.exports = {
  dbConnection,
};
