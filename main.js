canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
rover_width=100
rover_height=100
rover_x=10
rover_y=10
imagesarray=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","mars.jpg"]
randomnumber=Math.floor(Math.random()*6)
console.log(randomnumber)
background_image=imagesarray[randomnumber]
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
function moveleft()
{
    if(rover_x>=0){
        rover_x=rover_x-10
        uploadbg()
        uploadrover()
    }
}
function moveright()
{
    if(rover_x<=700){
        rover_x=rover_x+10
        uploadbg()
        uploadrover()
    }
}
function moveup()
{
    if(rover_y>=0){
        rover_y=rover_y-10
        uploadbg()
        uploadrover()
    }
}
function movedown()
{
    if(rover_y<=500){
        rover_y=rover_y+10
        uploadbg()
        uploadrover()
    }
}