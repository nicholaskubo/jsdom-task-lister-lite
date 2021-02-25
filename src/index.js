form = document.querySelector(`#create-task-form`);
let commentContainer = document.querySelector(`#tasks`)

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let li = document.createElement(`li`) 
  li.textContent= e.target[`new-task-description`].value;
  commentContainer.appendChild(li);
  button = document.createElement(`button`);
  button.textContent = `X`;
  li.appendChild(button);
  button.style.background = "red"; 
  button.addEventListener(`click`, (e) =>{
  e.target.parentElement.remove(li);
  })
})