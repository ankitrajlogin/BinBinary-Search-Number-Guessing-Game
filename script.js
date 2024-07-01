
let number ; 
let start_value ; 
let end_value ; 
let previous_guess = "" ; 
let remaining_guess = 10 ; 

let startRange = document.getElementById('range-start')
let endRange = document.getElementById('range-end')
let start = document.getElementById('start') ; 
let restart = document.getElementById('restart') ; 
let button = document.getElementById('submit-button') ; 
let check = document.getElementById('accuracy-check') ; 
let previous = document.getElementById('previous_value') ;
let guess_remain = document.getElementById('guesses-remaining') ; 
let inputValue = document.getElementById('input') ;

let guessheading = document.getElementById('guess-heading')


button.disabled = true ; 
restart.disabled = true ; 
inputValue.disabled = true ; 

start.addEventListener('click' , function(){
    if(start.innerText == 'Start Game'){
        // console.log(`value is ${startRange.value} , endRange.value`)
        if (isNaN(startRange.value) || isNaN(endRange.value) || startRange.value.trim() == '' || endRange.value.trim() == '') {
            guessheading.innerText = 'Invalid Range. Enter Correct Range';
        }
        else{
            start_value = parseInt(startRange.value) ; 
            end_value = parseInt(endRange.value) ; 

            if(start_value > end_value){
                guessheading.innerText = "Start Value Can not be greater than End Value" ; 
            }
            else{

                start.innerHTML = 'Again Enter Range' ;
                button.disabled = false ; 
                restart.disabled = false ; 
                inputValue.disabled = false ;   

                // console.log(start_value , end_value) ;
                let rand_value = Math.random() ;  
                number =  Math.floor(rand_value*(end_value-start_value+1)) + start_value ; 
                console.log(`Correct answer is ${number}`) ; 
                
                let remain = Math.ceil((Math.log(end_value-start_value+1)/Math.log(2))) ; 
                guess_remain.innerText = `${remain}`

                startRange.disabled = true ; 
                endRange.disabled = true ;
                guessheading.innerText = `Guess The Number Between ${start_value} and ${end_value}` 
            }   
        }

        
        
    }
    else{
        start.innerText = 'Start Game' ;
        button.disabled = true ; 
        restart.disabled = true ; 
        inputValue.disabled = true ; 
        startRange.disabled = false ; 
        endRange.disabled = false ;

        guess_remain.innerText = 'Not Available' ; 
        guessheading.innerText = 'First Enter the Range of Number' ; 
        check.innerHTML = "Here, We show your accuracy" ;
        
    }
    
    previous.innerText = "" ; 
    startRange.value = '' ;
    endRange.value = '' ;

    
    
})

restart.addEventListener('click' , function(){
    previous.innerText = "" ; 
    check.innerHTML = "Here, We show your accuracy" ;
    inputValue.value = '' ; 
    guess_remain.innerHTML = `${Math.ceil((Math.log(end_value-start_value)/Math.log(2)))}` ;
    number = Math.floor(Math.random() * 100) + 1
    console.log(`Correct number is ${number}`) ; 
})





button.addEventListener('click' , function(){
    let inputValue = document.getElementById('input') ;  
    validate(inputValue.value) ; 
    inputValue.value = '' ;
    

});

function validate(inputValue){
    if(inputValue < start_value || inputValue > end_value || inputValue === "" || isNaN(inputValue)){
        check.innerHTML = `Enter Number Between ${start_value} to ${end_value}`; 
    }
    else{
        checkingValue(inputValue) ; 
    }
}

function checkingValue(inputValue){
    let guess_remain_val = guess_remain.innerText ; 
    let val = parseInt(guess_remain_val) ;
    if(number == inputValue){
        check.innerHTML = "Your Guess is correct"; 
        button.disabled = true ; 
        inputValue.disabled = true ; 

    }
    else if(number > inputValue){
        check.innerHTML = "Your Guess is smaller than actual"; 
        if(val == 1){
            GameEnd()
        }
    }
    else{
        check.innerHTML = "Your Guess is larger than actual"; 
        if(val == 1){
            GameEnd()
        }

    }

    previousUpdater(inputValue) ; 
    remainingCountUpdater() ; 
}

function previousUpdater(inputValue){
    if(previous.innerText == ""){
        previous.append(`${inputValue}`) ; 
    }
    else{
        previous.append(`, ${inputValue}`) ;
    }
    
}

function remainingCountUpdater(){
    let guess_remain_val = guess_remain.innerText ; 
    let val = parseInt(guess_remain_val) ;
    console.log
    val-- ; 
    guess_remain.innerText = `${val}` ; 

    
}

function GameEnd(){
    check.innerHTML = `Your Attempt is Over. Correct Answer : ${number}`;
    inputValue.disabled = true ; 
    button.disabled = true ; 
}
