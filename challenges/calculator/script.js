const display = document.getElementById("inputfield");
const buttons = document.querySelectorAll(".buttons");

display.classList.add("inputDisplay");

let resultShown =false;
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const value = button.textContent;

    if (value === "c") {
      display.textContent = "";
      resultShown=false;
    } else if (value === "=") {
      if (display.textContent == "") {
        display.textContent = "Enter a number";
      } else {
        try {
          const result = eval(display.textContent);

          if (result == Infinity) {
            display.textContent = "Cannot Divided by Zero";
          } else {
            display.textContent = result;
            resultShown=true;
          }
        } catch (error) {
          display.textContent = "Invalid Input";
        }
      }
    } else {
        if(resultShown){
            const operator=['+','-','/','*',];
            if(operator.includes(value)){
                display.textContent += value;

            }else{
                   display.textContent = value;

            }
            resultShown= false;
        }else{
                display.textContent += value;

        }
    }
  });
});
