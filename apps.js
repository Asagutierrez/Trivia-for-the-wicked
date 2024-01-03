const triviaQuestions = [
  {
    question: 'What color is the sky?',
    answers: [
      { 
        answer: 'Blue', 
        isAnswer: true 
      },
      { 
        answer: 'Green', 
        isAnswer: false 
      },
      { 
        answer: 'Yellow', 
        isAnswer: false 
      },
    ],
  },
  {
    question: 'What was the first commercially successful video game?',
    answers: [
      { 
        answer: 'Pong', 
        isAnswer: true 
      },
      { 
        answer: 'Tetris', 
        isAnswer: false 
      },
      { 
        answer: 'Gta5', 
        isAnswer: false 
      },
    ],
  },
  {
    question: 'What is the best selling videogame of all time?',
    answers: [
      { 
        answer: 'Minecraft', 
        isAnswer: true 
      },
      { 
        answer: 'Skyrim', 
        isAnswer: false 
      },
      { 
        answer: 'Call of duty black ops 2', 
        isAnswer: false 
      },
    ],
  },
]
/*------------------- Variables (state) --------------------*/
let currQuestionIndex = 0
let score = 0
/*--------------- Cached Element References ----------------*/
const questionElement = document.getElementById('question')
const answersElement = document.getElementById('answers')
const scoreElement = document.getElementById('score')

/*---------------------- Event Listeners -------------------*/


/*----------------------- Functions ------------------------*/
function initGame() {
  console.log('Initializing game...')
  currQuestionIndex = 0;
  score = 0
  renderGame()
}

function renderGame() {
  
  if (currQuestionIndex < triviaQuestions.length) {
    
    const currentQuestion = triviaQuestions[currQuestionIndex]

    questionElement.textContent = currentQuestion.question

    answersElement.innerHTML = ""

    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement('button')
      button.textContent = answer.answer
      button.addEventListener('click', () => handleAnswer(index));
      answersElement.appendChild(button)
    })

    scoreElement.textContent = `Score: ${score}`
  } else {
    endGame()
  }
}

function handleAnswer(answerIndex) {
  const currentQuestion = triviaQuestions[currQuestionIndex];

  if (answerIndex === currentQuestion.answers) {
    score++
  }
    

  console.log(`Selected answer: ${currentQuestion.answers[answerIndex].answer}`)
  console.log(`Current score: ${score}`)
  
  currQuestionIndex++
  renderGame()
}

function endGame() {
  console.log('Game Over!')
  questionElement.textContent = "Game Is Over"
  answersElement.innerHTML = `Your final score is ${score} out of ${triviaQuestions.length}`;
  scoreElement.textContent = ""
  
}


initGame()
