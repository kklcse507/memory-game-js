document.addEventListener('DOMContentLoaded',()=>{
    // card options
    const cardArray=[
        {
            name:'burger',
            img:"images/burger.png"
        },
        {
            name:'burger',
            img:"images/burger.png"
        },
        {
            name:'carrots',
            img:"images/carrots.png"
        },
        {
            name:'carrots',
            img:"images/carrots.png"
        },
        {
            name:'chat',
            img:"images/chat.png"
        },
        {
            name:'chat',
            img:"images/chat.png"
        },
        {
            name:'salad',
            img:"images/salad.png"
        },
        {
            name:'salad',
            img:"images/salad.png"
        },
        {
            name:'spices',
            img:"images/spices.png"
        },
        {
            name:'spices',
            img:"images/spices.png"
        },
        {
            name:'samosa',
            img:"images/samosa.png"
        },
        {
            name:'samosa',
            img:"images/samosa.png"
        },
      

    
    ]
    const resultDisplay = document.querySelector('#result')
    cardArray.sort(()=>0.5-Math.random())
var cardChoosen=[]
var cardsChoosenId=[]
var cardsWon =[]
  const grid = document.querySelector('.grid')
  function createBoard(){
      for (let i=0;i<cardArray.length;i++){
          var card = document.createElement('img')
          card.setAttribute('src','images/design.png')
          card.setAttribute('data-id',i)
          card.addEventListener('click',flipCard)
         grid.appendChild(card)
      }
  }

  function checkForMatch(){
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChoosenId[0]
      const optionTwoId = cardsChoosenId[1]
      if(cardChoosen[0]===cardChoosen[1]){
          alert('you found  match')
          cards[optionOneId].setAttribute('src','images/blank.png')
          cards[optionTwoId].setAttribute('src','images/blank.png')
          cardsWon.push(cardChoosen)
      }
      else{
          cards[optionOneId].setAttribute('src','images/blank.png')
          cards[optionTwoId].setAttribute('src','images/blank.png')
      }
      cardChoosen =[]
      cardsChoosenId =[]
resultDisplay.textContent = cardsWon.length
 if(cardsWon.length===cardArray.length/2){
     resultDisplay.textContent ="Congratulations! you found them all"
 }
 else{
    resultDisplay.textContent ="you just found "+cardsWon.length +" matches"
 }
  }


function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardChoosen.push(cardArray[cardId].name)
    cardsChoosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChoosen.length ===2){
       
setTimeout(checkForMatch,500)

    }
}

createBoard()

})