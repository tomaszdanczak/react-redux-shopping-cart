const app = require("./app.js");
const { port } = require("./config");

app.listen(port, () => console.log(`Server started at ${port}`));
