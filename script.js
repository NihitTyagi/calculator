let string = "";

let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {

        document.querySelector(".outputScreen").innerHTML = "";
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector(".outputScreen").innerHTML = "="+string;
        } else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector(".outputScreen").innerHTML = string;
            document.querySelector(".queryScreen").innerHTML = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector(".queryScreen").innerHTML = string;
        }
    });
});
