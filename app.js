const fullName = document.querySelectorAll(".input>input");
const calBtn = document.querySelector(".input_section >button");
const h1Body = document.querySelector(".text > h1");
const mainClass = document.querySelector(".main");
const infoClass = document.querySelector(".info");
const h2Body = document.querySelectorAll(".text >h2");
const tableBody = document.querySelector(".history_container > tbody");
let info = [];
infoClass.style.display = "none";
let message;
calBtn.addEventListener("click", () => {
  mainClass.style.display = "none";
  infoClass.style.display = "initial";
  i = 0;
  fullName.forEach((element) => {
    info[i] = element.value;
    i++;
  });
  boy = Number(info[2]) * 0.01;
  let bmi = Number(info[1]) / (boy * boy);
  if (bmi < 18.5) message = "Underweight";
  else if (bmi >= 18.5 && bmi < 25) message = "Normal Weight";
  else if (bmi >= 25 && bmi < 30) message = "Overweight Weight";
  else message = "Obese";
  bmi = bmi.toFixed(2);
  message = message.toLowerCase();
  // localStorage.setItem("name", "bmi", "message");
  h1Body.innerHTML = `Hello ${info[0]}, your body mass index is 
  <span style="font-size: 30px; color: rgb(245, 198, 94)">
  ${bmi}
  </span>`;

  h2Body[0].innerHTML = `You are <span style="font-size: 30px; color: rgb(228, 40, 31)">${message}</span>`;
  const newTr = document.createElement("tr");
  newTr.innerHTML = `<td>${info[0]}</td><td>${bmi}</td><td>${message}</td>`;
  tableBody.append(newTr);
});
