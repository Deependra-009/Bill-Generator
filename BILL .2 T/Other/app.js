let r=document.getElementById("rail");
let f=document.getElementById("flight");
let optbutton=document.getElementById("optbut");
let pnr1=document.getElementById("pnr");
let flight1=document.getElementById("flightno");
let option1=document.getElementById("sel1");
let option2=document.getElementById("sel2");
let option3=document.getElementById("rail1");
let option4=document.getElementById("rail2");
r.addEventListener("click",()=>
{
    optbutton.style="display:none";
    pnr1.innerHTML="Train Number";
    flight1.innerHTML="PNR";
    option3.innerHTML=`<input type="text" size="10" id="inp">`;
    option4.innerHTML=`<input type="text" size="10" id="inp">`;

});
f.addEventListener("click",()=>
{
    optbutton.style="display:none";
    pnr1.innerHTML="Flight Number";
    flight1.innerHTML="Airline";
    option1.style="display:block";
    option2.style="display:block";
})




/**************************************************** */
let boi=document.getElementById("btnboi");
let pnb=document.getElementById("btnpnb");

boi.addEventListener("click",funcboi);

function funcboi()
{
    pnb.style="display:none";
    let divboi=document.getElementById("boi");
    divboi.style="display:none;";
    let divpnb=document.getElementById("pnb");
    divpnb.style="display:block;";
    divpnb.innerHTML=`<h3>R S TOUR AND TRAVELS</h3>
    <h3>CURRENT ACCOUNT NO:- <span>683420110000273</span></h3>
    <h3>BANK OF INDIA</h3>
    <h3>BRANCH:- LDA COLONY KANPUR ROAD,LUCKNOW</h3>
    <h3>IFSC:- <span>BKID0006834</span></h3>`
}



pnb.addEventListener("click",funcpnb);

function funcpnb()
{
    boi.style="display:none";
    let divpnb=document.getElementById("pnb");
    divpnb.style="display:none;";
    let divboi=document.getElementById("boi");
    divboi.style="display:block;";
    divboi.innerHTML=`
    
    <h3>DEEPENDRA TRIVEDI</h3>
    <h3>SAVING ACCOUNT NO:- <span>4140000100151683</span></h3>
    <h3>PUNJAB NATIONAL BANK</h3>
    <h3>BRANCH:- KHAZANA COMPLEX,LUCKNOW</h3>
    <h3>IFSC:- <span>PUNB0414000</span></h3>
    `


}
