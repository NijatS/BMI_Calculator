const fullName = document.querySelectorAll(".input>input");
const calBtn = document.querySelector(".input_section >button");
const h1Body = document.querySelector(".text >h1");
let info = [];
let message;
calBtn.addEventListener("click", () => {
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
  h1Body.textContent = `Hello Aa, your body mass index is ${bmi}`;
  console.log(bmi);
  console.log(message);
});
