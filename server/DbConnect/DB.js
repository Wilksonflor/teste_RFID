const mongoose = require("mongoose");
// require("dotenv").config();

// const { DB_USER, DB_PASSWORD, DB_URL } = process.env;
// const MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}`;

// mongoose
//   .connect(MONGODB_URI)
//   .then(() => {
//     console.log("Conectado ao MongoDB");
//   })
//   .catch((error) => {
//     console.error("Erro ao conectar ao servidor: ", error);
//   });

// mongoose.connection.on("error", (err) => {
//   console.error("Erro de conexão com o MongoDB:", err);
// });

mongoose
  .connect(`mongodb://127.0.0.1:27017/antenaRfid`)
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao servidor", error);
  });
