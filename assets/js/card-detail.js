const cardNameInput = document.querySelector("#cardName");
cardHolderName.addEventListener("input", writeName);

function writeName() {
  cardNameInput.innerHTML = `<p id="cardName">${cardHolderName.value.toUpperCase()}</p>`;
}
// writeName();

const cardNumber = document.querySelector("#cardNumber");
cardNumberInput.addEventListener("input", writeNumber);

function writeNumber() {
  let numberError = document.querySelector("#numberError");
  cardNumber.innerHTML = `<p id="cardNumber">${cardNumberInput.value}</p>`;
  if (cardNumberInput.value === "") {
    numberError.style.display = "block";
    cardNumberInput.style.borderColor = 'red';
  } else {
    numberError.style.display = "none";
    cardNumberInput.style.borderColor = '#DFDEE0';
  }
}
// writeNumber();

const monthyeardate = document.querySelector("#lastDate");

monthDate.addEventListener("input", writeDate);
yearDate.addEventListener("input", writeDate);

function writeDate() {
  let dateError = document.querySelector("#dateError");
  monthyeardate.innerHTML = ` <span id="lastDate">${monthDate.value}/${yearDate.value}</span>`;
  if (monthDate.value === "" || yearDate.value === "") {
    dateError.style.display = "block";
    monthDate.style.borderColor = 'red';
    yearDate.style.borderColor = 'red';
  } else {
    dateError.style.display = "none";
    monthDate.style.borderColor = "#DFDEE0"
    yearDate.style.borderColor = 'DFDEE0';

  }
}
// writeDate();

const cvc = document.querySelector("#cvc");

cvcNumber.addEventListener("input", writeCvc);

function writeCvc() {
  let cvcError = document.querySelector("#cvcError");
  cvc.innerHTML = `<h5 id="cvc">${cvcNumber.value}</h5>`;
  if (cvcNumber.value === "") {
    cvcError.style.display = "block";
  } else {
    cvcError.style.display = "none";
  }
}

const confirmBtn = document.querySelector(".confirmBtn");
console.log(confirmBtn);
confirmBtn.addEventListener("click", resultBtn);

const cardInfo = document.querySelector(".cardInfo");

function resultBtn() {
  cardInfo.innerHTML = `
    <div class= "resultScreen">
    <img src="assets/img/resultimg.svg" alt="">
    <h3>THANK YOU!</h3>
    <p>We’ve added your card details</p>
    <button class="confirmBtn">Confirm</button>
    </div>

    `;
}                    
