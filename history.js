const tableBody = document.querySelector(".history_container > tbody");
function create() {
  const newTr = document.createElement("tr");
  newTr.innerHTML = `<td>${info[0]}</td><td>${bmi}</td><td>${message}</td>`;
  tableBody.append(newTr);
}
