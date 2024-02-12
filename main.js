const menu = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", function(){
    menu.classList.toggle("active");
    nav.classList.toggle("active");
})

// accordion

const questions = document.getElementsByClassName("question");

for(let i = 0; i < questions.length; i++ ){
    questions[i].onclick = function(){
        this.classList.toggle("open");
        const answer = this.nextElementSibling;

        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
        }else{
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    }
}