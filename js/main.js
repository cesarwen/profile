var nome = document.querySelector(".box");
var person = nome.querySelector("h1");
person.textContent = "Cesar Wen";
person.style.color = "#123456"
person.classList.add("uhuul")
console.log(nome);


var headers = document.querySelectorAll("h2");
console.log(headers);

for (var i = 0; i < headers.length; i++) {
    console.log(i);
    if (i == 2) {
        console.log("Hello!")
    }
}

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/cesarwen/profile/master/resourses/test.json");

xhr.addEventListener("load", function() {

    var resposta = xhr.responseText;
    var posts = JSON.parse(resposta);
    posts.forEach(function(post) {
        console.log(post.title);
        
    });
});

xhr.send();
