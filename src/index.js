import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'fries',
      img: './assets/images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: './assets/images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: './assets/images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: './assets/images/pizza.png'
    },
    {
      name: 'milkshake',
      img: './assets/images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: './assets/images/hotdog.png'
    },
    {
      name: 'fries',
      img: './assets/images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: './assets/images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: './assets/images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: './assets/images/pizza.png'
    },
    {
      name: 'milkshake',
      img: './assets/images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: './assets/images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId =[];
  let cardsWon =[];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src','./assets/images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }


// check cards
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', './assets/images/blank.png')
      cards[optionTwoId].setAttribute('src', './assets/images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', './assets/images/white.png')
      cards[optionTwoId].setAttribute('src', './assets/images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', './assets/images/blank.png')
      cards[optionTwoId].setAttribute('src', './assets/images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }
  // flip card
  function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }
  createBoard();
});

