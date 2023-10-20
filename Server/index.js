const { app } = require("./Server.js");
const { connectToDB, closeConnection } = require("./Data/db");

connectToDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

/***********************************************************************************
 *                         Gracefully Shutdown
 **********************************************************************************/
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('SIGTERM: HTTP server closed');
  });
  closeConnection();
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('SIGINT: HTTP server closed');
  });
  closeConnection();
});
