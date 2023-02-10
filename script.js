const tasks = JSON.parse(toDo);
// col-lg-4 col-md-6 col-sm-12 my-2
tasks.forEach(task => {
    document.querySelector(".card-container").innerHTML +=
    `  
  <div class="wrapper">
    <div class="card my-3" style="width: 18rem;">
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
        <button type="button" class="btn-d btn btn-sm btn-primary"><i class="bi bi-check-circle-fill"></i> Done</button>
      </div>
    </div>
  </div>
  `
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

const sortBtn = document.querySelector(".sort-btn");

sortBtn.addEventListener("click", function () {
  let innerPrio = document.querySelectorAll(".btn-prio");
  let arrayPrio = [];
  for (btn of innerPrio) {
    console.log(btn.innerHTML);
    arrayPrio.push(btn.parentElement.parentElement.parentElement.parentElement.innerHTML);
  }
  let test = document.querySelector(".test");
  test.innerHTML = arrayPrio[0];
})

// Sort
function sorter(array){
  let swap, done = false, swapped;
  // is it done?
  while (!done){
    swapped = 0;
    for(i=1; i < array.length; i++){

      // compare
      if (array[i-1] > array[i]){
        // swap
        swap = array[i];
        array[i] = array[i-1];
        array[i-1] = swap;
        swapped = 1;
      };
    };
    if (swapped == 0) {
      done = true;
    }
  }
  return array;
}

let numb = [9,8,7,5,6,2,1]

function sorter(array){
  let swap, done = false, swapped;
  // is it done?
  while (!done){
    swapped = 0;
    for(i=1; i < array.length; i++){

      // compare
      if (array[i-1] > array[i]){
        // swap
        swap = array[i];
        array[i] = array[i-1];
        array[i-1] = swap;
        swapped = 1;
      };
    };
    if (swapped == 0) {
      done = true;
    }
  }
  return array;
}

console.log(sorter(numb));

// Done or Delete Button
// const btnD = document.querySelectorAll(".btn-d");

// btnD.forEach(function(btn) {
//     btn.addEventListener("click", function (event) {
//       console.log(event)
//     })
//   })

