const interns = [
  {
    name: "Chika Okafor",
    Scores: [85, 92, 78, 88, 90],
  },
  {
    name: "Esther Odums",
    Scores: [40, 98, 27, 89, 45],
  },
  {
    name: "Toby Aki",
    Scores: [12, 9, 37, 16, 51],
  },
  {
    name: "Bruce Okoye",
    Scores: [32, 45, 28, 39, 41],
  },
  {
    name: "Iniobong Edidiong",
    Scores: [75, 82, 68, 80, 77],
  },
];

// Function to calculate average score
function calculateAverage(Scores) {
  let sum = 0;
  for (let i = 0; i < Scores.length; i++) {
    sum = sum + Scores[i];
  }

  let average = sum / Scores.length;
  return average;
}

interns.forEach(function (intern) {
  let averageScore = calculateAverage(intern.Scores);
  console.log(intern.name, averageScore);
});

 function showMessage(){
    alert("HI this is a console gradebook. please open your console.");
    alert("Quick Tip:For windows press shift + ctrl + J")
  }
