const  form = document.querySelector("form");

form .addEventListener("submit", function(e){
    e.preventDefault();

const height = parseInt(document.getElementById('height').value);
const weight = parseInt(document.getElementById('weight').value);
const resultElement = document.getElementById('result');

if (height===  " " || height < 0 || isNaN(height)){
    result.innerHTML = ' Enter a valid details'
}
else if (weight===  " " || weight < 0 || isNaN(weight)){
    result.innerHTML= ' Enter a valid details'
}
else{
    const bmi = (weight /((height*height)/ 10000)).toFixed(2);
    result.innerHTML= `<span> ${bmi}</span>`
}
})


 
        
      
        