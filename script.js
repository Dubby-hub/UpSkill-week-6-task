// Array of Students as objects
let students = [
  { name: "Ekene Okafor", 
    scores: { math: 90, english: 85, biology: 88, chemistry: 78, geography: 85 } 
},

 { name: "John Ebube", 
    scores: { math: 90, english: 85, biology: 88, chemistry: 78, geography: 85 } 
},

 { name: "Esther Ike", 
    scores: { math: 90, english: 85, biology: 88, chemistry: 78, geography: 85 } 
},

 { name: "Toby Kings", 
    scores: { math: 90, english: 85, biology: 88, chemistry: 78, geography: 85 } 
},

 { name: "Emmanuel Johnson", 
    scores: { math: 90, english: 85, biology: 88, chemistry: 78, geography: 85 } 
},
 { name: "Precious Duru", 
    scores: { math: 90, english: 85, biology: 88, chemistry: 78, geography: 85 } 
},
   

];

// Function to calculate average score
function calculateAverage(student) {
  let scores = Object.values(student.scores);
  let total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// Function to dispay result
students.forEach(student => {
  console.log(student.name + "'s average is " + calculateAverage(student));
});


// Function to make button clickable for directions
function showMessage(){
    alert("HI this is a console gradebook. please open your console.");
    alert("Quick Tip:For windows press shift + ctrl + J")
  }