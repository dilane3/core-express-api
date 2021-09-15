// we load the environment variables here
require("dotenv").config()

const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/user.js")

const PORT = process.env.PORT
const optionsCors = {
  origin: "*",
  withCredentials: true
}

const app = express()

// apply some middleware
app.use(express.json())
app.use(cors(optionsCors))

// main logic
app.use("/api/users", userRouter)

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
