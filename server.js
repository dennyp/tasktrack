import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import db from './config/db.js'
import { router } from './routes/homeRouter.js'

const PORT = process.env.PORT

const app = express()

db.connect((err) => {
  if (err) throw err
  console.log('Connected to database!')
})

const corsOptions = {
  credentials: true,
  origin: `${process.env.FRONTEND_URL}`,
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
