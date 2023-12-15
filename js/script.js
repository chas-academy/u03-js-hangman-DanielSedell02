const WORDS = ['banana', 'apple', 'watermelon', 'honeydew', 'orange', 'pineapple']
let answer;
let wordState;
let num;

const createButton = () => {
    const start = 'a'
    const end = 'z'
    for (let i = start.charCodeAt(); i <= end.charCodeAt(); i++) {
        let btn = document.createElement('button')
 $(btn).addClass('btn btn-primary m-1')
        $(btn).one('click',selectedButton) // only call function once
        $(btn).text(String.fromCharCode(i)) // convert from charcode to letter, then insert into button
        $('#button-container').append(btn)
    }
}

const selectedButton = (e) => {
    $(e.target).addClass('btn-secondary') // change the button background color to gray 
    let guessLetter = $(e.target).text() // get the text of button selected
    // loop through each letter in answer
    for (let i = 0; i < answer.length; i++){
        // if the selected letter is correct
        if ( guessLetter === answer[i] ){
            let correctEle = $('#word-container .btn-warning')[i] // get the correct letter button element with index
            $(correctEle).text(guessLetter) 
        }
    }
   