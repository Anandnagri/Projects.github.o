const oldURL = "https://www.x-rates.com/calculator/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropdowns){
    for(currCode in countryList){
        let newOption= document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        if ( select.name === "from"  && currCode === "USD"){
            newOption.selected = "selected";
        }
         if ( select.name === "to"  && currCode === "INR"){
            newOption.selected = "selected";
        };
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
}



const updateExchangeRate = async ()=>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value ="1";
    }

    const URL = `${oldURL}?from=${fromCurr.value}&to=${toCurr.value}&amount=${amtVal}`;
    // console.log(fromCurr.value, toCurr.value);
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value];
    // console.log(rate);
    let finalamount = amtVal * rate;
    // console.log(finalamount);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalamount} ${toCurr.value}`;
}

btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    updateExchangeRate();
})

window.addEventListener("load",()=>{
    updateExchangeRate();
})