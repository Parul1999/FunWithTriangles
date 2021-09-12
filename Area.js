const sides=document.querySelectorAll(".sides");
const btnArea=document.querySelector("#calcArea");
const output=document.querySelector("#output");

const side1=document.querySelector("#side1");
const side2=document.querySelector("#side2");
const side3=document.querySelector("#side2");

function calcArea()
{
var side_1 = Number(sides[0].value);
var side_2 = Number(sides[1].value) ;
var side_3 = Number(sides[2].value) ;
if(side_1>0 && side_2 >0  && side_3 >0)
{ 
    //semi-Permieter
    var semiPer = (side_1+side_2+side_3)/2;
    var sidesMult= (semiPer-side_1)* (semiPer-side_2)* (semiPer-side_3);
    var area = Math.sqrt(semiPer*sidesMult)
    if(area>0)
    {
    output.innerText="Area of the Triangle = " + area +" Units"
    }
    else
    {
        output.innerText ="Triangle cannot be Formed"
    }
}
else if(!side_1|| !side_2 || !side_3 ) 
{
    output.innerText="Enter all the required Fields"
}
else
{
    //when sides <=0
    output.innerText="To Calculate Area , atleast all sides should be greater than 0"
    
}

}
function resetOutput()
{
    output.innerText="";
}

side1.addEventListener('change',resetOutput);
side2.addEventListener('change',resetOutput);
side3.addEventListener('change',resetOutput);
btnArea.addEventListener('click',calcArea)