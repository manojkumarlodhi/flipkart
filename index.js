function d1(img){
    
    img.style.transform ="scale(1.2)"
    img.style.transition="transform 0.7s"
}
function d2(img){
   
    img.style.transform ="scale(1)"
    img.style.transition="transform 0.7s"
}
function k(){
   let im = document.querySelector(".imgd")
   im.src="https://rukminim2.flixcart.com/www/2140/1460/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=60"
}
function k1(){
   let im = document.querySelector(".imgd")
   im.src="https://rukminim2.flixcart.com/www/2140/1460/promos/15/09/2023/9b08f194-51e5-4e6a-a052-f5f91d75b8a0.jpg?q=60"
}
function run(){
    let desing = `
    <div class="drop">
        <div class="drop1">
           <a href="">
             <p>New Customer?</p>
            <span>
                <p>Sign Up</p>
            </span>
           </a>
        </div>
        <hr>
        <div>
            <a href="">
                <i class="fa-regular fa-circle-user"></i>
            <span>My Profile</span>
            </a>
        </div>
        <div>
            <a href="">
                <i class="fas fa-box"></i>
                <span>Orders</span>
            </a>
        </div>
         <div>
            <a href="">
                <i class="fas fa-heart"></i>
                <span>Wishlist</span>
            </a>
        </div>
        <div>
            <a href="">
                <i class="fas fa-gift"></i>
                <span>Rewards</span>
            </a>
        </div>
        <div>
            <a href="">
                <i class="fas fa-credit-card"></i>
                <span>Gift Cards</span>
            </a>
        </div>
    </div>
    `
    let output=document.querySelector("#output")
    output.innerHTML = desing
}
function g(){
    let desing =``
    let output = document.querySelector("#output")
    output.innerHTML =desing
}

function th(){
    let des= `
    <div class="drop-dowm">
        <div>
            <a href="">
                <i class="fa-regular fa-bell"></i>
                <span><p>Notification Preferences</p></span>
            </a>
        </div>
        <div>
            <a href="">
                <i class="fa-solid fa-headphones"></i>
                <span><p>24x7 Customer Care</p></span>
            </a>
        </div>
        <div>
            <a href="">
                <i class="fa-solid fa-bullhorn ad-icon"></i>
                <span><p>Advertise</p></span>
            </a>
        </div>
        <div>
            <a href="">
                <i class="fa-solid fa-download"></i>
                <span><p>Download App</p></span>
            </a>
        </div>
    </div>
    `
   let ou = document.querySelector("#ot") 
   ou.innerHTML=des
}
function thr(){
    let des=``
    let ou = document.querySelector("#ot") 
    ou.innerHTML=des

}


let count= 0
setInterval(()=>{
    if(count==0){
    let slide = document.querySelector('.slider')
    slide.style.marginLeft="-100%"
    slide.style.transition = "margin-left 1s"
    count = count+1
    }
     else if(count==1){
    let slide = document.querySelector('.slider')
   slide.style.marginLeft="-200%"
    slide.style.transition = "margin-left 1s"
    count= count+1
    }
    else if(count==2){
    let slide = document.querySelector('.slider')
    slide.style.marginLeft="-100%"
    slide.style.transition = "margin-left 1s"
    count= count+1
    }
    else if(count==3){
    let slide = document.querySelector('.slider')
    slide.style.marginLeft="0px"
    slide.style.transition = "margin-left 1s"
    count= 0
    }
},3000)