const Quiz = require('../models/quizModel');
const User = require('../models/userModel');

const createQuiz = async (req, res) => {
  try {
    const { name, quiz_data } = req.body;
    const { id } = req;
    const user = await User.findById(id);
    const quiz = await Quiz({
      name,
      author: user.username,
      quiz_data: quiz_data[0],
      user_id: id
    })
    if (quiz) {
      await quiz.save();
      res.status(200).json(quiz);
    } else {
      res.status(500).json({err: "internal server error"});
    }
  } catch (error) {
    console.log(error.message); 
  }
}

const delQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findByIdAndDelete(id);
    res.json(quiz);
  } catch (error) {
    console.log(error.message); 
  }
}

const allQuiz = async (req, res) => {
  try {
    const quizes = await Quiz.find();
    if (quizes) {
      res.status(200).json(quizes);
    } else {
      res.status(404).json({err: "no quizes found"});
    }
  } catch (error) {
    console.log(error.message);
  }
}

const userQuizes = async (req, res) => {
  try {
    const { id } = req;
    const quizes = await Quiz.find({ user_id: id });
    if (quizes) {
      res.status(200).json(quizes);
    } else {
      res.status(404).json({err: "no quizes found"});
    }
  } catch (error) {
    console.log(error.message);
  }
}

const getQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);
    if (!quiz) {
      res.status(404).json({err: "quiz not found"});
    } else {
      res.json(quiz);
    }
  } catch (error) { 
    console.log(error.message);
  }
}

const randomQuizes = async (req, res) => {
  try {
    const limit = parseInt(req.params.limit);
    const randomQuizzes = await Quiz.aggregate([
      { $sample: { size: limit * 2 } },
      { $group: { _id: '$_id', data: { $first: '$$ROOT' } } },
      { $limit: limit },
    ]);
    res.json(randomQuizzes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = {
  createQuiz,
  delQuiz,
  allQuiz,
  userQuizes,
  getQuiz,
  randomQuizes
}