const codeBox = document.getElementById("typing-code");

const text = `const luis = {
  role: "interpreter → developer",
  location: "Costa Rica",
  languages: ["English", "Spanish"],
  learning: ["JavaScript", "Python", "Java"],
  studying: "Fundatec",
  status: "open to junior roles"
};`;

let i = 0;

function typeNext() {
    codeBox.textContent = text.slice(0, i);
    i++;

    if (i <= text.length) {
        setTimeout(typeNext, 40);
    }
}

typeNext();