import triviaQuestions from "./questons.js"


/*------------------- Variables (state) --------------------*/
let currQuestionIndex = 0
let score = 0
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
  console.log('Initializing game')
  currQuestionIndex = 0;
  score = 0
  renderGame()
}

function renderGame() {
  
  if (currQuestionIndex < triviaQuestions.length) {
    
    const currentQuestion = triviaQuestions[currQuestionIndex]

    questionElement.textContent = `[${currentQuestion.category}] ${currentQuestion.question}`

    answersElement.innerHTML = ""

    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement('button')
      button.textContent = answer.answer
      button.addEventListener('click', () => handleAnswer(index));
      answersElement.appendChild(button)
    })

    scoreElement.textContent = `Score: ${score}`
  } else {
    endOfGame()
  }
}

function handleAnswer(answerIndex) {
  const currentQuestion = triviaQuestions[currQuestionIndex];

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

function resetGame() {
  currQuestionIndex = 0
  score = 0
  renderGame()
}

function handleClick(event) {
  const selectedCategory = event.target.textContent
  const filteredQuestions = triviaQuestions.filter(question => question.category === selectedCategory)
  currQuestionIndex = 0
  score = 0
  triviaQuestions.length = 0
  triviaQuestions.push(filteredQuestions)
  renderGame()
}


initGame()
