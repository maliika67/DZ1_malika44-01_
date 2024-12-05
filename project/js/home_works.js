//GMAIL BLOCK

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-z0-9._-]+@gmail\.com$/i

gmailButton.onclick = () =>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    }else{
        gmailResult.innerHTML = "Invalid email address"
        gmailResult.style.color = "red"
    }
}

//MOVE BLOCK

const childBlock = document.querySelector("#gmail_child");

let num = 0;
const square_block = () =>{
    num++
    childBlock.style.left=`(${num}px)`;
    if (num <500){
        requestAnimationFrame(square_block);
    }

}
square_block();