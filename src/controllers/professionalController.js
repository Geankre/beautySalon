const mysqlConnection = require('../config/mysqlConfig')
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword
    try {
      const emailExists = mysqlConnection.query({
      sql: 'SELECT * FROM `professional` WHERE `email`=?',
      timeout: 40000,
      values: [req.body.email]}) 
      // console.log(emailExists)
      if (emailExists.length > 0) {        
        return res.status(409).send({ message: 'E-mail already registered'})

      } else {
        mysqlConnection.query(
        'INSERT INTO professional SET ?', {
          name: req.body.name,
          email: req.body.email,
          phone_number: req.body.phone_number,
          date_of_birth: req.body.date_of_birth,
          unit_id: req.body.unit_id,
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

const getAllProfessional = async (req, res) => {
  try {
    await mysqlConnection.execute(
      'SELECT * FROM professional', function (error, rows, fields) {
        if (rows.length === 0) {
          return res.status(404).json({
            message: ' No professional found',
            details: 'Not found'
          })
        }

        return res.status(200).json(rows)
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const getProfessionalById = async (req, res) => {
  try {
    let filter = ''
    if (req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id)

    await mysqlConnection.execute(
      'SELECT * FROM professional' + filter, function (error, rows, fields) {
        if (rows.length === 0) {
          return res.status(404).json({
            message: 'No professional found',
            details: 'Not found'
          })
        }
        return res.status(200).json(rows)
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateProfessional = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword
  try {    
    const id = parseInt(req.params.id)
    const name = req.body.name
    const email = req.body.email
    const phone_number = req.body.phone_number
    const date_of_birth = req.body.date_of_birth
    const unit_id = req.body.unit_id
    const password = req.body.password

    await mysqlConnection.execute(
    `UPDATE professional SET name='${name}', email='${email}', phone_number='${phone_number}', date_of_birth='${date_of_birth}', unit_id='${unit_id}', password='${password}' WHERE ID=${id}`,
    function(error, rows, fields) {
      return res.status(201).json({
        message: 'Professional successfully updated'
        })
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteProfessional = async (req, res) => {  
  try {
    await mysqlConnection.execute(
      'DELETE FROM professional WHERE ID=' + parseInt(req.params.id),
      function(error, rows, fields) {
        return res.status(201).json({
          message: 'Professional successfully deleted'
        })
    })

  } catch (error) {
    return  res.status(500).json({ message: error.message })
  }   
}

module.exports = {
  signUp,
  getAllProfessional,
  getProfessionalById,
  updateProfessional,
  deleteProfessional
}