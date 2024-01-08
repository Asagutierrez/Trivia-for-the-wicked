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
const timerElement = document.getElementById('timer')
const backgroundMusic = document.getElementById('backgroundMusic')
const musicButton = document.getElementById('musicButton')
const resetButton = document.getElementById('resetButton')
/*---------------------- Event Listeners -------------------*/
categoryButtons.forEach(button => {
  button.addEventListener('click', handleClick)
})
musicButton.addEventListener('click', () => {
  toggleMusic()
})

resetButton.addEventListener('click', resetGame)

/*----------------------- Functions ------------------------*/
function initGame() {
  categoryButtons.forEach(button => button.hidden = false)
  questionElement.textContent = ''
  answersElement.innerHTML = ''
  scoreElement.textContent = ''
  resetButton.hidden = true
  currQuestionIndex = 0;
  score = 0
}

function renderGame() {
  categoryButtons.forEach(button => button.hidden = true)

  if (currQuestionIndex < triviaQuestions.length) {
    
    const currentQuestion = triviaQuestions[currQuestionIndex]

    questionElement.textContent = `${currentQuestion.question}`

    answersElement.innerHTML = ""

    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement('button')
      button.textContent = answer.answer
      button.addEventListener('click', () => handleAnswer(index))
      answersElement.appendChild(button)
    })

    scoreElement.textContent = `Score: ${score}`

    startTimer(15)
  } else {
    endOfGame()
  }
}

function toggleMusic() {
  if (backgroundMusic.paused){
    backgroundMusic.play()
  } else {
    backgroundMusic.pause()
  }
}

function startTimer(seconds) {
  let timeLeft = seconds
  timerElement.textContent = `Time Left: ${timeLeft}s`

  timer = setInterval(() => {
    timeLeft--
    

    if (timeLeft >= 0) {
      timerElement.textContent = `Time Left: ${timeLeft}s`
    }
    if (timeLeft === 0) {
      handleAnswer(-1)
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(timer)
}


function handleClick(evt) {
  currentCategory = evt.target.textContent
  const filteredQuestions = triviaQuestions.filter(question => question.category === currentCategory)
  currQuestionIndex = 0
  score = 0
  triviaQuestions.length = 0
  triviaQuestions.push(...filteredQuestions)
  resetButton.hidden = false
  categoryButtons.forEach(button => (button.style.display = 'none'))
  renderGame()
}

function resetGame() {
  currQuestionIndex = 0
  score = 0
  triviaQuestions.length = 0
  triviaQuestions.push(...originalQuestions.filter(question => question.category === currentCategory))
  resetButton.hidden = true
  renderGame()
}

function handleAnswer(answerIndex) {
  const currentQuestion = triviaQuestions[currQuestionIndex]
  stopTimer()
  if (answerIndex !== -1 && currentQuestion.answers[answerIndex].isAnswer) {
    score++
  }
  
  currQuestionIndex++
  renderGame()
}

function endOfGame() {
  if (score >= 5) {
    questionElement.textContent = "Congratulations! You Won!"
  } else {
    questionElement.textContent = "Sorry! You Lost. Try Again!"
  }
  answersElement.innerHTML = `Your final score is ${score} out of ${triviaQuestions.length}`
  scoreElement.textContent = ""
}

initGame()
