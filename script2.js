// get length

let commentsArray = [];

const inputEl = document.getElementById('input-el');
const submitBtn = document.getElementById('submit-btn');
const ulEl = document.getElementById('ul-el');
const nameEl = document.getElementById("name-el");
const emailEl = document.getElementById("email-el");
let commentEl = document.getElementById("comment-el");
let authorEl = document.getElementById("author-el");
                       

submitBtn.addEventListener('click', function() {
  commentsArray.push(`"${inputEl.value}" says ${nameEl.value}`);
  renderComments();
  inputEl.value = '';
  nameEl.value = '';
  emailEl.value = '';
})



function renderComments() {
  let commentList = '';
  for (let i = 0; i < commentsArray.length; i++) {
 // listItems += '<li><a href="' +  myLeads[i] + '" target="_blank">' + myLeads[i] + '</a></li>';
    commentList += `
      <li>
        ${commentsArray[i]}
      </li>`;
    
 }
  ulEl.innerHTML = commentList;
}