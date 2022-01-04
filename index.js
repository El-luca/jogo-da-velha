const $buttonStone1 = document.querySelector('.button-stone-1')
const $buttonpaper1 = document.querySelector('.button-paper-1')
const $buttonscissors1 = document.querySelector('.button-scissors-1')

const $buttonStone2 = document.querySelector('.button-stone-2')
const $buttonpaper2 = document.querySelector('.button-paper-2')
const $buttonscissors2 = document.querySelector('.button-scissors-2')

const $buttonReset = document.querySelector('.button-reset')

const $fieldPlayer1 = document.querySelector('.field-1')
const $fieldPlayer2 = document.querySelector('.field-2')

const $winnerTitle = document.querySelector('.winner-title')
const $buttonstart = document.querySelector('.button-start')

const $soreboard1 = document.querySelector('.scorebord-1')
const $soreboard2 = document.querySelector('.scorebord-2')

let movePlayer1=''
let movePlayer2=''
let winner = null
let scorePlayer1 = 0
let scorePlayer2 = 0
let gameStart = false

function veryfyWinner(){
    if (movePlayer1 == 'stone' && movePlayer2 == 'paper'){
        winner = 2
     } else if (movePlayer1 == 'stone' && movePlayer2 =='scissors'){
        winner = 1
     } else if(movePlayer1 == 'paper' && movePlayer2 =='stone'){
        winner = 1
     } else if(movePlayer1 == 'paper' && movePlayer2 == 'scissors'){
        winner = 2
     } else if( movePlayer1 == 'scissors' && movePlayer2 == 'stone'){
        winner = 2
     } else if(movePlayer1 == 'scissors' && movePlayer2 == 'paper'){
        winner = 1
     } else if(movePlayer1 == movePlayer2){
        winner = 0
     }
    }

    function printWinnerName(winner){
     if (winner == 1){
         $winnerTitle.innerHTML = 'Jogador 1 ganhou'
     }else if (winner == 2){
         $winnerTitle.innerHTML = 'Jogador 2 ganhou'
     }else{
         $winnerTitle.innerHTML = 'Empatou'
     }
    }

    function givePoint(winner){
if (winner == 1){
    scorePlayer1 = scorePlayer1 + 1
    } else if (winner == 2){
    scorePlayer2 = scorePlayer2 + 1
    }
}

function printPoint(){
$soreboard1.innerHTML = scorePlayer1
$soreboard2.innerHTML = scorePlayer2
}

function resetBords(){
    $fieldPlayer1.innerHTML = ''
    $fieldPlayer2.innerHTML = ''
}

function resetVariable(){
    movePlayer1=''
    movePlayer2=''
    winner = null
}

function resetScore(){
    $soreboard1.innerHTML = '0'
    $soreboard2.innerHTML = '0'
}

function resetWinnerTitle(){
    $winnerTitle.innerHTML = 'Vencedor'
}

function resetScorePlayerVariable(){
    movePlayer1 = '0'
    movePlayer2 = '0'
    scorePlayer1 = 0
    scorePlayer2 = 0

}

function resetAll(){
    resetVariable()
    resetBords()
    resetScore()
    resetWinnerTitle()
    resetScorePlayerVariable()
}

$buttonStone1.addEventListener('click', function(){
    if (gameStart == false) return
   $fieldPlayer1.innerHTML= '<img class="image-move" src="./images/stone.png" img>'
   movePlayer1 = 'stone'
   veryfyWinner()
   if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        setTimeout(resetBords, 1000)
        resetVariable()
         } 
})
    
$buttonStone2.addEventListener('click', function(){
    if (gameStart == false) return
    $fieldPlayer2.innerHTML= '<img class="image-move" src="./images/stone.png" img>'
    movePlayer2 = 'stone'
    veryfyWinner()
    if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        setTimeout(resetBords, 1000)
        resetVariable()
         } 
})

$buttonpaper1.addEventListener('click', function(){
    if (gameStart == false) return
    $fieldPlayer1.innerHTML= '<img class="image-move" src="./images/paper.png" img>'
    movePlayer1 = 'paper'
    veryfyWinner()
    if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        setTimeout(resetBords, 1000)
        resetVariable()
         } 
})

$buttonpaper2.addEventListener('click', function(){
    if (gameStart == false) return
    $fieldPlayer2.innerHTML= '<img class="image-move" src="./images/paper.png" img>'
    movePlayer2 = 'paper'
    veryfyWinner()
    if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        setTimeout(resetBords, 1000)
        resetVariable()
         } 
})

$buttonscissors1.addEventListener('click', function(){
    if (gameStart == false) return
    $fieldPlayer1.innerHTML= '<img class="image-move" src="./images/scissors.png" img>'
    movePlayer1 = 'scissors'
    veryfyWinner()
    if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        setTimeout(resetBords, 1000)
        resetVariable()
         } 
})
     
$buttonscissors2.addEventListener('click', function(){
    if (gameStart == false) return
    $fieldPlayer2.innerHTML= '<img class="image-move" src="./images/scissors.png" img>'
    movePlayer2 = 'scissors'
    veryfyWinner()
    if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        setTimeout(resetBords, 1000)
        resetVariable()
    } 
})

$buttonReset.addEventListener('click', resetAll)

$buttonstart.addEventListener('click', function(){
    if (gameStart == false){
        gameStart = true
        $buttonstart.classList.add('button-active')
        $buttonstart.innerHTML = 'Parar'
    }else{
        gameStart = false
        }
        $buttonstart.classList.remove('button-active')
        $buttonstart.innerHTML = 'iniciar'
})


/*nota para o futuro nao aparecer a imagem enquanto o oponente não clicar tbm ....
não alterar em varrrios clics ( ex. clicou na pedra nao pode alterrar)   */