import triviaQuestions from "./questons.js"


/*------------------- Variables (state) --------------------*/
let currQuestionIndex = 0
let score = 0
let originalQuestions = [...triviaQuestions]
let currentCategory = ''
/*--------------- Cached Element References ----------------*/
const categoryButtons = document.querySelectorAll('.category-buttons')
const questionElement = document.getElementById('question')
const answersElement = document.getElementById('answers')
const scoreElement = document.getElementById('score')

/*---------------------- Event Listeners -------------------*/
categoryButtons.forEach(button => {
  button.addEventListener('click', handleClick)
})

resetButton.addEventListener('click', resetGame)

/*----------------------- Functions ------------------------*/
function initGame() {
  categoryButtons.forEach(button => button.hidden = false)
  questionElement.textContent = ''
  answersElement.innerHTML = ''
  scoreElement.textContent = ''
  currQuestionIndex = 0;
  score = 0
}

function renderGame() {
  categoryButtons.forEach(button => button.hidden = true)

  if (currQuestionIndex < triviaQuestions.length) {
    
    const currentQuestion = triviaQuestions[currQuestionIndex]

    questionElement.textContent = `[${currentQuestion.category}] ${currentQuestion.question}`

    answersElement.innerHTML = ""

    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement('button')
      button.textContent = answer.answer
      button.addEventListener('click', () => handleAnswer(index))
      answersElement.appendChild(button)
    })

    scoreElement.textContent = `Score: ${score}`
  } else {
    endOfGame()
  }
}


function handleClick(evt) {
  currentCategory = evt.target.textContent
  const filteredQuestions = triviaQuestions.filter(question => question.category === currentCategory)
  currQuestionIndex = 0
  score = 0
  triviaQuestions.length = 0
  triviaQuestions.push(...filteredQuestions)
  renderGame()
}

function resetGame() {
  currQuestionIndex = 0
  score = 0
  triviaQuestions.length = 0
  triviaQuestions.push(...originalQuestions.filter(question => question.category === currentCategory))
  renderGame()
}

function handleAnswer(answerIndex) {
  const currentQuestion = triviaQuestions[currQuestionIndex]

  if (currentQuestion.answers[answerIndex].isAnswer) {
    score++
  }
    

  console.log(`Selected answer: ${currentQuestion.answers[answerIndex].answer}`)
  console.log(`Current score: ${score}`)
  
  currQuestionIndex++
  renderGame()
}

function endOfGame() {
  console.log('Game Over!')
  if (score >= 3) {
    questionElement.textContent = "Congratulations! You Won!"
  } else {
    questionElement.textContent = "Sorry! You Lost. Try Again!"
  }
  answersElement.innerHTML = `Your final score is ${score} out of ${triviaQuestions.length}`
  scoreElement.textContent = ""
}


initGame()
