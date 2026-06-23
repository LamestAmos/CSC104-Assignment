const questions = [
  {
    title: "What is 1 + 1?",
    answer: "C",
    options: ["A. 11", "B. 10", "C. 2", "D. Idk"],
  },
  {
    title: "What is 1 + 1?",
    answer: "C",
    info: "Do the thing with the thing.",
    options: ["A. 11", "B. 10", "C. 2", "D. Idk"],
  },
  {
    title: "What is 1 + 1?",
    answer: "C",
    options: ["A. 11", "B. 10", "C. 2", "D. Idk"],
  },
  {
    title: "What is 1 + 1?",
    answer: "C",
    options: ["A. 11", "B. 10", "C. 2", "D. Idk"],
  },
];

const guesses = [];
const answered = [];

let questionIndex = 0;
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const questionCard = document.querySelector(".question-card");

update();

nextBtn.addEventListener("click", () => {
  questionIndex++;
  update();
});

prevBtn.addEventListener("click", () => {
  questionIndex--;
  update();
});

questionCard.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  const answer = e.target.innerText.charAt(0);
  if (!answered.includes(questionIndex)) {
    guesses[questionIndex] = checkAnswer(answer);
  }
  answered[questionIndex] = questionIndex;
  update();
});

function updateControls() {
  nextBtn.disabled = questionIndex >= questions.length - 1;
  prevBtn.disabled = questionIndex <= 0;
}

function updateQuestion() {
  const question = questions[questionIndex];
  if (!question) return;
  const { title, answer, options, info = "" } = question;
  const guess = guesses[questionIndex];
  questionCard.classList.toggle(
    "answered",
    guess !== null && guess !== undefined,
  );
  questionCard.classList.toggle("correct", !!guess);
  questionCard.innerHTML = `
        <h2>${questionIndex + 1}.</h2>
        <h3>${title}</h3>
        <p>
          ${info}
        </p>
        <ul>
        ${options.map((option) => `<li><button class="option">${option}</button></li>`).join("")}
        </ul>
`;
}

function checkAnswer(answer) {
  const question = questions[questionIndex];
  if (!question) return false;
  return answer === question.answer;
}

function update({ controls = true, questions = true } = {}) {
  questions && updateQuestion();
  controls && updateControls();
}
