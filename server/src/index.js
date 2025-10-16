import app from "./app.js";
import sequelize from "./db/conn.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected...");

    await sequelize.sync();
    console.log("All models were synchronized successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
