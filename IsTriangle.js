const angles=document.querySelectorAll(".angles");
const btnIsTriangle=document.querySelector("#isTriangle");
const output=document.querySelector("#output");

const angle1=document.querySelector("#angle1");
const angle2=document.querySelector("#angle2");
const angle3=document.querySelector("#angle3");


function calcIsTriangle()
{
var angle_1 = Number(angles[0].value );
var angle_2 = Number(angles[1].value) ;
var angle_3 = Number(angles[2].value);
if(angle_1 >0 && angle_2 >0 && angle_3>0)
{
    var sum = angle_1+angle_2+angle_3;
    if(sum==180)
    {
        output.innerText="Yes, It Forms a Triangle"
    }
    else
    {
        output.innerText="Nope, It  does'nt form a Triangle"
    }
}
else if(!angle_1|| !angle_2 || !angle_3) 
{
    output.innerText="Enter all the required Fields"
}
else
{
    //when angles <=0
    output.innerText="To form a triangle , atleast all angles should be greater than 0"
    
}

}
function resetOutput()
{
    output.innerText="";
}

angle1.addEventListener('change',resetOutput);
angle2.addEventListener('change',resetOutput);
angle3.addEventListener('change',resetOutput)
btnIsTriangle.addEventListener('click',calcIsTriangle)