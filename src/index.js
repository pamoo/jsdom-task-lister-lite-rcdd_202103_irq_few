document.addEventListener("DOMContentLoaded", () => {
  let d = new Date();
  document.getElementById("date").innerHTML = d.getFullYear()+"/"+(d.getMonth() + 1)+"/"+d.getDate();
  
  //creating a list after clicking on add
  function newElement() {
      let li = document.createElement("li");
      let inputValue = document.getElementById("txtinput").value;
      let txtnode = document.createTextNode(inputValue);
      li.appendChild(txtnode);
        document.getElementById("todolist").appendChild(li);
        document.getElementById("txtinput").value = "";
    } 
});
