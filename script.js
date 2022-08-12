// function to submit comment to comment section
// function to submit name to author id
// button to click these functions into action

// render comment and author function
// btn event listener

const nameEl = document.getElementById("name-el");
const inputEl = document.getElementById("input-el");
const submitBtn = document.getElementById("submit-btn");
const emailEl = document.getElementById("email-el")
let commentEl = document.getElementById("comment-el");
let authorEl = document.getElementById("author-el");

submitBtn.addEventListener('click', function() {
  renderComment();
  inputEl.value = '';
  nameEl.value = '';
  emailEl.value = '';
  
  /* commentEl.push(inputEl.value);
  renderComment();
  inputEl.value = '';
  authorEl.push(nameEl.value);
  renderComment();
  authorEl.value = '';
  console.log(authorEl);
  renderComment() */
})

function renderComment() {
  commentEl.textContent = `"${inputEl.value}"`;
  authorEl.textContent = `By: ${nameEl.value}`;
}
