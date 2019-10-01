const category = require('../models/category')
const respon = require('../helpers/response')

module.exports = {
  getCategory: (req, res) => {
    category
      .getCategory()
      .then(resultCategory => {
        respon.response(res, resultCategory, 200)
      })
      .catch(error => {
        console.log(error)
      })
  },
  insertCategory: (req, res) => {
    const data = {
      name: req.body.name
    }

    category
      .insertCategory(data)
      .then(resultCategory => {
        const result = resultCategory
        respon.response(res, result, 200, data)
      })
      .catch(error => {
        console.log(error)
      })
  },

  updateCategory: (req, res) => {
    const id_kategori = req.params.id_category
    const data = {
      name: req.body.name
    }
    category
      .updateCategory(id_kategori, data)
      .then(resultCategory => {
        const result = resultCategory
        respon.response(res, result, 200, [id_kategori, data])
      })
      .catch(error => {
        console.log(error)
      })
  },
  deleteCategory: (req, res) => {
    const id_kategori = req.params.id_category

    category
      .deleteCategory(id_kategori)
      .then(resultCategory => {
        const result = resultCategory
        respon.response(res, result, 200, id_kategori)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
