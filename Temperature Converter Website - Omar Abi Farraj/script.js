let input = document.getElementById("temp");
let convert_btn = document.getElementById("btnConv");
let units = document.getElementById("units");
let error = document.getElementById("error");
let result_div = document.getElementById("result");
let res = document.getElementById("res");
convert_btn.onclick = function () {
  if (input.value.trim() == "") {
    result_div.style.display = "none";
    error.style.display = "block";
  } else {
    result_div.style.display = "block";
    error.style.display = "none";
    res.innerText = convert(input.value.trim(), units.value);
  }
};

function convert(num, unit) {
  let converted = 0;

  if (unit === "cf") {
    converted = num * (9 / 5) + 32 + "F";
  } else if (unit === "fc") {
    converted = ((num - 32) * 5) / 9 + "C";
  } else if (unit === "ck") {
    converted = num + 273.15 + "K";
  } else if (unit === "kc") {
    converted = num - 273.15 + "C";
  } else if (unit === "fk") {
    converted = ((num + 459.67) * 5) / 9 + "K";
  } else {
    converted = (num * 9) / 5 - 459.67 + "F";
  }

  return converted;
}
