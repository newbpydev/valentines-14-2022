document.getElementById("btn").addEventListener("click", calculate);
let costEl = document.getElementById("cost-el");
const errorMsgs = document.querySelectorAll(".msg-error");

function calculate() {
  // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
  // 2. Display the total cost in the cost-el span.
  const foodEl = document.getElementById("food-select");
  const transportEl = document.getElementById("transport-select");
  let cost = 0;

  if (foodEl.value === "") {
    errorToggle(foodEl);
  } else if (transportEl.value === "") {
    errorToggle(transportEl);
  } else {
    cost = parseInt(foodEl.value) + parseInt(transportEl.value);
    costEl.textContent = "$" + cost;
    clearErrorMsg();
  }
}

const errorToggle = (element) => {
  if (element.id === "food-select") {
    element.focus();
    element.style.outlineColor = "red";
    clearErrorMsg();
    errorMsgs[0].classList.add("msg-error-active");
  } else if (element.id === "transport-select") {
    element.focus();
    element.style.outlineColor = "red";
    clearErrorMsg();
    errorMsgs[1].classList.add("msg-error-active");
  } 
};

const clearErrorMsg = () => {
  errorMsgs.forEach((errorMsg) => {
    errorMsg.classList.remove("msg-error-active");
  });
}
