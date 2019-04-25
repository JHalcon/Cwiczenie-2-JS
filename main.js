let number = 1;
const btn = document.querySelector("button");
btn.addEventListener("click", function(){
const div = document.createElement("div");  
if(number%5==0){
div.classList.add("cc"); 
}

console.log(div);
document.body.appendChild(div); 
div.textContent = number;
number+=1;


});