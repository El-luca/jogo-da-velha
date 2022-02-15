const $switcherBot = document.querySelector('.switcher-bot')
const $batleField0 = document.querySelector('.batle-field-0')
const $batleField1 = document.querySelector('.batle-field-1')
const $batleField2 = document.querySelector('.batle-field-2')
const $batleField3 = document.querySelector('.batle-field-3')
const $batleField4 = document.querySelector('.batle-field-4')
const $batleField5 = document.querySelector('.batle-field-5')
const $batleField6 = document.querySelector('.batle-field-6')
const $batleField7 = document.querySelector('.batle-field-7')
const $batleField8 = document.querySelector('.batle-field-8')

const line1 = [$batleField0, $batleField1, $batleField2]
const line2 = [$batleField3, $batleField4, $batleField5]
const line3 = [$batleField6, $batleField7, $batleField8]

const collumn1 = [$batleField0, $batleField3, $batleField6]
const collumn2 = [$batleField1, $batleField4, $batleField7]
const collumn3 = [$batleField2, $batleField5, $batleField8]

const diagonal1= [$batleField0, $batleField4, $batleField8]
const diagonal2 = [$batleField2, $batleField4, $batleField6]

const linesToVerify = [line1, line2, line3, collumn1, collumn2, collumn3, diagonal1, diagonal2]

let currentMove = 'X'
let winner = ''

function togglemoveVar() {
    if(currentMove == 'O'){
        currentMove = 'X'
    } else{
        currentMove = 'O'
    }
}

function printMove($batleField){
    $batleField.textContent = currentMove
}

function showWinnerOnBoard(boardItemList){
        for (const lineItem of boardItemList) {
            lineItem.classList.add('won')
            setTimeout(function(){
                lineItem.classList.remove('won')
            }, 1000)
        }
    }

function verifyWinner(){
    for (const line of linesToVerify){
        if (line[0].textContent != '' && line[0].textContent == line[1].textContent && line[1].textContent == line[2].textContent){
            winner = currentMove
            showWinnerOnBoard(line)
        }   
    }
}

$batleField0.addEventListener('click',function(){
    if($batleField0.textContent != '') return
    printMove($batleField0)  
    verifyWinner()  
    togglemoveVar()
})
$batleField1.addEventListener('click',function(){
    if($batleField1.textContent != '') return
    printMove($batleField1)  
    verifyWinner()
    togglemoveVar()
})
$batleField2.addEventListener('click',function(){
    if($batleField2.textContent != '') return
    printMove($batleField2)  
    verifyWinner()
    togglemoveVar()
})
$batleField3.addEventListener('click',function(){
    if($batleField3.textContent != '') return
    printMove($batleField3)  
    verifyWinner()
    togglemoveVar()
})
$batleField4.addEventListener('click',function(){
    if($batleField4.textContent != '') return
    printMove($batleField4)  
    verifyWinner()
    togglemoveVar()
})
$batleField5.addEventListener('click',function(){
    if($batleField5.textContent != '') return
    printMove($batleField5)  
    verifyWinner()
    togglemoveVar()
})
$batleField6.addEventListener('click',function(){
    if($batleField6.textContent != '') return
    printMove($batleField6)  
    verifyWinner()
    togglemoveVar()
})
$batleField7.addEventListener('click',function(){
    if($batleField7.textContent != '') return
    printMove($batleField7)  
    verifyWinner()
    togglemoveVar()
})
$batleField8.addEventListener('click',function(){
    if($batleField8.textContent != '') return
    printMove($batleField8)  
    verifyWinner()
    togglemoveVar()
})

$switcherBot.addEventListener('click', function(){
    $switcherBot.classList.toggle('active')
    togglemoveVar()
})