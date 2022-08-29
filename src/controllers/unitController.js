const mysqlConnection = require('../config/mysqlConfig')


const createUnit = async (req, res) => {
  try {
    const query = 'INSERT INTO unit (name, address, address_number, phone_number) VALUES (?,?,?,?)'
    await mysqlConnection.execute(query, [
      req.body.name,
      req.body.address,
      req.body.address_number,
      req.body.phone_number
    ])

    return res.status(201).json({
      message: 'Unit successfully inserted'
    })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const getAllUnits = async (req, res) => {
  try {
    await mysqlConnection.execute(
      'SELECT * FROM unit', function(error, rows, fields) {
        if (rows.length === 0) {
          return res.status(404).json({
            message: 'No unit found',
            details: 'Not found'
          })
        }
        return res.status(200).json(rows)
    })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }   
}


const getUnitById = async (req, res) => {  
  try {
    let filter = ''
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id)

    await mysqlConnection.execute(
      'SELECT * FROM unit' + filter, function(error, rows, fields) {
        if (rows.length === 0) {
          return res.status(404).json({
            message: 'No unit found',
            details: 'Not found'
          })
        }
        return res.status(200).json(rows)
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateUnit = async (req, res) => {
  try {    
    const id = parseInt(req.params.id)
    const name = req.body.name
    const address = req.body.address
    const address_number = req.body.address_number
    const phone_number = req.body.phone_number

    await mysqlConnection.execute(
    `UPDATE unit SET name='${name}', address='${address}', address_number='${address_number}', phone_number='${phone_number}' WHERE ID=${id}`,
    function(error, rows, fields) {
      return res.status(201).json({
        message: 'Unit successfully updated'
        })
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteUnits = async (req, res) => {  
  try {
    await mysqlConnection.execute(
      'DELETE FROM unit WHERE ID=' + parseInt(req.params.id),
      function(error, rows, fields) {
        return res.status(201).json({
          message: 'Unit successfully deleted'
        })
    })

  } catch (error) {
    return  res.status(500).json({ message: error.message })
  }   
}


module.exports = {
  createUnit,
  getAllUnits,
  getUnitById,
  updateUnit,
  deleteUnits
}