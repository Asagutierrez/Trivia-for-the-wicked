/*---------------------- Constants ------------------------*/
const triviaQuestion = {
  question: 'What color is the sky?',
  answers: [
    {
      answer:'blue', 
      isAnswer: true
    },
    {
      answer:'green',
      isAnswer: false
    },
    {
      answer:'yellow',
      isAnswer: false
  }
  ],
  
}
//render question 

/*------------------- Variables (state) --------------------*/
// let board, turn, winner, tie
//set state for current question, answerClicked score
let currQuestionIndex = 0
let score = 0

/*--------------- Cached Element References ----------------*/
const questionElement = document.getElementById('question')
const answersElement = document.getElementById('anwsers')
const scoreElement = document.getElementById('score')
/*---------------------- Event Listeners -------------------*/
// reference TTT line 22-24 for implamenting event listeners to trivia question answers

//add event listeners answers after iterating thru them with a for each method
/*----------------------- Functions ------------------------*/
// add init function
// use forloop or forEach loop to iterate thru the questions
init ()

function initGame() {
  currQuestionIndex = 0
  Score = 0
  renderGame()
}

function renderStateOfGame() {
  if (currQuestionIndex < questions.length) {
    const currentQuestion = questions[currQuestionIndex]
    questionElement.textContent = currentQuestion.question
    answersElement.innerHTML = ""
    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement('button')
      button.textContent = answer
      button.addEventListener('click', () => handleAnswer(index))
      answersElement,appendChild(button)
    })
    scoreElement.textContent = `Score ${score}`
  } else {
    endGame()
  }
}

function handleAnswer(answerIndex) {
  const currentQuestion = questions[currQuestionIndex]
  

  if (currentQuestion.answers[answerIndex].correct) {
    score++
  }
  currQuestionIndex++
  renderGame()
}