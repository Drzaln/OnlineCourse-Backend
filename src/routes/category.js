module.exports = app => {
  const categoryController = require('../controllers/category')
  app
    .get('/category', categoryController.getCategory)
    .post(`/category`, categoryController.insertCategory)
    .patch(`/category/:id_category`, categoryController.updateCategory)
    .delete(`/category/:id_category`, categoryController.deleteCategory)
}
