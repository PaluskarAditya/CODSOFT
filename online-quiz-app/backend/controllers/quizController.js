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
      quiz_data,
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
    await Quiz.findByIdAndDelete(id);
    res.json({msg: "successfully deleted"});
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

module.exports = {
  createQuiz,
  delQuiz,
  allQuiz,
  userQuizes
}