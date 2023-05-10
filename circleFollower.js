//Circle Animation//
var follower = document.querySelector(".follower")

document.addEventListener("mousemove",function(e){
    follower.style.top = e.pageY;
    follower.style.left = e.pageX;
})