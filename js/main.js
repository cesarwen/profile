var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/cesarwen/profile/master/resourses/test.json");

xhr.addEventListener("load", function() {
    
    var resposta = xhr.responseText;
    var posts = JSON.parse(resposta);
    posts.forEach(function(post) {
        var post_section = document.querySelector("#up_to");
        var temp = buildPost(post);
        console.log(posts)
        console.log(temp)
        post_section.appendChild(temp);
    });
});

xhr.send();

function buildPost(post){
    
    var post_block = document.createElement("div");
    post_block.classList.add("post");
    
    post_block.appendChild(buildImage(post.nome_imagem));
    post_block.appendChild(buildBody(post.title, post.content, post.endnote));
    

    return(post_block)
}

function buildImage(resource){
    var path = "resourses/";
    var div = document.createElement("div");
    div.classList.add("thumbnail");

    var img = document.createElement("img");
    img.id  = "img";
    img.src = path+resource;

    div.appendChild(img);

    return(div)
}

function buildBody(title, content, note){
    var path = "resourses/";
    var div = document.createElement("div");
    div.classList.add("thumbnail");

    var img = document.createElement("img");
    img.id  = "img";
    img.src = path+resource;

    div.appendChild(img);

    return(div)
}