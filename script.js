var index = 0
var ans = ''
var sec = 60;
var score = 0
let time
function start() {
    console.log('timer started')
    const timer = document.getElementById('timer')
    time = setInterval(() => {
        timer.innerHTML = sec + 'sec';
        sec--;
        if (sec < 0) {
            document.getElementById('timer').innerHTML = 0
            sec = 0
            done()
        }
    }, 1000)

    showQ()

    document.getElementsByClassName('description')[0].classList.toggle('none')
    document.getElementsByClassName('questions')[0].classList.toggle('none')
}

const questions = [
    // {
    //     questionText: "Commonly used data types DO NOT include:",
    //     options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    //     answer: "3. alerts",
    // },
    // {
    //     questionText: "Arrays in JavaScript can be used to store ______.",
    //     options: [
    //         "1. numbers and strings",
    //         "2. other arrays",
    //         "3. booleans",
    //         "4. all of the above",
    //     ],
    //     answer: "4. all of the above",
    // },
    // {
    //     questionText:
    //         "String values must be enclosed within _____ when being assigned to variables.",
    //     options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    //     answer: "3. quotes",
    // },
    // {
    //     questionText:
    //         "A very useful tool used during development and debugging for printing content to the debugger is:",
    //     options: [
    //         "1. JavaScript",
    //         "2. terminal/bash",
    //         "3. for loops",
    //         "4. console.log",
    //     ],
    //     answer: "4. console.log",
    // },
    // {
    //     questionText:
    //         "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    //     options: ["1. break", "2. stop", "3. halt", "4. exit"],
    //     answer: "1. break",
    // },
    {
        "questionText": "What is Saitama's superhero name?",
        "options": ["1. One-Punch Man", "2. Caped Baldy", "3. Strongest Hero", "4. Fist of Justice"],
        "answer": "2. Caped Baldy"
    },
    {
        "questionText": "What is Saitama's signature move?",
        "options": ["1. Serious Punch", "2. Super Kick", "3. Mega Slam", "4. Ultimate Strike"],
        "answer": "1. Serious Punch"
    },
    {
        "questionText": "What is Saitama's bald head a result of?",
        "options": ["1. Radiation exposure", "2. Genetic mutation", "3. Shaving accident", "4. Alopecia"],
        "answer": "3. Shaving accident"
    },
    {
        "questionText": "Who is Saitama's disciple?",
        "options": ["1. Genos", "2. Mumen Rider", "3. Speed-o'-Sound Sonic", "4. King"],
        "answer": "1. Genos"
    },
    {
        "questionText": "What is Saitama's catchphrase?",
        "options": ["1. I'm just a guy who's a hero for fun", "2. I will defeat you with one punch", "3. No one can match my power", "4. I'm the strongest there is"],
        "answer": "1. I'm just a guy who's a hero for fun"
    },
    {
        "questionText": "What is Saitama's favorite food?",
        "options": ["1. Ramen", "2. Curry", "3. Udon", "4. Crab"],
        "answer": "1. Ramen"
    },
    {
        "questionText": "What is the source of Saitama's incredible strength?",
        "options": ["1. Training regimen", "2. Superhero suit", "3. Special powers", "4. Genetic mutation"],
        "answer": "1. Training regimen"
    },
    {
        "questionText": "Who is Saitama's arch-nemesis?",
        "options": ["1. Boros", "2. Garou", "3. Deep Sea King", "4. Vaccine Man"],
        "answer": "2. Garou"
    },
    {
        "questionText": "What is Saitama's hobby?",
        "options": ["1. Video games", "2. Gardening", "3. Reading manga", "4. Collecting action figures"],
        "answer": "3. Reading manga"
    },
    {
        "questionText": "What is Saitama's weakness?",
        "options": ["1. Boredom", "2. Fear", "3. Kryptonite", "4. Invisibility"],
        "answer": "1. Boredom"
    },
    {
        "questionText": "Who is the author of the One-Punch Man manga?",
        "options": ["1. ONE", "2. Yusuke Murata", "3. Kazuki Takahashi", "4. Eiichiro Oda"],
        "answer": "2. Yusuke Murata"
    },
    {
        "questionText": "Which organization does Saitama join to become a hero?",
        "options": ["1. Hero Association", "2. Justice League", "3. Saitama Association", "4. Avengers"],
        "answer": "1. Hero Association"
    },
    {
        "questionText": "What is Saitama's initial motivation for becoming a hero?",
        "options": ["1. To earn money", "2. To gain popularity", "3. To save the world", "4. To find a worthy opponent"],
        "answer": "1. To earn money"
    },
    {
        "questionText": "What is the name of Saitama's bald cyborg disciple?",
        "options": ["1. Genos", "2. Silver Fang", "3. Bang", "4. Metal Knight"],
        "answer": "1. Genos"
    },
    {
        "questionText": "Which rank does Saitama hold in the Hero Association?",
        "options": ["1. Rank S", "2. Rank A", "3. Rank B", "4. Rank C"],
        "answer": "1. Rank S"
    }
];
function showQ() {
    if (!questions[index]) {
        sec += 1
        done()
        return
    }
    ans = ''
    document.getElementsByClassName('answer')[0].innerHTML = ''
    const qCard = document.getElementsByClassName('questionCard')[0].getElementsByTagName('button')
    for (var li of qCard) {
        li.disabled = false
    }
    const qInfo = questions[index]
    qCard[0].innerHTML = qInfo.questionText;
    var ind = 1;
    for (var obj of qInfo.options) {
        qCard[ind].innerHTML = obj;
        ind++;
    }

    ans = qInfo.answer;
    index++;
}
function checkAns(e) {
    console.log(e.innerHTML, 'called')
    const qCard = document.getElementsByClassName('questionCard')[0].getElementsByTagName('button')
    for (var li of qCard) {
        li.disabled = true
    }
    if (e.innerHTML == ans) {
        document.getElementsByClassName('answer')[0].innerHTML = 'Correct'
        sec += 1
        score += 1
    }
    else {
        document.getElementsByClassName('answer')[0].innerHTML = 'Incorrect'
        sec -= 10
    }
    if (sec > 0) {
        setTimeout(() => {
            console.log('next question');
            showQ()
        }, 1000)
    }

}


function done() {
    clearInterval(time)
    document.getElementById('ans').innerHTML = score
    document.getElementsByClassName('questions')[0].classList.toggle('none')
    document.getElementsByClassName('all-done')[0].classList.toggle('none')
}
function submit() {
    localStorage.setItem(document.getElementsByTagName('input')[0].value, score)

    document.getElementsByClassName('all-done')[0].classList.toggle('none')
    document.getElementsByClassName('description')[0].classList.toggle('none')
}
function cleared() {
    var userInput = prompt("Passcode");
    if (userInput === "Wake up to reality!!") {
        console.log('cleared all')
        const keys = Object.keys(localStorage)

        console.log('clearing highscores', keys)
        keys.map((ele) => {
            localStorage.removeItem(ele)
        })
    }

    location.reload()
}
