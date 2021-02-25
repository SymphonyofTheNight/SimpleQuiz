const quizArrayObjects = [
    {
        question: "Who is the worlds first programmer?",
        choice1: "Ada Lovelace",
        choice2: "Ada Wong",
        choice3: "William Shakespear",
        choice4: "Pythagoras",
        answer: "Ada Lovelace",
    },
    {
        question: "Father of Mathematics?",
        choice1: "Albert Einstein",
        choice2: "Nikola Tesla",
        choice3: "Archimedes",
        choice4: "Pythagoras",
        answer: "Archimedes", 
    },
    {
        question: "World's First Computer.",
        choice1: "ENIAC",
        choice2: "Macintosh 128K",
        choice3: "Altair 8800",
        choice4: "None of the above",
        answer: "ENIAC", 
    },
    {
        question: "Fastest Man Alive.",
        choice1: "Asafa Powell",
        choice2: "Tyson Gay",
        choice3: "Usain Bolt",
        choice4: "Yohan Blake",
        answer: "Usain Bolt", 
    },
    {
        question: "World's Tallest Man.",
        choice1: "Sultan Kösen",
        choice2: "Édouard Beaupré",
        choice3: "Väinö Myllyrinne",
        choice4: "Leonid Stadnyk",
        answer: "Leonid Stadnyk", 
    },
    {
        question: "Most Venomous Spider in The World.",
        choice1: "Brazilian Wandering Spiders",
        choice2: "Yellow sac spider",
        choice3: "Sydney Funnel-Web Spider",
        choice4: "Black Widow Spider",
        answer: "Sydney Funnel-Web Spider", 
    },
     {
        question: "Method adds/removes items to/from an array",
        choice1: "Replace()",
        choice2: "Splice()",
        choice3: "Slice()",
        choice4: "Sort()",
        answer: "Splice()", 
    },
    {
        question: "Returns an Array object from any object with a length property",
        choice1: "Array.return()",
        choice2: "Array.from()",
        choice3: "Array.to()",
        choice4: "Array.Sort()",
        answer: "Array.from()", 
    },
];

const question = document.querySelector('.question');
const choices = Array.from(document.getElementsByClassName("choices-txt")); /// set into array
console.log(choices);
const startTxt = document.querySelector('.startTxt');
startTxt.innerText = "START";
const StartGame = document.querySelector('.startGamebtn');

StartGame.addEventListener('click', Start);

let currentQuestion = [{}];
let Quiz = [];
let score = 0;
let WrongCounter = 0;
let WrongMax = 3;
let WinningScore = 3;

function Start(){

    hideAndunhide();

    Quiz = [...quizArrayObjects];
    score = 0;

    setNxtQuestion();

}

function hideAndunhide(){

    StartGame.classList.remove('startGamebtn');
    StartGame.classList.add('startGame-hide');

    const centerDiv = document.querySelector('.center-div-hide');
    centerDiv.classList.remove('center-div-hide');
    centerDiv.classList.add('center-div');

}

function setNxtQuestion(){

    const randomIndex = [~~(Math.random() * Quiz.length)];

    currentQuestion = Quiz[randomIndex]; //// proper way for current question 
    question.innerText = currentQuestion.question; 

    choices.forEach( choice => {
        const getdataNumber = choice.dataset.number; /// taking all of the data number on choices;
        choice.innerText = currentQuestion['choice' + getdataNumber];  /// 'choice' reference for 'choice' and getdataNumber to 1 = choice1;
    })

    Quiz.splice(currentQuestion, 1);

};

choices.forEach( choice => {

    choice.addEventListener('click', (e) => {

        const getInnetTxt = choice.innerText;
        const target = e.target;

        if(target.matches("span")){

            if(getInnetTxt === currentQuestion.answer){
                alert("Correct!");
                setNxtQuestion();
                score += 1;
                if(score == WinningScore){
                    gameWin();
                }
            }else{
                alert("Wrong!" + " The answer is " + currentQuestion.answer );
                setNxtQuestion();
                WrongCounter += 1;
                if(WrongCounter == WrongMax){
                    gameLose();
                }
            }
        }
    })
})

function gameWin(){

    const starttxt = document.querySelector('.startTxt');
    starttxt.classList.remove('startTxt');
    starttxt.classList.add('startxt-hide');

    const mainDiv = document.querySelector('.container');
    mainDiv.classList.remove('container');
    mainDiv.classList.add('container-hide');

    const win = document.querySelector('.win-hide');
    win.classList.remove('win-hide');
    win.classList.add('win');

}

function gameLose(){

    const starttxt = document.querySelector('.startTxt');
    starttxt.classList.remove('startTxt');
    starttxt.classList.add('startxt-hide');

    const mainDiv = document.querySelector('.container');
    mainDiv.classList.remove('container');
    mainDiv.classList.add('container-hide');

    const lose = document.querySelector('.lose-hide');
    lose.classList.remove('lose-hide');
    lose.classList.add('lose');

}
