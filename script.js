// parse data.json
const tasks = JSON.parse(toDo);

const cardContainer = document.querySelector(".card-container");

tasks.forEach(task => {
  // create 1 card for each task
    cardContainer.innerHTML +=
`
    <div class="wrapper">
    <div class="card my-3" style="width: 18rem;">
      <img src="${task.image}" class="card-img-top px-1 pt-4" alt="${task.taskName}">
      <div class="card-body">
        <h5 class="card-title">${task.taskName}</h5>
        <p class="card-text">${task.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="bi bi-exclamation-triangle-fill"></i> Priority: <button type="button" class="btn-prio btn btn-sm btn-success"> ${task.importance}</button></li>
        <li class="list-group-item"><i class="bi bi-calendar-x-fill"></i> Deadline: ${task.deadline}</li>
      </ul>
      <div class="card-body ms-auto">
        <button type="button" class="btn-d btn btn-sm btn-danger"><i class="bi bi-trash3"></i> Delete</button>
        <button type="button" class="btn-d btn btn-sm btn-primary"><i class="bi bi-check-circle-fill"></i> Done</button>
      </div>
    </div>
    </div>
`
});

// Sort
const sortBtn = document.querySelector(".sort-btn");

sortBtn.addEventListener("click", e => {
  // sort inner HTML on the basis of priority and add it to an array
  let innerPrio = document.querySelectorAll(".btn-prio");  
  let arrayPrioStr = [];
  // check for every priority 0 => 5, for every cards priority
  for (let i = 0; i < 6; i++) {
    for (btn of innerPrio) {
      if (btn.innerHTML == 5-i) {
        arrayPrioStr.push(btn.parentElement.parentElement.parentElement.parentElement.innerHTML);
      };
    }
  }
  console.log(arrayPrioStr);
  // emtpy the card-container and fill with sorted content
  cardContainer.innerText = null;
  for (i in arrayPrioStr){
    cardContainer.innerHTML += 
    `<div>
    ${arrayPrioStr[i]}
    </div>`
}});

const prioBtns = document.querySelectorAll(".btn-prio");

// increase priority and change color
prioBtns.forEach(function (btn) {
  btn.addEventListener("click", e => {
    // increase priority +1
    console.log(btn);
    btn.innerHTML ++;
    if (btn.innerHTML > 5) {
      // stop increasing priority at 5
      btn.innerHTML = 5;
    } else if (btn.innerHTML >= 4) {
      // change to red/danger if priority 4+
      btn.classList.remove("btn-warning");
      btn.classList.add("btn-danger");
    } else if (btn.innerHTML >= 2) {
      // change to yellow/warning if priority 2+
      btn.classList.remove("btn-success");
      btn.classList.add("btn-warning");
    }
})
})

// Done or Delete Button
const btnD = document.querySelectorAll(".btn-d");

btnD.forEach(function(btn) {
    btn.addEventListener("click", e => {
      let cardEventTarget = e.target.parentElement.parentElement;
      // add css class hidden to the parent.parent Element which get clicked
      cardEventTarget.classList.add("hidden");
    })
  })







// Ignore !

  // for (btn of innerPrio) {
  //   if (btn.innerHTML == 5) {
  //     arrayPrioStr.push(btn.parentElement.parentElement.parentElement.parentElement.innerHTML);
  //   }
  // }
  // for (btn of innerPrio) {
  //   if (btn.innerHTML == 4) {
  //     arrayPrioStr.push(btn.parentElement.parentElement.parentElement.parentElement.innerHTML);
  //   }
  // }
  // for (btn of innerPrio) {
  //   if (btn.innerHTML == 3) {
  //     arrayPrioStr.push(btn.parentElement.parentElement.parentElement.parentElement.innerHTML);
  //   }
  // }
  // for (btn of innerPrio) {
  //   if (btn.innerHTML == 2) {
  //     arrayPrioStr.push(btn.parentElement.parentElement.parentElement.parentElement.innerHTML);
  //   }
  // }
  // for (btn of innerPrio) {
  //   if (btn.innerHTML == 1) {
  //     arrayPrioStr.push(btn.parentElement.parentElement.parentElement.parentElement.innerHTML);
  //   }
  // }
  // for (btn of innerPrio) {
  //   if (btn.innerHTML == 0) {
  //     arrayPrioStr.push(btn.parentElement.parentElement.parentElement.parentElement.innerHTML);
  //   }
  // }