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
    category: 'Gaming',
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
    category: 'Gaming',
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
    category: 'Gaming',
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
    category: 'Gaming',
    question: 'Blizzard Entertainment is most well known for what video game franchise?',
    answers: [
      { 
        answer: 'Overwatch', 
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
  {
    category: 'Gaming',
    question: 'What product did Nintendo first release before taking on the world of video games?',
    answers: [
      { 
        answer: 'Playing Cards', 
        isAnswer: true
      },
      { 
        answer: 'Plushies', 
        isAnswer: false 
      },
      { 
        answer: 'Board Games', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'Gaming',
    question: 'What is the best-selling handheld gaming system to date?',
    answers: [
      { 
        answer: 'nintendo switch', 
        isAnswer: false
      },
      { 
        answer: 'Nintendo DS', 
        isAnswer: true 
      },
      { 
        answer: 'Steam Deck', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'Gaming',
    question: 'What is the most expensive video game made to date?',
    answers: [
      { 
        answer: 'Overwatch', 
        isAnswer: false
      },
      { 
        answer: 'Stardew Vally', 
        isAnswer: false 
      },
      { 
        answer: 'Gta 6', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'Gaming',
    question: 'Who released the first flight simulator game?',
    answers: [
      { 
        answer: 'Apple', 
        isAnswer: false
      },
      { 
        answer: 'Sony', 
        isAnswer: false 
      },
      { 
        answer: 'Microsof', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'Gaming',
    question: 'What position did the creator of the Game Boy have at Nintendo?',
    answers: [
      { 
        answer: 'Ceo', 
        isAnswer: false
      },
      { 
        answer: 'Devolper', 
        isAnswer: false 
      },
      { 
        answer: 'A janitor', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'Esports',
    question: 'When was the first eSports tournament?',
    answers: [
      { 
        answer: '1982', 
        isAnswer: false
      },
      { 
        answer: '1992', 
        isAnswer: false 
      },
      { 
        answer: '1972', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'Esports',
    question: 'What game championship in 1980 attracted more than 10,000 participants?',
    answers: [
      { 
        answer: 'Space Invaders', 
        isAnswer: true
      },
      { 
        answer: 'Asteroids', 
        isAnswer: false 
      },
      { 
        answer: 'Pac-Man', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'Esports',
    question: 'What was the top prize in the first League of Legends World Championship?',
    answers: [
      { 
        answer: '$100,000', 
        isAnswer: false
      },
      { 
        answer: '$50,000', 
        isAnswer: true
      },
      { 
        answer: '$10,000', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'Esports',
    question: 'What new feature did eSports streamer Twitch add in June 2016?',
    answers: [
      { 
        answer: 'Subscriptions', 
        isAnswer: false
      },
      { 
        answer: 'Cheering', 
        isAnswer: true 
      },
      { 
        answer: 'Achievements', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'Esports',
    question: 'What was the first college to offer eSports scholarships?',
    answers: [
      { 
        answer: 'Robert Morris University', 
        isAnswer: true
      },
      { 
        answer: 'Belleuve University', 
        isAnswer: false 
      },
      { 
        answer: 'Texas Wesleyan University', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'Esports',
    question: 'How many unique viewers watched the 2019 League of Legends World Championship?',
    answers: [
      { 
        answer: '1 Million', 
        isAnswer: false
      },
      { 
        answer: '10 Million', 
        isAnswer: false 
      },
      { 
        answer: '100 Million', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'Esports',
    question: 'Who was the first gamer on the cover of ESPN Magazine?',
    answers: [
      { 
        answer: 'Shroud', 
        isAnswer: false
      },
      { 
        answer: 'Ninja', 
        isAnswer: true 
      },
      { 
        answer: 'Jghosty', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'Esports',
    question: 'How old was the youngest gamer to earn $1 million in eSports winnings?',
    answers: [
      { 
        answer: '12 Years old', 
        isAnswer: false
      },
      { 
        answer: '!5 Years old', 
        isAnswer: false 
      },
      { 
        answer: '13 Years old', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'Esports',
    question: 'What was the first country to recognize eSports as a real sport?',
    answers: [
      { 
        answer: 'Canada', 
        isAnswer: false
      },
      { 
        answer: 'France', 
        isAnswer: false 
      },
      { 
        answer: 'China', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'Esports',
    question: 'What was the grand prize for Red Annihilation (1997)?',
    answers: [
      { 
        answer: 'A Gaming System', 
        isAnswer: false
      },
      { 
        answer: 'A house', 
        isAnswer: false 
      },
      { 
        answer: 'A Car', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'league of legends',
    question: 'What is the name of the continent where the city of Demacia and Noxus are located?',
    answers: [
      { 
        answer: 'Shurima', 
        isAnswer: false
      },
      { 
        answer: 'Ionia', 
        isAnswer: false 
      },
      { 
        answer: 'Valoran', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'league of legends',
    question: 'Which champions weapon of choice is a rocket launcher?',
    answers: [
      { 
        answer: 'Tristana', 
        isAnswer: false
      },
      { 
        answer: 'Jinx', 
        isAnswer: true 
      },
      { 
        answer: 'Miss Fortune', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'league of legends',
    question: 'Who is the Undead Juggernaut?',
    answers: [
      { 
        answer: 'Karthus', 
        isAnswer: false
      },
      { 
        answer: 'Yorick', 
        isAnswer: false 
      },
      { 
        answer: 'Sion', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'league of legends',
    question: 'Who was the first champion ever designed?',
    answers: [
      { 
        answer: 'Master Yi', 
        isAnswer: false
      },
      { 
        answer: 'Singed', 
        isAnswer: true 
      },
      { 
        answer: 'Sivir', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'league of legends',
    question: 'Who was the first champion to receive a legendary skin?',
    answers: [
      { 
        answer: 'Master Yi', 
        isAnswer: false
      },
      { 
        answer: 'Soraka', 
        isAnswer: false 
      },
      { 
        answer: 'Tryndamere', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'league of legends',
    question: 'Which champion is known as the “Eye of the Void”?',
    answers: [
      { 
        answer: 'Vel Koz', 
        isAnswer: true
      },
      { 
        answer: 'Kai Sa', 
        isAnswer: false 
      },
      { 
        answer: 'Belveth', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'league of legends',
    question: 'Which champion is a sentient weapon?',
    answers: [
      { 
        answer: 'Aatrox', 
        isAnswer: true
      },
      { 
        answer: 'Varus', 
        isAnswer: false 
      },
      { 
        answer: 'Kayne', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'league of legends',
    question: 'Which champion is known as the Tiny Master of Evil?',
    answers: [
      { 
        answer: 'Teemo', 
        isAnswer: false
      },
      { 
        answer: 'Fizz', 
        isAnswer: false 
      },
      { 
        answer: 'Veigar', 
        isAnswer: true
      },
    ],
  },
  {
    category: 'league of legends',
    question: 'What is the ultimate ability of Zed called?',
    answers: [
      { 
        answer: 'Death Seal', 
        isAnswer: false
      },
      { 
        answer: 'Death Mark', 
        isAnswer: true
      },
      { 
        answer: 'Death Wish', 
        isAnswer: false
      },
    ],
  },
  {
    category: 'league of legends',
    question: 'Who is known as the Hand of Noxus?',
    answers: [
      { 
        answer: 'Riven', 
        isAnswer: false
      },
      { 
        answer: 'Katarina', 
        isAnswer: false 
      },
      { 
        answer: 'Darius', 
        isAnswer: true
      },
    ],
  },
]


export default triviaQuestions