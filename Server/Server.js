const { app } = require("./index.js");
const { connectToDB } = require("./Data/db");

connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
