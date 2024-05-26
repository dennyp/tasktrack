import db from '../config/db.js'

export class HomeController {
  async index(req, res) {
    try {
      const [results] = await db.query('SELECT * FROM tasks')
      res.json(results)
    } catch (error) {
      console.log(error)
    }
  }
}
