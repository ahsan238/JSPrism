let temperature = 75;
let timeOfDay = "morning";
let isRaining = false;

if (temperature > 80) {
  console.log("It's a hot day!");
  if (timeOfDay === "morning") {
    console.log("Good morning!");
  } else if (timeOfDay === "afternoon") {
    console.log("Good afternoon!");
  } else {
    console.log("Good evening!");
  }
} else if (temperature >= 60 && temperature <= 80) {
  console.log("It's a pleasant day.");
  if (isRaining) {
    console.log("Don't forget your umbrella!");
  } else {
    console.log("Enjoy your day!");
  }
} else {
  console.log("It's a cold day.");
  if (isRaining) {
    console.log("It's raining. Stay dry!");
  } else {
    console.log("Stay warm!");
  }
}