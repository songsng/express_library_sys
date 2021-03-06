const express = require('express');
const router = express.Router();

const BookController = require('../controllers/BookController');
const book = new BookController();

module.exports = (app) => {
    // 注册首页路由
    router.get('/', book.actionIndex());
    router.get('/index', book.actionIndex());
    router.get('/saveBook', book.actionSaveBook());

    // 注册删除图书API
    router.delete('/api/deleteBookByBid/:bid', book.actionDeleteBookById());
    // 新增图书API
    router.post('/api/addBook', book.actionAddBookData());
    // 更新图书API
    router.post('/api/updateBook', book.actionUpdateBookData());

    app.use(router);
}