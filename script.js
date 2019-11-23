const btn = document.querySelector(".btn-click");
let number = 1;
// let activenumber = 5;  -- drugi sposób

const addElement = () => {
  const div = document.createElement('div');
  div.textContent = number;
  if(number % 5 == 0) {
    div.classList.add("circle");
  }
  //if (activeNumber == 5) { -- drugi sposób
    // activeNumber = 0;
    // div.classList.add("circle");
  // }
  document.body.appendChild(div);
  number++;
  // activenumber++; -- drugi sposób
}

btn.addEventListener("click", addElement);