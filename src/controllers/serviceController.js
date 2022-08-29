const mysqlConnection = require('../config/mysqlConfig')


const createService = async (req, res) => {
  try {
    const query = 'INSERT INTO service (name, description) VALUES (?,?)'
    await mysqlConnection.execute(query, [
      req.body.name,
      req.body.description
    ])

    return res.status(201).json({
      message: 'Service successfully inserted'
    })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const getAllServices = async (req, res) => {
  try {
    await mysqlConnection.execute(
      'SELECT * FROM service', function(error, rows, fields) {
        if (rows.length === 0) {
          return res.status(404).json({
            message: 'No service found',
            details: 'Not found'
          })
        }
        return res.status(200).json(rows)
    })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }   
}


const getServiceById = async (req, res) => {  
  try {
    let filter = ''
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id)

    await mysqlConnection.execute(
      'SELECT * FROM service' + filter, function(error, rows, fields) {
        if (rows.length === 0) {
          return res.status(404).json({
            message: 'No service found',
            details: 'Not found'
          })
        }
        return res.status(200).json(rows)
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateService = async (req, res) => {
  try {    
    const id = parseInt(req.params.id)
    const name = req.body.name
    const description = req.body.description

    await mysqlConnection.execute(
    `UPDATE service SET name='${name}', description='${description}' WHERE ID=${id}`,
    function(error, rows, fields) {
      return res.status(201).json({
        message: 'Service successfully updated'
        })
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteService = async (req, res) => {  
  try {
    await mysqlConnection.execute(
      'DELETE FROM service WHERE ID=' + parseInt(req.params.id),
      function(error, rows, fields) {
        return res.status(201).json({
          message: 'Service successfully deleted'
        })
    })

  } catch (error) {
    return  res.status(500).json({ message: error.message })
  }   
}


module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService
}

