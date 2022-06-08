canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
rover_width=100
rover_height=100
rover_x=10
rover_y=10
background_image="mars.jpg"
rover_image="rover.png"
function add(){
    bg_img=new Image()
    bg_img.onload=uploadbg
    bg_img.src=background_image
    r_img=new Image()
    r_img.onload=uploadrover
    r_img.src=rover_image
}
function uploadbg(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(r_img,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypress=e.keyCode
    console.log(keypress)
if(keypress=='37'){
    moveleft()
}
if(keypress=='38'){
    moveup()
}
if(keypress=='39'){
    moveright()
}
if(keypress=='40'){
    movedown()
}
}
