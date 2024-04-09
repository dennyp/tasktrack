import bodyParser from 'body-parser'
import 'dotenv/config'
import express from 'express'
import mysql from 'mysql2/promise'

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())

const db = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
