let sensitivity = 0.003; //마우스휠 감도 조정
window.addEventListener("wheel", function(event){
    getBlurred(event.deltaY * sensitivity);
    
});
window.addEventListener("wheel", function(event){
    except.style.filter = 'none';
});

let text = document.querySelector("#getblurred");
// let except = document.querySelector("#except");
var wheelval = 0;

function getBlurred(wheel) {
    wheelval += wheel
    if (wheelval > 15) { 
        text.style.filter = 'blur('+15+"px)"; 
        // except.innerHTML = "&nbsp;&nbsp;&nbsp;";
        }
    else if (wheelval < 0) { 
        text.style.filter = 'blur('+0+"px)"; 
        }
    else { 
        except.innerHTML = "&nbsp;&nbsp;&nbsp;";
        text.style.filter = 'blur('+wheelval+"px)";}
        
}




//button hover&click event
let button = document.getElementById("button");

button.onmouseenter = function() { //버튼 밖에서 안으로 마우스가 올라왔을 떄
    button.innerHTML = "(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k)";
};
button.onpointerleave = function() { //버튼 안에서 밖으로 마우스가 떠났을 때
    button.innerHTML = '(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;back)';
}
button.onclick = function() { //버튼을 클릭했을 때
    button.innerHTML = '(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b<span style="color:red;">ac</span>k)';
    location.href='index.html';
}