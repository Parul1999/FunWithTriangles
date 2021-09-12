const form = document.querySelector(".quiz-form");
const submit = document.querySelector("#submit-form");
const output = document.querySelector("#output");

const correctAns=["3","180","90","equilateral","isosceles"];

function calcScore()
{
    let score =0;
    let index=0;
    const formResult = new FormData(form);
    for(let val of formResult.values())
    {
        if(val==correctAns[index])
        {
            score = score+1;
        }
        index=index+1;
    }
  output.innerText="Your Final Score = "+score;
}






submit.addEventListener("click",calcScore)