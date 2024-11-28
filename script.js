let btn = document.getElementById("btn");
let childs = document.querySelectorAll(".child");
let container = document.getElementById("container")

console.log(childs)

let selectedRating = "";
childs.forEach((child) => {
    child.addEventListener("click", (event) =>  {
        console.log(child)
        removeClassList();
        selectedRating = event.target.innerText;
        event.target.classList.add("select") ||
        event.target.parentNode.classList.add("select");

    })
})
btn.addEventListener("click", () =>{

    if(selectedRating !== ''){

        container.innerHTML = `
        <div id="show">
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <br>
        <br>
        <p>We'll use your feedback to improve our 
        customer support.</p>
        </div>
        `

        setTimeout(() => {
            // window.location.reload();
            container.classList.add('restart');
            
        }, 1000);
        

        
    }
})

function removeClassList(){
    childs.forEach((child) => {
        child.classList.remove("select")
    })
}