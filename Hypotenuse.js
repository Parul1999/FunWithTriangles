const sides=document.querySelectorAll(".sides");
const btnHyp=document.querySelector("#calcHyp");
const output=document.querySelector("#output");

const side1=document.querySelector("#side1");
const side2=document.querySelector("#side2");


function calcHypotenuse()
{
var side_1 = Number(sides[0].value );
var side_2 = Number(sides[1].value) ;
if(side_1>0 && side_2 >0)
{
    let sqside1= side_1*side_1 ; // side1**2
    let sqside2= side_2*side_2 ;
    hyp= Math.sqrt(sqside1+sqside2);
    output.innerText="Hypotenuse is : "+ hyp;
}
else if(!side_1|| !side_2 ) 
{
    output.innerText="Enter all the required Fields"
}
else
{
    //when sides <=0
    output.innerText="To Find Hypotenuse , atleast all sides should be greater than 0"
    
}

}
function resetOutput()
{
    output.innerText="";
}

side1.addEventListener('change',resetOutput);
side2.addEventListener('change',resetOutput);
btnHyp.addEventListener('click',calcHypotenuse)