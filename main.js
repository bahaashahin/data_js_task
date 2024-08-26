var btn = document.querySelector("#btn")
var div = document.querySelector("#div1")

data = [
  { id: 1, name: "Bahaa", desc: "i love u" },
  { id: 2, name: "Shahien", desc: "i love me" },
]
console.log(data)

function draw(items) {
  items.forEach(function(ele){
    // console.log(ele)
    div.innerHTML +=ele.name + " , "
  })
}
//draw(data)
window.onload= function(){
  draw(data)
}
btn.addEventListener("click", additem);

function additem() {
  var input = document.querySelector("#inp");
  if (input.value == "") {
    window.location.href = "index2.html";
  } else {
    var lastid = data.length ? data[data.length-1].id : 0;
    data.push({ id: ++lastid, name: input.value, desc: "new data" });
    var additems = data[data.length-1];
    div.innerHTML += additems.name;
    input.value = " ";
  }
}
