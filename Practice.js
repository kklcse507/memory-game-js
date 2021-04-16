document.addEventListener('DOMContentLoaded',()=>{
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
        }
    ]
var play_button = document.getElementById('playagain')
play_button.addEventListener('click',PlayAgain)
    cardArray.sort(()=>0.5-Math.random())
    var board = document.querySelector('.grid')

    var cardsChosen =[]
    var cardsChosenIds =[]
    var cardsWon=[]

    function PlayAgain(){
       location.reload()
    }
    function ShowBoard(){
     
     
        for(let i=0;i<cardArray.length;i++){
            var card = document.createElement('img')
            card.setAttribute('data-id',i)
            card.setAttribute('src','images/design.png')
            card.addEventListener('click',flipCard)
            board.appendChild(card)

        }
    }
    function flipCard(){
       
        if(this.getAttribute('src')!='images/blank.png')
        {
        var id = this.getAttribute('data-id')
        this.setAttribute('src',cardArray[id].img)
        
        if(cardsChosenIds && cardsChosenIds[0]!==id)
        {
            cardsChosen.push(cardArray[id].name)
            cardsChosenIds.push(id)
        if(cardsChosen.length===2){
           
           setTimeout( checkMatch,500)
            
        }
    }
    else{
        alert("please choose proper card")
    }
}
    }
    function checkMatch(){
        var cards = document.querySelectorAll('img')
        var resultDisplay = document.getElementById('result')
        if(cardsChosen[0]==cardsChosen[1])
        {
            alert("matching")
            alert(cardsChosenIds[0])
          cards[cardsChosenIds[0]].setAttribute('src','images/blank.png')
          cards[cardsChosenIds[1]].setAttribute('src','images/blank.png')
          cardsWon.push(cardsChosen)
        }
        else{
            alert("not matching")
            cards[cardsChosenIds[0]].setAttribute('src','images/design.png')
            cards[cardsChosenIds[1]].setAttribute('src','images/design.png')
        }
        cardsChosen=[]
        cardsChosenIds=[]

        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent ="Congratulations you found them all!!!"
        }
        else{
            resultDisplay.textContent ="you found "+ cardsWon.length+" matches out of "+cardArray.length/2
        
        }
    }
    ShowBoard()
})

