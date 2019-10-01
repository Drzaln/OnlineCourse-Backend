const connection = require('../config/connect')

module.exports = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT fullname,email,id FROM user`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getDetailUser: id_user => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user WHERE id = ?',
        Number(id_user),
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  register: data => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getByEmail: email => {
    console.log(email)
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT id, email, fullname, salt, password FROM user WHERE email = ?',
        email,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  updateToken: (email, token) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE user SET token = ? WHERE email = ?`,
        [token, email],
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  deleteToken: id_user => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE user SET token = ? WHERE id =?`,
        [' ', id_user],
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  deleteUser: id_user => {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE from user WHERE id =?`,
        [id_user],
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  getToken: token => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT token FROM user where token=?`,
        token,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  }
}
