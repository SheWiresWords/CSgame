let currentQuestion1 = 0;
let score1 = 0;
let currentQuestion2 = 0;
let score2 = 0;
let currentQuestion3 = 0;
let score3 = 0;
let currentQuestion4 = 0;
let score4 = 0;

const questions1 = [
    {
        question: "<code> ______.out.println(3.2); </code>",
        correct: "System",
        explanation: "The correct answer is System (with the “S” capitalized!)",
    },
    {
        question: "<code>System.out.print(5)_</code>",
        correct:";",
        explanation: "The correct answer is ;",
    },
    {
        question: "<code>i=i__; //this should ads 1 to the varable using the post-increment operator</code>",
        correct: "++",
        explanation: "The correct answer is ++",
    },
    {
        question: "<code>_____ candyPrice = 3.5;</code>",
        correct: "double",
        explanation: "The correct answer is double"
    },
    {
        question: "<code>_____ name = \“Hello!\” //this should properly create a variable called name;</code>",
        correct: "String",
        explanation: "The correct answer is String"
    },
    {
        question: "<code>____ wholeNumber = 3;</code>",
        correct: "int",
        explanation: "The correct answer is int"
    },
];

const questions2 = [
    {
        question: "<code> boolean checksIfEqual = num1 ___ num 2; //num1 and num2 are properly created int variables, use a comparision operator </code>",
        correct: "==",
        explanation: "The correct answer is ==",
    },
    {
        question: "<code> ___(int i=0; i<10; i++) //for loop header </code>",
        correct:"for",
        explanation: "The correct answer is for",
    },
    {
        question: "<code> if (x = 3) <br> { <br> x+=1; <br> } ____ <br> {\nx+=2;\n} </code>",
        correct: "else",
        explanation: "The correct answer is else",
    },
    {
        question: "<code> ___(x>3) //should run the loop as long as x>3 <br> { <br> x=x-2; <br>} </code>",
        correct: "while",
        explanation: "The correct answer is while"
    },
    {
        question: "<code> ___(int i=0; i>2; i++) //for loop header</code>",
        correct: "for",
        explanation: "The correct answer is for"
    },
    {
        question: "<code>for( ___=2; i<5; i++)  //for loop header</code>",
        correct: "int i",
        explanation: "The correct answer is int i"
    },
];

const questions3 = [
    {
        question: "<code>_____ int addsThree(int y) //is a method header but is not for a public method <br> { <br> return s+3;   <br>} </code>",
        correct: "private",
        explanation: "The correct answer is private",
    },
    {
        question: "<code>public ___ truncate(double num) //method header to truncate a decimal point off of num and return a whole number without a decimal point</code>",
        correct:"int",
        explanation: "The correct answer is int",
    },
    {
        question: "<code>public double addsABit(double x)<br>___<br>return x+1;<br> }</code>",
        correct: "{",
        explanation: "The correct answer is {",
    },
    {
        question: "<code>public void addsLetterToWord(____ s) //method header that takes in a word as input and adds a letter to it <br>{<br>s+=”Hi”;<br>}</code>",
        correct: "String",
        explanation: "The correct answer is String"
    },
    {
        question: "<code>_____ int addsThree(int y) //this is a method header for a method that is NOT public <br> { <br> return s+3;<br>}</code>",
        correct: "private",
        explanation: "The correct answer is private"
    },
    {
        question: "<code>public _____ returnsANumber(double x) <br>{<br>return x+1.9;<br>}</code>",
        correct: "double",
        explanation: "The correct answer is double"
    },
];

const questions4 = [
    {
        question: "<code>int lengthOfHiArrayList = Hi._______ //prints the number of elements in an ArrayList</code>",
        correct: "size()",
        explanation: "The correct answer is size()",
    },
    {
        question: "<code>int[][] numbers = ___int [5][3];</code>",
        correct:"new",
        explanation: "The correct answer is new",
    },
    {
        question: "<code>int[] arrary = new int[7]; \n print(____); //prints the first value in the array</code>",
        correct: "array[0]",
        explanation: "The correct answer is array[0]",
    },
    {
        question: "<code>Scanner newScanner = new Scanner(____ f);;  //takes input from a file called f</code>",
        correct: "File",
        explanation: "The correct answer is File"
    },
    {
        question: "<code>Scanner newScan = new Scanner(File f); <br> int firstNumInFile = newScan.____; //should assign the first int in File f to the variable</code>",
        correct: "nextInt()",
        explanation: "The correct answer is nextInt()"
    },
    {
        question: "<code>int[] numbers = {1_ 2};</code>",
        correct: ",",
        explanation: "The correct answer is ,"
    },
];

function showQuestion(unit, index) {
    const questionSets = [questions1, questions2, questions3, questions4];
    const displayIds = ["show1", "show2", "show3", "show4"];
    document.getElementById(displayIds[unit - 1]).innerHTML = questionSets[unit - 1][index].question;
}

function handleAnswer(unit, currentIndex, inputClass, questions, resetFn) {
    let ans = document.querySelector(inputClass).value;
    let result = document.getElementById("result" + unit);
    let scoreVar;
    switch(unit){
        case 1: scoreVar = score1; break;
        case 2: scoreVar = score2; break;
        case 3: scoreVar = score3; break;
        case 4: scoreVar = score4; break;
    }
    if (ans === questions[currentIndex].correct) {
        scoreVar++;
        result.innerHTML = "Correct! " + questions[currentIndex].explanation+".";
    } else {
        result.innerHTML = "Incorrect. " + questions[currentIndex].explanation+".";
    }
    switch(unit){
        case 1: score1 = scoreVar; break;
        case 2: score2 = scoreVar; break;
        case 3: score3 = scoreVar; break;
        case 4: score4 = scoreVar; break;
    }
    resetFn();
}

function resetAnswer1() {
    document.querySelector(".ansinput1").value = "";
}
function resetAnswer2() {
    document.querySelector(".ansinput2").value = "";
}
function resetAnswer3() {
    document.querySelector(".ansinput3").value = "";
}
function resetAnswer4() {
    document.querySelector(".ansinput4").value = "";
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.fitbcontainer').forEach((container, unitIndex) => {
        const buttons = container.querySelectorAll('.fitbbutton');
        buttons.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                switch (unitIndex) {
                    case 0: currentQuestion1 = idx; showQuestion(1, idx); break;
                    case 1: currentQuestion2 = idx; showQuestion(2, idx); break;
                    case 2: currentQuestion3 = idx; showQuestion(3, idx); break;
                    case 3: currentQuestion4 = idx; showQuestion(4, idx); break;
                }
            });
        });
    });

    document.querySelector('.fitbbutton1')?.addEventListener('click', () => {
        handleAnswer(1, currentQuestion1, '.ansinput1', questions1, resetAnswer1);
    });
    document.querySelector('.fitbbutton2')?.addEventListener('click', () => {
        handleAnswer(2, currentQuestion2, '.ansinput2', questions2, resetAnswer2);
    });
    document.querySelector('.fitbbutton3')?.addEventListener('click', () => {
        handleAnswer(3, currentQuestion3, '.ansinput3', questions3, resetAnswer3);
    });
    document.querySelector('.fitbbutton4')?.addEventListener('click', () => {
        handleAnswer(4, currentQuestion4, '.ansinput4', questions4, resetAnswer4);
    });

    showQuestion(1, 0);
    showQuestion(2, 0);
    showQuestion(3, 0);
    showQuestion(4, 0);
});



