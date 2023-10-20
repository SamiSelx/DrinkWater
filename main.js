let bottleBackGround = document.querySelector(".bottle div")
let bottleParagraph = document.querySelector(".bottle p");

let bottleSelected = document.querySelectorAll(".bottle-selected .small-bottle")


bottleSelected.forEach((bottle,index)=>{
    bottle.addEventListener("click",()=>{
        let numberActive = index + 1;

        if(bottle.classList.contains("active") && !bottleSelected[index + 1].classList.contains("active")){
            removeActiveBottle();
            addActiveBottle(index - 1);
            numberActive--;

        }else{
            removeActiveBottle();
            addActiveBottle(index); // add active class from 0 to index;
        }
        
        
        // calc purcentage;
        let purcentage = numberActive * 12.5;
        let litters = 2 - (numberActive * 0.25);
        bottleBackGround.setAttribute("data-purc",`${purcentage}%`);
        bottleBackGround.style.height = `${purcentage}%`
        bottleParagraph.innerHTML = `${litters}L<br> <span>Remained</span>`
        bottleParagraph.style.top = `${50 - (purcentage/2)}%`
    })
})




function removeActiveBottle(){
    bottleSelected.forEach((bottle)=>{
        bottle.classList.remove("active")
    })
}

function addActiveBottle(index){
    for(let i=0;i<=index;i++){
        bottleSelected[i].classList.add("active")
    }
}