var nome = document.querySelector(".box");
var person = nome.querySelector("h1");
person.textContent = "Cesar Wen";
person.style.color = "#123456"
person.classList.add("uhuul")
console.log(nome);
alert("Horay alert")

var headers = document.querySelectorAll("h2");
console.log(headers);

for(var i = 0; i < headers.length; i++){
    console.log(i);
    if(i == 2){
        console.log("Hello!")
    }
}

d3.csv("/resourses/test.csv").then(function(data) {
    console.log(data[0]);
  });