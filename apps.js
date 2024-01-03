const triviaQuestions = [
  {
    category: 'Gaming',
    question: 'What year was the Super Nintendo Entertainment System (SNES) released?',
    answers: [
      { 
        
        answer: '1991', 
        isAnswer: true 
      },
      { 
        answer: '1999', 
        isAnswer: false 
      },
      { 
        answer: '1985', 
        isAnswer: false 
      },
    ],
  },
  {
    question: 'What was the first commercially successful video game?',
    answers: [
      { 
        answer: 'Tetris', 
        isAnswer: false
      },
      { 
        answer: 'Pong', 
        isAnswer: true 
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
  {
    question: 'What year was Nintendo founded?',
    answers: [
      { 
        answer: '1875', 
        isAnswer: false
      },
      { 
        answer: '1869', 
        isAnswer: false 
      },
      { 
        answer: '1889', 
        isAnswer: true
      },
    ],
  },
  {
    question: 'Blizzard Entertainment is most well known for what video game franchise?',
    answers: [
      { 
        answer: 'OverWatch', 
        isAnswer: false
      },
      { 
        answer: 'Heartstone', 
        isAnswer: false 
      },
      { 
        answer: 'World of warcarft', 
        isAnswer: true
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
  questionElement.textContent = "Game Is Over"
  answersElement.innerHTML = `Your final score is ${score} out of ${triviaQuestions.length}`;
  scoreElement.textContent = ""
  
}


initGame()
