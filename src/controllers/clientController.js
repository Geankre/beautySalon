const mysqlConnection = require('../config/mysqlConfig')
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword
    try {
      const emailExists = mysqlConnection.query({
      sql: 'SELECT * FROM `client` WHERE `email`=?',
      timeout: 40000,
      values: [req.body.email]}) 
      // console.log(emailExists)
      if (emailExists.length > 0) {        
        return res.status(409).send({ message: 'E-mail already registered'})

      } else {
        mysqlConnection.query(
        'INSERT INTO client SET ?', {
          name: req.body.name,
          email: req.body.email,
          phone_number: req.body.phone_number,
          date_of_birth: req.body.date_of_birth,
          password: req.body.password
          }, function (error, results, fields) {
            if (results) {
              return res.status(201).send({ message: 'Sign Up successfully' })
            }
          })
        }          
      } catch (error) {
        return res.status(500).json({ message: error.message })
      }
}

const getAllClient = async (req, res) => {
  try {
    await mysqlConnection.execute(
      'SELECT * FROM client', function (error, rows, fields) {
        if (rows.length === 0) {
          return res.status(404).json({
            message: ' No client found',
            details: 'Not found'
          })
        }

        return res.status(200).json(rows)
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const getClientById = async (req, res) => {
  try {
    let filter = ''
    if (req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id)

    await mysqlConnection.execute(
      'SELECT * FROM client' + filter, function (error, rows, fields) {
        if (rows.length === 0) {
          return res.status(404).json({
            message: 'No client found',
            details: 'Not found'
          })
        }
        return res.status(200).json(rows)
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateClient = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword
  try {    
    const id = parseInt(req.params.id)
    const name = req.body.name
    const email = req.body.email
    const phone_number = req.body.phone_number
    const date_of_birth = req.body.date_of_birth
    const password = req.body.password

    await mysqlConnection.execute(
    `UPDATE client SET name='${name}', email='${email}', phone_number='${phone_number}', date_of_birth='${date_of_birth}', password='${password}' WHERE ID=${id}`,
    function(error, rows, fields) {
      return res.status(201).json({
        message: 'Client successfully updated'
        })
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteClient = async (req, res) => {  
  try {
    await mysqlConnection.execute(
      'DELETE FROM client WHERE ID=' + parseInt(req.params.id),
      function(error, rows, fields) {
        if(error) {
          return res.status(201).json({
            message: 'Invalid ID'
          })
        }
        return res.status(201).json({
          message: 'Client successfully deleted'
        })
    })

  } catch (error) {
    return  res.status(500).json({ message: error.message })
  }   
}

module.exports = {
  signUp,
  getAllClient,
  getClientById,
  updateClient,
  deleteClient
}