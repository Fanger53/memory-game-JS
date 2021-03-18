document.addEventListener('DOMContentLoaded',()=> {
  const cardArray = [ 
    {
      name: 'fries',
      image: '../images/fries.png'
    },
    {
      name: 'fries',
      image: '../images/fries.png'
    },
    {
      name: 'cheeseburger',
      image: '../images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      image: '../images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      image: '../images/hotdog.png'
    },
    {
      name: 'hotdog',
      image: '../images/hotdog.png'
    },
    {
      name: 'ice-cream',
      image: '../images/ice-cream.png'
    },{
      name: 'ice-cream',
      image: '../images/ice-cream.png'
    },
    {
      name: 'milkshake',
      image: '../images/milkshake.png'
    },{
      name: 'milkshake',
      image: '../images/milkshake.png'
    },
    {
      name: 'pizza',
      image: '../images/pizza.png'
    },{
      name: 'pizza',
      image: '../images/pizza.png'
    },
    {
      name: 'white',
      image: '../images/white.png'
    },{
      name: 'white',
      image: '../images/white.png'
    },
  ]
})

// create board

const grid = document.querySelector('.grid');

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img')
    
  }
}