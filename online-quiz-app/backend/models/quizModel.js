const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  user_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  quiz_data: [
    {
      quiz_text: {
        type: String,
        required: true
      },
      quiz_answer: {
        type: String,
        required: true
      },
      quiz_options: [
        {
          type: String,
          required: true
        },
      ],
    },
  ]
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;