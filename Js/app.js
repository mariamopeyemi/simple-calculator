// alert("connected")

const zero = document.querySelector("#zero"),
     one = document.querySelector("#one"),
    two = document.querySelector("#two"),
    three = document.querySelector("#three"),
    four = document.querySelector("#four"),
    five = document.querySelector("#five"),
    six = document.querySelector("#six"),
    seven = document.querySelector("#seven"),
    eight = document.querySelector("#eight"),
    nine = document.querySelector("#nine"),
    dot = document.querySelector("#dot"),
    equal = document.querySelector("#equal"),
    add = document.querySelector("#add"),
    subtract = document.querySelector("#subtract"),
    divide = document.querySelector("#divide"),
    multiply = document.querySelector("#multiply"),
    clear = document.querySelector("#clear"),
    ac = document.querySelector("#ac");
    

let question = "",
    answer = 0;

const qDisplay = document.querySelector("#display-question"),
        aDisplay = document.querySelector("#display-answer"),
        eDisplay = document.querySelector("#display-error");



zero.addEventListener("click", () => {

    if (question.length <= 17) {
        question = question.concat("0");
    }
    else if (question.length > 17) {
        displayError("input limit reached");
    }

});

one.addEventListener("click", () => {

if (question.length <= 17) {
        question = question.concat("1");
    }
     else if (question.length > 17) {
        displayError("input limit reached");
    }

});
two.addEventListener("click", () => {
    
   if (question.length <= 17) {
        question = question.concat("2");
    }
     else if (question.length > 17) {
        displayError("input limit reached");
    }
});

three.addEventListener("click", () => {
    if (question.length <= 17) {
        question = question.concat("3");
    }
     else if (question.length > 17) {
        displayError("input limit reached");
    }
});
four.addEventListener("click", () => {
 
    if (question.length <= 17) {
        question = question.concat("4");
    }
     else if (question.length > 17) {
        displayError("input limit reached");
    }
});
five.addEventListener("click", () => {
 
    if (question.length <= 17) {
        question = question.concat("5");
    }
     else if (question.length > 17) {
        displayError("input limit reached");
    }
});
six.addEventListener("click", () => {
 
   if (question.length <= 17) {
        question = question.concat("6");
    }
     else if (question.length > 17) {
        displayError("input limit reached");
    }
});
seven.addEventListener("click", () => {
 
   if (question.length <= 17) {
        question = question.concat("7");
    }
     else if (question.length > 17) {
        displayError("input limit reached");
    }
});
eight.addEventListener("click", () => {
 
   if (question.length <= 17) {
        question = question.concat("8");
    }
     else if (question.length > 17) {
        displayError("input limit reached");
    }
});
nine.addEventListener("click", () => {
 
   if (question.length <= 17) {
        question = question.concat("9");
    }
     else if (question.length > 17) {
        displayError("input limit reached");
    }
});
dot.addEventListener("click", () => {
 
   if (question.length <= 16) {
        question = question.concat(".");
    }
     else if (question.length > 16) {
        displayError("input limit reached");
    }
});


// Operations are here

add.addEventListener("click", () => {
    console.log(answer)
    if (question === "") {
        question = answer.toString().concat("+");
    }


    if (question[question.length - 1] !==  "+") {

         if (question.length <= 16) {
            question = question.concat("+");
        }
        else if (question.length > 16) {
            displayError("input limit reached");
        }   
    }   
    
    
});

subtract.addEventListener("click", () => {
    if (question === "") {
        question = answer.toString().concat("-");
    }
     if (question[question.length - 1] !==  "-") {
        if (question.length <= 16) {
            question = question.concat("-");
        }
        else if (question.length > 16) {
            displayError("input limit reached");
        } 
        
    }
});
multiply.addEventListener("click", () => {
    if (question === "") {
        question = answer.toString().concat("*");
    }
     if (question[question.length - 1] !== "*") {
         if (question.length <= 16) {
            question = question.concat("*");
        }
        else if (question.length > 16) {
            displayError("input limit reached");
        } 
        
    }
    
});
divide.addEventListener("click", () => {
    if (question === "") {
        question = answer.toString().concat("/");
    }
     if (question[question.length - 1] !== "/") {
        if (question.length <= 16) {
            question = question.concat("/");
        }
        else if (question.length > 16) {
            displayError("input limit reached");
        } 
        
    }
    
});





// functions are here
ac.addEventListener("click", () => {
    answer = 0;
    question = "";
    aDisplay.textContent = answer;
    qDisplay.textContent = question;
});
clear.addEventListener("click", ()=>{
    question = question.slice(0, -1);
    
})

// allows the question to be displayed in DOM consistently

setInterval(() => {
    qDisplay.textContent = question;

    
}, 1);

// evaluate the inputs
equal.addEventListener("click", () => {

    try {
        console.log("clicked")
    answer = eval(question);
    console.log(answer);
    question = "";
    qDisplay.textContent = answer;
    aDisplay.textContent = answer;
        
    } catch (err) {
        displayError(err);        
    }
    
    
})


// display error in dom

function displayError(err) {
    eDisplay.textContent = err;

    setTimeout(() => {
        eDisplay.textContent = "";
        
        
    }, 2000);
    
}