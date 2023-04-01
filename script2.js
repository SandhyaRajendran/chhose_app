const Questions = [{
    id: 0,
    ques: "1.Who is the Prime Minister of India",
    ans: [{ text: "kalam", isCorrect: false },
        { text: "Modi", isCorrect: true },
        { text: "Thraupathi", isCorrect: false },
        { text: "Ramnath govind", isCorrect: false }
    ]

},
{
    id: 1,
    ques: "2.Which is india's first super computer?",
    ans: [{ text: "Para80000", isCorrect: false},
        { text: "para800", isCorrect: false },
        { text: "Param8000", isCorrect: true },
        { text: "Param80000", isCorrect: false }
    ]

},
{
    id: 2,
    ques: "3.What is the capital of Gujarat",
    ans: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "rajkot", isCorrect: false },
        { text: "gandhinagar", isCorrect: true }
    ]

},
{
    id: 3,
    ques: "4.National startup day",
    ans: [{ text: "12th Jan", isCorrect: false },
        { text: "16th Jan", isCorrect: true },
        { text: "20th Jan", isCorrect: false },
        { text: "24th Jan", isCorrect: false }
    ]

},
{
    id: 4,
    ques: "5.Who is India's first Woman Rafale pilot",
    ans: [{ text: "shivangi joshi", isCorrect: false },
        { text: "shivangi singh", isCorrect: true },
        { text: "Bhawana kanth", isCorrect: false },
        { text: "Avani chaturvedi", isCorrect: false }
    ]

},
{
    id: 5,
    ques: "6.Which team won the FIFA world cup 2022 trouphy?",
    ans: [{ text: "France", isCorrect: false },
        { text: "Brazil", isCorrect: false },
        { text: "Argentina", isCorrect: true },
        { text: "Germany", isCorrect: false }
    ]

},
{
    id: 6,
    ques: "6.Who won the golden ball award in FIFA world cup 2022?",
    ans: [{ text: "Neymar", isCorrect: false },
        { text: "Messi", isCorrect: true },
        { text: "Mbappae", isCorrect: false },
        { text: "Ronaldo", isCorrect: false }
    ]

}
]

const clickmeBtn = document.querySelector('.clickme')
// console.log(clickmeBtn)
const quizBtn = document.querySelector('.quiz')
// console.log(quizBtn)
const entry = document.querySelector('.entry')
// console.log(entry)
const allAnswers = document.querySelectorAll('.answer')
// console.log(allAnswers)
const questionTag = document.querySelector('.question')
// console.log(questionTag)
const nextBtn = document.querySelector('.nextBtn')
// console.log(nextBtn)
const topValue = document.querySelector('h2')
// console.log(topValue)
const end = document.querySelector(".end")

let incrementVal = -1;
clickmeBtn.addEventListener('click',function(){
    quizBtn.classList.remove('show')
    entry.classList.add('show')
    incrementVal++
    for(let i=0; i<Questions.length; i++){
        allAnswers[i].innerText = Questions[incrementVal].ans[i].text
        questionTag.innerText = Questions[incrementVal].ques
        // allAnswers[i].classList.toggle(Questions[incrementVal].ans[i].isCorrect)
    }    
})


let secondIncrementVal = 0
nextBtn.addEventListener('click',function(){
    if(secondIncrementVal == Questions.length-1){
        end.classList.remove('show')
        quizBtn.classList.add('show')
        end.innerText = "Thank you for your great time!!! You won" +" "+result+'/'+Questions.length+' '+'marks'+' ';
    }
    value =1;
    secondIncrementVal++
    // console.log(secondIncrementVal)
    for(let i=0; i<Questions.length+1; i++){
    allAnswers[i].innerText = Questions[secondIncrementVal].ans[i].text
    questionTag.innerText = Questions[secondIncrementVal].ques
    allAnswers[i].classList.remove('green')
    allAnswers[i].classList.remove('red')
    topValue.classList.add('show')
}    
})



let result = ''
let value = 1;
for(let j=0; j<allAnswers.length; j++){
    allAnswers[j].addEventListener('click',(e)=>{
        console.log(value)
        let values = value++
        console.log(values)
        if(values == 1){
        if(Questions[secondIncrementVal].ans[j].isCorrect){
            e.target.classList.add('green')
            topValue.innerText = 'Great Work!!!'
            topValue.classList.remove('show')
            topValue.style.textAlign = 'center'
            topValue.style.color = 'Green';
            result++;
        }
        else{
            e.target.classList.add('red')
            topValue.innerText = 'Your answer is wrong'
            topValue.classList.remove('show')
            topValue.style.textAlign = 'center'
            topValue.style.color = 'red'
        }
        }
    })
}