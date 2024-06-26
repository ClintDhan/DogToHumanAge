let button = document.querySelector(".button");


button.addEventListener("click", function() {

    let dogAge = document.querySelector("#dogAge").value;
    dogAge = Number(dogAge);
    let label = document.querySelector(".labelAge");
    let humanAge = 0;
    humanAge = Number(humanAge);
    humanAge = (dogAge - 2) * 4 + 21;
    label.textContent = humanAge;
})