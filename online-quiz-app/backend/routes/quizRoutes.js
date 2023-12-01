const express = require('express');
const auth = require('../middlewares/authMiddleware');
const { userQuizes, allQuiz, createQuiz, delQuiz, getQuiz } = require('../controllers/quizController');
const router = express.Router();

router.get('/all', allQuiz).get('/myquizes', auth, userQuizes).get('/getquiz/:id', auth, getQuiz);
router.post('/create', auth, createQuiz);
router.delete('/delete/:id', auth, delQuiz);

module.exports = router;