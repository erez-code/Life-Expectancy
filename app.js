var goButton = document.getElementById("calculate1");

goButton.addEventListener("click", function() {
  var selected_age = document.getElementById("ageForCalc1").value;
  var displayResault = document.getElementById("displayResault1");

  if (selected_age === "") {
    displayResault.innerHTML = "Not enough input.";
  } else if (selected_age > 82 || selected_age < 0) {
    displayResault.innerHTML = "Insert any age between 0 and 82.";
  } else {
    //calculate
    var isMale = document.getElementById("genderChoice")[0].checked;
    var calcResault = calcLifeExpectancyLeft(selected_age, isMale);

    displayResault.innerHTML =
      "At your age, the remainder of your life expectancy is " +
      calcResault.toFixed(2) +
      " years.";
  }
});

var life_expectancy_female_lut = [
  84.2,
  79.5,
  74.5,
  69.5,
  64.6,
  59.6,
  54.7,
  49.8,
  44.9,
  40.0,
  35.3,
  30.6,
  26.0,
  21.6,
  17.3,
  13.4,
  9.8
];

var life_expectancy_male_lut = [
  80.4,
  75.7,
  70.8,
  65.8,
  60.9,
  56.1,
  51.2,
  46.4,
  41.5,
  36.8,
  32.1,
  27.6,
  23.3,
  19.2,
  15.4,
  11.9,
  8.8
];

function round5(num) {
  return Math.round(num / 5) * 5;
}

function calcLifeExpectancyLeft(age = 30, isMale = 1) {
  var round_age = round5(age);
  var i = round_age / 5;
  var remainder = age - round_age;

  return isMale
    ? life_expectancy_male_lut[i] - remainder
    : life_expectancy_female_lut[i] - remainder;
}
