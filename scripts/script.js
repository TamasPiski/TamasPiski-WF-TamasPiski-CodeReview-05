let sex = "all";
let agefrom = 0;
let ageto = 99;

function filter() {
    let men = document.getElementById("men")
    let women = document.getElementById("women")
    let other = document.getElementById("other")
    let all = document.getElementById("all")
    let go = document.getElementById("go")

    men.addEventListener("click",function(){
        sex = "male"
        showCandidates(sex,agefrom, ageto)
        selectDeselectFavourites()
    })
    women.addEventListener("click", function(){
        sex = "female"
        showCandidates(sex,agefrom, ageto)
        selectDeselectFavourites()
    })
    other.addEventListener("click", function(){
        sex = "other"
        showCandidates(sex,agefrom, ageto)
        selectDeselectFavourites()
    })
    all.addEventListener("click", function(){
        sex = "all"
        showCandidates(sex,agefrom, ageto)
        selectDeselectFavourites()
    })
    go.addEventListener("click",function(){
        agefrom = document.getElementById("agefrom").value
        ageto = document.getElementById("ageto").value
        showCandidates(sex,agefrom, ageto)
        selectDeselectFavourites()
    }) 
}

function showCandidates(sex,agefrom, ageto) {
    document.getElementById("overview").innerHTML = ""
    if (sex == "all"){
        for (let candidate of candidates) {
            if (candidate.age >= agefrom && candidate.age <= ageto){
                document.getElementById("overview").innerHTML += `
                <div class="card">
                    <img src="${candidate.img}" width="300" height="200">    
                    <span id="${candidate.id}" class="heart">&#10084</span>      
                    <p class="quote">${candidate.quote}</p>
                </div>
                `
                if (candidate.fav == "true"){
                document.getElementById(candidate.id).style.color = "red"
                }
            }
        }
    }
    if (sex == "male"){
        for (let candidate of candidates) {
            if (candidate.sex == "male") {
                if (candidate.age >= agefrom && candidate.age <= ageto){
                    document.getElementById("overview").innerHTML += `
                    <div class="card">
                        <img src="${candidate.img}" width="300" height="200">    
                        <span id="${candidate.id}" class="heart">&#10084</span>      
                        <p class="quote">${candidate.quote}</p>
                    </div>
                    `
                    if (candidate.fav == "true"){
                    document.getElementById(candidate.id).style.color = "red"
                    }
                }    
            }
        }  
    }
    if (sex == "female"){
        for (let candidate of candidates) {
            if (candidate.sex == "female") {
                if (candidate.age >= agefrom && candidate.age <= ageto){
                    document.getElementById("overview").innerHTML += `
                    <div class="card">
                        <img src="${candidate.img}" width="300" height="200">    
                        <span id="${candidate.id}" class="heart">&#10084</span>      
                        <p class="quote">${candidate.quote}</p>
                    </div>
                    `
                    if (candidate.fav == "true"){
                    document.getElementById(candidate.id).style.color = "red"
                    }
                }
            }
        }  
    }    
    if (sex == "other"){
        for (let candidate of candidates) {
            if (candidate.sex == "other") {
                if (candidate.age >= agefrom && candidate.age <= ageto){
                    document.getElementById("overview").innerHTML += `
                    <div class="card">
                        <img src="${candidate.img}" width="300" height="200">    
                        <span id="${candidate.id}" class="heart">&#10084</span>      
                        <p class="quote">${candidate.quote}</p>
                    </div>
                    `
                    if (candidate.fav == "true"){
                    document.getElementById(candidate.id).style.color = "red"
                    }
                }    
          }
        }  
    }        
}

function showFavourites() {
    document.getElementById("favourites").innerHTML = ""
    for (candidate of candidates) {
        if (candidate.fav == "true") {
            document.getElementById("favourites").innerHTML +=`
            <div class="fav">
            <img src="${candidate.img}" width="300" height="200">         
                <p class="info">
                    Name: ${candidate.name}<br>
                    Age: ${candidate.age}<br>
                    Location: ${candidate.location}<br>
                    Hobbies: ${candidate.hobbies}<br>
                    Music: ${candidate.music}<br>
                    <button id="${candidate.id}">Remove</button>
                </p>
            </div>
            `
        }
    }
    removeFavourites()
} 

function selectDeselectFavourites() {
    let hearts = document.querySelectorAll("span");
    for (heart of hearts) {
        heart.addEventListener("click", function(event) {
            let canId = (event.target.getAttribute("id"))
            for (let candidate of candidates) {
                if (candidate.id == canId && candidate.fav == "false" ) {
                    event.target.style.color= "red" 
                    candidate.fav = "true"
                    showFavourites()
                } else if (candidate.id == canId && candidate.fav == "true") {
                    event.target.style.color= "black" 
                    candidate.fav = "false"
                    showFavourites()
                }
            }   
        })
    }
}

function removeFavourites() {
    buttons = document.querySelectorAll("button")
    spans = document.querySelectorAll("span")
    for (let button of buttons) {
        button.addEventListener("click", function(event){
            let canId = event.target.getAttribute("id")
            for (let candidate of candidates) {
                if (candidate.id == canId && candidate.fav == "true" ) {
                    for (let span of spans) {
                        if (span.getAttribute("id") == canId) {
                            console.log(canId)
                            span.style.color= "black" 
                        }
                    }
                    candidate.fav = "false"
                    showFavourites()
                }
            }
        })
    }
}

showCandidates(sex, agefrom, ageto)
selectDeselectFavourites()
filter()



