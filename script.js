const tasks = JSON.parse(toDo);

tasks.forEach(task => {
    document.querySelector(".card-container").innerHTML +=
    `<div class="card col-lg-4 col-md-6 col-sm-12 my-2" style="width: 18rem;">
    <img src="${task.image}" class="card-img-top px-1 pt-4" alt="${task.taskName}">
    <div class="card-body">
      <h5 class="card-title">${task.taskName}</h5>
      <p class="card-text">${task.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Priority: <button type="button" class="btn-prio btn btn-sm btn-success"> ${task.importance}</button></li>
      <li class="list-group-item">Deadline: ${task.deadline}</li>
    </ul>
    <div class="card-body ms-auto">
      <button type="button" class="btn-d btn btn-sm btn-danger"><i class="bi bi-trash3"></i> Delete</button>
      <button type="button" class="btn-d btn btn-sm btn-success"><i class="bi bi-check-circle-fill"></i> Done</button>
    </div>
  </div>`

});

const prioBtns = document.querySelectorAll(".btn-prio");

// increase priority and change color
prioBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    // increase priority +1
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

const sortBtn = document.querySelector("")






// Done or Delete Button
// const btnD = document.querySelectorAll(".btn-d");

// btnD.forEach(function(btn) {
//     btn.addEventListener("click", function (event) {
//       console.log(event)
//     })
//   })

