

function box1click()
{   
    document.getElementById("box3").innerHTML = "3<br>Opps something went wrong?";

    let i = 0
    box2.style.backgroundColor = `green`;
    setInterval(function(){ 
        if(i == 0)
            box2.style.backgroundColor = `yellow`;
        if(i == 1)
            box2.style.backgroundColor = `blue`;
        if(i == 2)
            box2.style.backgroundColor = `green`;
        i++;
        if(i == 3)
            i = 0;
    }, 3000);
}
let i = 0;
const colors = ["purple", "skyblue", "pink", "cyan", "black"];

document.addEventListener("keydown",checkKey)

function checkKey(e){
   
    // check if any arrow key clicked
    if(e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40'){
        let box4 = document.getElementById("box4");
        box4.style.backgroundColor = `black`;

        //if up and right key for next color
        if(e.keyCode == '38' || e.keyCode == '39'){
            if(i == 5)
                i = 0;
            box4.style.backgroundColor = `${colors[i]}`;
            i++;
        }

        // if up and right key for previous color
        if(e.keyCode == '37' || e.keyCode == '40'){
            if(i == 5)
                i = 0;
            box4.style.backgroundColor = `${colors[i]}`;
            i++;
        }
        
    }
}
setInterval(function(){ 
    if(i == 5)
        i = 0;
    box4.style.backgroundColor = `${colors[i]}`;
    i++;
}, 5000);