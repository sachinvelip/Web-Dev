const add = document.querySelector(".add");
const inpt = document.querySelector("#inpt");
const list = document.querySelector(".list");
const done = document.querySelector(".mark-done");

// window.onload = ()=> {
//     inpt.focus();
//   }

inpt.focus();

add.addEventListener("click", () => {
  if (inpt.value === "") alert("Please enter the Task");
  else addTask();
  

  // editTask();
});
inpt.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        if (inpt.value === "") alert("Please enter the Task");
        else addTask();
         
        
      }
  });

function addTask() {
  const newDiv = document.createElement("div");
  const date = new Date();
  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentDay}/${currentMonth}/${currentYear}`;

  newDiv.style = `
          display:flex;
          justify-content:space-between;
          margin:11px 0px;
          background-color: #c1f9e6;
          padding:5px;
          border-radius:7px;
      `;
  newDiv.innerHTML = `
      <div style="display:flex;flex-direction:column;">
      <p style="color:#166161; font-size:22px;padding-right: 4px;">${inpt.value}</p>
      <span style="font-size:12px;color:#166161;">${currentDate}</span>
      </div>
      <div style="display:flex;gap:2px;">

      <button onclick="deleteTask()" style="padding:5px;font-size:15px;color:#bb2d20;border:none;height:40px;border-radius:6px;cursor:pointer;">Delete</button>
      <button onclick="doneTask()" style="padding:5px;font-size:15px;color:#34ff06;border:none ;height:40px;border-radius:6px;cursor:pointer;">Done</button>
      
      </div>
  
      `;
  //   <button onclick="editTask()" style="padding:5px;font-size:15px;color:#166161;border:none">Edit</button>

  list.appendChild(newDiv);
  inpt.value = "";
}

function deleteTask() {
  list.addEventListener("click", (e) => {
    // console.log( e.target.parentElement.parentElement);

    e.target.parentElement.parentElement.remove();
  });
  done.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove();
  });
}

function doneTask() {
  const date = new Date();
  let currentDay = String(date.getDate()).padStart(2, "0");//if day <10 then 09,08...
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentDay}/${currentMonth}/${currentYear}`;
  list.addEventListener("click", (e) => {
    const mark = e.target.parentElement.parentElement;
    const text=mark.children[0].children[0].innerHTML;
    const createdDate=mark.children[0].children[1].innerHTML;
    mark.children[0].innerHTML=`
      <s>
      <p style="color:#166161; font-size:22px;">${text}</p>
      <span style="font-size:12px;color:#166161;">${createdDate}-${currentDate}</span>
      </s>
    `;
    console.log(mark.children[0].innerHTML);
    e.target.parentElement.parentElement.remove();
    e.target.parentElement.children[1].remove();

    done.appendChild(mark);
  });
}



// function saveTask(){
//     localStorage.setItem("data",list.innerHTML);
//     localStorage.setItem("data1",done.innerHTML);
// }

// function getTask(){
//     list.innerHTML=localStorage.getItem("data");
//     done.innerHTML=localStorage.getItem("data1");
// }
// getTask();
