const textContent__edit = document.querySelector(".textContent__edit");
const textContent__text = document.querySelector(".textContent__text");
const search__button = document.querySelector(".search__button");
let editable = false;

function toggleEditable() {
  if (editable) {
    editable = false;
    textContent__text.setAttribute("contenteditable", "false");
  } else {
    editable = true;
    textContent__text.setAttribute("contenteditable", "true");
  }
}

textContent__edit.addEventListener("click", () => {
  toggleEditable();
  textContent__text.classList.toggle("editable");
});

// function changeLetter(letter) {
//   let text = textContent__text.innerText.split('');
//   console.log(text);
//   text = text.replace(letter, `<span class="specialColor">${letter}</span>`);
//   console.log(text);
//   textContent__text.innerHTML = text;
// }

search__button.addEventListener("click", () => {
  const plainText = document.querySelector(".search__input").value.split("");
  let text = textContent__text.innerText.split("");
  let j = 0;
  for (let i = 0; i < plainText.length; i++) {
    for (j; j <= text.length; j++) {
      console.log(plainText[i], text[j]);
      // console.log();
      if (plainText[i] == text[j]) {
        text[j] = `<span class="specialColor">${text[j]}</span>`;
        break;
      }
    }
  }
  textContent__text.innerHTML = text.join("");
});
