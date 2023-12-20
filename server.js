const express = require("express");
const { logger } = require("./middleware/log/logEvents");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middleware/errorHandle/errorHandler");
const { verifyJWT } = require("./middleware/auth/verifyJWT.js");
const credentials = require("./middleware/credential/credentials.js");

const PORT = process.env.PORT || 5000;

app.use(logger);
app.use(credentials); //for frontend
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello ERP");
});

app.use("/login", require("./routes/api/login"));
app.use("/refresh", require("./routes/api/refresh.js"));
app.use("/logout", require("./routes/api/logout"));
// app.use(verifyJWT);
app.use("/register-user", require("./routes/admin/register"));
app.use("/getUsers", require("./routes/admin/user"));
app.use("/department", require("./routes/admin/department"));
app.use("/role", require("./routes/admin/role"));
app.use("/updateUser", require("./routes/admin/updateUser"));
app.use("/product", require("./routes/product/product"));

app.all("*", (req, res) => {
  res.status(404);
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));