let currentQuestion1 = 0, score1 = 0, a1 = "";
let currentQuestion2 = 0, score2 = 0, a2 = "";
let currentQuestion3 = 0, score3 = 0, a3 = "";
let currentQuestion4 = 0, score4 = 0, a4 = "";
let currentQuestion5 = 0, score5 = 0, a5 = "";

const questions1 = [
    { question: "<code> A ______ refers to a collection of program statements that can run a certain task on a computer. </code>", correct: "program", explanation: "The correct answer is program"  },
    { question: "<code> _____ helps bring diverse perspectives together and avoid biases. </code> ", correct: "Collaboration", explanation: "The correct answer is Collaboration" },
    { question: "<code> _____ refers to data sent to a device by a program.", correct: "output</code> ", explanation: "The correct answer is Output" },
    { question: "<code> The ___ phase in development refers to the process of outlining how to accomplish the goal.</code> ", correct: "design", explanation: "The correct answer is design" },
    { question: "<code> A _____ error makes a program behave in a way that it was not intended to behave.</code> ", correct: "logic", explanation: "The correct answer is logic" }
];

const questions2 = [
    { question: "<code> _______ refers to data about data, such as the time a picture was taken.</code> ", correct: "Metadata", explanation: "The correct answer is Metadata" },
    { question: "<code> When taking up storage/space is the main priority, it is best to use a _____ data compression.</code> ", correct: "lossy", explanation: "The correct answer is lossy" },
    { question: "<code> The _______ number system (also referred to as a base 2 system) is a numeric system that only uses 0 and 1.</code> ", correct: "binary", explanation: "The correct answer is binary" },
    { question: "<code> ___ bits is equal to one byte.</code> ", correct: "8", explanation: "The correct answer is 8" },
    { question: "<code> A correlation between variables does not necessarily equate to a  ______ relationship.</code> ", correct: "casual", explanation: "The correct answer is casual" }
];

const questions3 = [
    { question: "<code> An _____ is a value inside a list that has an index.</code> ", correct: "element", explanation: "The correct answer is element" },
    { question: "<code> A ______ is an abstraction that can hold a value.</code> ", correct: "variable", explanation: "The correct answer is variable" },
    { question: "<code> An _____ is a set of instructions that are performed step by step in order to complete a task.</code> ", correct: "algorithim", explanation: "The correct answer is algorithim" },
    { question: "<code> 17 MOD 6 = ___ </code> ", correct: "5", explanation: "The correct answer is 5" },
    { question: "<code> In order to perform a proper binary search, the data must be ______.</code> ", correct: "sorted", explanation: "The correct answer is sorted" }
];

const questions4 = [
    { question: "<code> ______ is a type of computing that performs one step at a time.</code> ", correct: "Sequential computing", explanation: "The correct answer is Sequential computing" },
    { question: "<code> HTTP is used by the ___________. (Please capitalize each of the words in your answer) </code> ", correct: "World Wide Web", explanation: "The correct answer is World Wide Web" },
    { question: "<code> The chunks of information in data streams are enclosed in __________.</code> ", correct: "packets", explanation: "The correct answer is packets" },
    { question: "<code> _______ is the concept of having extra components that can be used if parts of a system fail.</code> ", correct: "Redundancy", explanation: "The correct answer is Redundancy" },
    { question: "<code> Bandwidth is the maximum amount of data that can be sent in a certain amount of time for a ________.</code>  ", correct: "computer network", explanation: "The correct answer is computer network" }
];

const questions5 = [
    { question: "<code> _______ refers to the practice of gathering a large amount of data using input from people via the Internet.</code> ", correct: "Crowdsourcing", explanation: "The correct answer is Crowdsourcing" },
    { question: "<code> The term _______ refers to programs that are available for free and can be redistributed and modified.</code> ", correct: "open source", explanation: "The correct answer is open source" },
    { question: "<code> ______ refers to a malicious tactic used to trick people into providing personal information.</code> ", correct: "Phishing", explanation: "The correct answer is Phishing" },
    { question: "<code> ________ is the process of logging keystrokes to get access to passwords and other information fraudulently.</code> ", correct: "Keylogging", explanation: "The correct answer is Keylogging" },
    { question: "<code> ______ is a public copyright license that allows work to be freely distributed.</code> ", correct: "Creative Commons", explanation: "The correct answer is Creative Commons" }
];

function showQuestion(unit, index) {
    const questionSets = [questions1, questions2, questions3, questions4, questions5];
    const displayIds = ["show1P", "show2P", "show3P", "show4P", "show5P"];
    document.getElementById(displayIds[unit - 1]).innerHTML = questionSets[unit - 1][index].question;
}

function handleAnswer(unit, currentIndex, score, inputClass, questions, resetFn) {
    let ans = document.querySelector(inputClass).value;
    let result = document.getElementById("result" + unit);
    if (ans === questions[currentIndex].correct) {
        score++;
        result.innerHTML="Correct! " + questions[currentIndex].explanation+".";
    } else {
        result.innerHTML="Incorrect. " + questions[currentIndex].explanation+".";
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
function resetAnswer5() {
    document.querySelector(".ansinput5").value = "";
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
                    case 4: currentQuestion5 = idx; showQuestion(5, idx); break;
                }
            });
        });
    });

    document.querySelector('.fitbbutton1')?.addEventListener('click', () => {
        handleAnswer(1, currentQuestion1, score1, '.ansinput1', questions1, resetAnswer1);
    });
    document.querySelector('.fitbbutton2')?.addEventListener('click', () => {
        handleAnswer(2, currentQuestion2, score2, '.ansinput2', questions2, resetAnswer2);
    });
    document.querySelector('.fitbbutton3')?.addEventListener('click', () => {
        handleAnswer(3, currentQuestion3, score3, '.ansinput3', questions3, resetAnswer3);
    });
    document.querySelector('.fitbbutton4')?.addEventListener('click', () => {
        handleAnswer(4, currentQuestion4, score4, '.ansinput4', questions4, resetAnswer4);
    });
    document.querySelector('.fitbbutton5')?.addEventListener('click', () => {
        handleAnswer(5, currentQuestion5, score5, '.ansinput5', questions5, resetAnswer5);
    });

    showQuestion(1, 0);
    showQuestion(2, 0);
    showQuestion(3, 0);
    showQuestion(4, 0);
    showQuestion(5, 0);
});

