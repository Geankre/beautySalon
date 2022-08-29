const mysqlConnection = require('../config/mysqlConfig')


const createSchedule = async (req, res) => {
  try {
    const query = 'INSERT INTO schedule (service_id, date, hour, professional_id, client_id) VALUES (?,?,?,?,?)'
    await mysqlConnection.execute(query, [
      req.body.service_id,
      req.body.date,
      req.body.hour,
      req.body.professional_id,
      req.body.client_id
    ])

    return res.status(201).json({
      message: 'Schedule successfully inserted' //ajustar: Agendamento efetuado com sucesso
    })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const getAllSchedule = async (req, res) => {
  try {
    await mysqlConnection.execute(
      'SELECT * FROM schedule', function(error, rows, fields) {
        if (rows.length === 0) {
          return res.status(404).json({
            message: 'No schedule found',
            details: 'Not found'
          })
        }
        return res.status(200).json(rows)
    })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }   
}


const getScheduleById = async (req, res) => {  
  try {
    let filter = ''
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id)

    await mysqlConnection.execute(
      'SELECT * FROM schedule' + filter, function(error, rows, fields) {
        if (rows.length === 0) {
          return res.status(404).json({
            message: 'No schedule found',
            details: 'Not found'
          })
        }
        return res.status(200).json(rows)
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateSchedule = async (req, res) => {
  try {    
    const id = parseInt(req.params.id)    
    const service_id = req.body.service_id
    const date = req.body.date
    const hour = req.body.hour
    const professional_id = req.body.professional_id
    const client_id = req.body.client_id

    await mysqlConnection.execute(
    `UPDATE schedule SET service_id='${service_id}', date='${date}', hour='${hour}', professional_id='${professional_id}', client_id='${client_id}' WHERE ID=${id}`,
    function(error, rows, fields) {
      return res.status(201).json({
        message: 'Schedule successfully updated'
        })
      })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteSchedule = async (req, res) => {  
  try {
    await mysqlConnection.execute(
      'DELETE FROM schedule WHERE ID=' + parseInt(req.params.id),
      function(error, rows, fields) {
        return res.status(201).json({
          message: 'Schedule successfully deleted'
        })
    })

  } catch (error) {
    return  res.status(500).json({ message: error.message })
  }   
}


module.exports = {
    createSchedule,
    getAllSchedule,
    getScheduleById,
    updateSchedule,
    deleteSchedule
}