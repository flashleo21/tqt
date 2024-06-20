let gameWidth = 400;
let counter = 2;
function stopSliding(slider1, slider2, sliderB4){
    let btn = document.getElementById("btn");
    let slider1 = document.getElementById(slider1);
    let slider2 = document.getElementById(slider2);
    let sliderB4 = document.getElementById(sliderB4);
    let left = window.getComputedStyle(slider1).getPropertyValue("left");
    slider1.classList.remove("animate");
    slider1.style.left = left;
    
    let width = parseFloat(window.getComputedStyle(slider1).getPropertyValue("width"));
    let left1 = parseFloat(window.getComputedStyle(slider1).getPropertyValue("left"));
    let left2 = parseFloat(window.getComputedStyle(sliderB4).getPropertyValue("left"));
    let difference = left1 - left2;
    let absDifference = Math.abs(left1 - left2);
    if(difference>width||difference<-width){
        document.getElementById("restart").style.display = "block";
        let scoreStr = "Score:";
        let scoreMinusOne = counter-2;
        let score = scoreStr.concat(scoreMinusOne);
        btn.setAttribute("onclick", "");
        alert(score);
        Location.reload();
    }
    let offset = width - absDifference;
    let px = "px";
    let offstring = offset.toString();
    let theWidth = offstring.concat(px);
    
    let str1 = "stopSliding('slider";
    let str2 = counter;
    let str3 = "','slider";
    let str4 = counter+1;
    let str5 = "','slider";
    let str6 = counter-1;
    let str7 = "')";
    let str8 = str1.concat(str2, str3, str4, str5, str6, str7);
    btn.setAttribute("onclick",str8);
    if(difference>0){
        let newleft = left1 + absDifference;
    }else{
        let newleft = left1 - difference;
    }
    let theleft = newleft.toString();
    let newnewleft = theleft.concat(px);
    slider1.style.width = theWidth; 
    if(difference<0){
        slider1.style.left = newnewleft;
    }
    slider2.style.width = theWidth;
    slider2.style.visibility = "visible";
    gameWidth = gameWidth + absDifference;
    document.documentElement.style.setProperty('--width', gameWidth + "px");
    counter++;
}