const conn = require('../config/connect')

module.exports = {
  getCategory: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM category', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertCategory: data => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO category SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateCategory: (id_kategori, data) => {
    return new Promise((resolve, reject) => {
      conn.query(
        'UPDATE category SET ? WHERE id=?',
        [data, id_kategori],
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
  deleteCategory: id_kategori => {
    return new Promise((resolve, reject) => {
      conn.query(
        'DELETE FROM category WHERE id=?',
        id_kategori,
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
