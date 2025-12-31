document.addEventListener("DOMContentLoaded", () => {
    const ques = [
      {
        question: "Who is PM of India?",
        options: ["Modi", "Nehru", "Gandhi", "Sonia"],
        answer: "Modi",
      },
      {
        question: "Who is captain of Team India cricket?",
        options: ["Rohit", "Dhoni", "Sehwag", "Virat"],
        answer: "Rohit",
      },
      {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Cellulose", "Ameba", "Plague"],
        answer: "Mitochondria",
      },
    ];
  
    const questions = document.querySelector("#questions");
    let currentindex = 0;
    let score = 0;
  
    function quiz() {
      questions.innerHTML = "";
  
      let currentques = ques[currentindex];
      let li = document.createElement("li");
      li.className = "ques-li";
  
      let optionshtml = currentques.options
        .map(opt => `<button class="option-btn">${opt}</button>`)
        .join("");
  
      li.innerHTML = `
        <p>${currentques.question}</p>
        ${optionshtml}
        <button class="next-btn">Next</button>
      `;
  
      questions.appendChild(li);
  
      // option click
      li.querySelectorAll(".option-btn").forEach(button => {
        button.addEventListener("click", () => {
          if (button.textContent === currentques.answer) {
            score++;
          }
          li.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
        });
      });
  
      // next button
      li.querySelector(".next-btn").addEventListener("click", () => {
        currentindex++;
        if (currentindex < ques.length) {
          quiz();
        } else {
          showscore();
        }
      });
    }
  
    function showscore() {
      questions.innerHTML = `
        <h1>Quiz Completed</h1>
        <h3>Score: ${score} / ${ques.length}</h3>
      `;
    }
  
    // start quiz
    quiz();
  });
  