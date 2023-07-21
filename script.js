const data = [
    {
      question: "How to include a javascript file in an HTML file?",
      a: "via link tag",
      b: "via script tag",
      c: "via import tag",
      d: "None of the above",
      correct: "b",
    },
    {
      question: "How to take values as input from user?",
      a: "window.alert()",
      b: "window.input()",
      c: "window.confirm()",
      d: "window.prompt()",
      correct: "d",
    },
    {
      question: "First Prime Minister of India",
      a: "Narendra Modi",
      b: "Amit Shah",
      c: "Jawahar Lal Nehru",
      d: "Rahul Gandhi",
      correct: "c",
    },
    {
      question: "Calculate 2+2",
      a: "8",
      b: "10",
      c: "6",
      d: "4",
      correct: "d",
    },
    {
      question: "Calculate square root of 81",
      a: "9",
      b: "10",
      c: "20",
      d: "100",
      correct: "a",
    },
    {
      question: "Capital of India",
      a: "Bhopal",
      b: "Delhi",
      c: "Mumbai",
      d: "Punjab",
      correct: "b",
    },
    {
      question: "Capital of Sri Lanka",
      a: "Bhopal",
      b: "Colombo",
      c: "Mumbai",
      d: "Punjab",
      correct: "b",
    },
    {
      question: "Capital of US",
      a: "Texas",
      b: "Atlanta",
      c: "New York",
      d: "Washington D.C",
      correct: "d",
    },
    

  ];
  
  let question = document.getElementById("question");
  
  let aOption = document.getElementById("a_option");
  let bOption = document.getElementById("b_option");
  let cOption = document.getElementById("c_option");
  let dOption = document.getElementById("d_option");
  
  let answers = document.getElementsByClassName("answer");
  
  let quizNumber = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    // Un Check all radio button if there are any check
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        answers[i].checked = false;
      }
    }
  
    question.innerText = data[quizNumber]["question"];
    aOption.innerText = data[quizNumber]["a"];
    bOption.innerText = data[quizNumber]["b"];
    cOption.innerText = data[quizNumber]["c"];
    dOption.innerText = data[quizNumber]["d"];
  }
  
  let button = document.getElementById("button");
  button.addEventListener("click", function () {
    // Get User Answer.
    let userAnswer = null;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked == true) {
        userAnswer = answers[i].id;
      }
    }
  
    if (userAnswer) {
      // Check if Answer is Correct or Not.
  
      if (userAnswer == data[quizNumber]["correct"]) {
        score++;
      }
  
      console.log("score ===> ", score);
      // Load new Question.
      quizNumber++;
      if (quizNumber < data.length) {
        loadQuiz();
      } else {
        let header = document.getElementById("header");
        header.innerHTML = `
          <h1> Your Score ${score} out of ${data.length} </h1>
        `;
  
        button.innerText = "Double click to Reload Your Quiz";
        button.style.fontSize = "16px";
      }
    }
  });
  
  button.addEventListener("dblclick", function () {
    location.reload();
  });