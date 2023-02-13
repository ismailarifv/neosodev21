let input = document.getElementById('favcolor')
let input1 = document.getElementById("favcolor1")


    input.addEventListener('input', function(event){
    //Varsayılan değerleri görmezden gel
    
    document.body.style.backgroundColor = event.target.value
    document.querySelector(".card").style.backgroundColor= event.target.value
    
    
})  
    input1.addEventListener('input', function(e){
    //Varsayılan değerleri görmezden gel
    
    document.querySelector(".uzunyazi").style.color = e.target.value
    document.querySelector(".KAA").style.color = e.target.value
    
    
    
    
})

 
$(function() {  
   $( "#ranklarinici" ).sortable();  
});  

let fotolar=["./rutbe1.png","./rutbe2.png","./rutbe3.png","./rutbe4.png","./rutbe5.png" ]
let ranks = document.querySelectorAll(".ranks")
let myModal = document.getElementById("myModal")
let duzen = document.querySelectorAll(".duzen")
let span = document.getElementsByClassName("close")[0];
let kapat = document.getElementById("kapat")
let onayla = document.getElementById("onayla")
let kullaniciisim = document.getElementById("kullaniciismi")
let kullanici = document.querySelectorAll(".isimler")
let kullanicilar = document.querySelectorAll(".kullanici")
let pic = document.querySelectorAll(".pic")
let modalRankPic=document.querySelectorAll(".modalpic")
let alertss= document.querySelector(".alertss")
let alerts= document.querySelector(".alerts")
let duzenimsi = document.querySelectorAll(".duzenimsi")


for (let i = 0; i < duzen.length; i++) {
    duzen[i].addEventListener("click",function(e){
        myModal.style.display = "block"
        document.body.classList.toggle("white");
        document.querySelector(".card").classList.toggle("white");
        document.querySelector(".uzunyazi").classList.toggle("black");
        document.querySelector(".KAA").classList.toggle("black");
        kullaniciisim.innerHTML= kullanici[i].innerHTML
        console.log(e.target.name)
        if(e.target.name==0){
            
            modalRankPic.forEach(element=> {
                element.addEventListener("click",function(event){
                    alertss.style.display = "block"
                    alerts.style.display="none"
                    onayla.addEventListener("click",function (){
                                alertss.style.display = "none"
                                alerts.style.display="block"
                                pic[0].src= event.target.src
                                
                            });
                });
                
            });
        }
        if(e.target.name==1){
            
            modalRankPic.forEach(element=> {
                element.addEventListener("click",function(event){
                    alertss.style.display = "block"
                    alerts.style.display="none"
                    onayla.addEventListener("click",function (){
                                alertss.style.display = "none"
                                alerts.style.display="block"
                                pic[1].src= event.target.src
                                
                            });
                });
                
            });
        }
        if(e.target.name==2){
            
            modalRankPic.forEach(element=> {
                element.addEventListener("click",function(event){
                    alertss.style.display = "block"
                    alerts.style.display="none"
                    onayla.addEventListener("click",function (){
                                alertss.style.display = "none"
                                alerts.style.display="block"
                                pic[2].src= event.target.src
                                
                            });
                });
                
            });
        }
        if(e.target.name==3){
            
            modalRankPic.forEach(element=> {
                element.addEventListener("click",function(event){
                    alertss.style.display = "block"
                    alerts.style.display="none"
                    onayla.addEventListener("click",function (){
                                alertss.style.display = "none"
                                alerts.style.display="block"
                                pic[3].src= event.target.src
                                
                            });
                });
                
            });
        }
        if(e.target.name==4){
            
            modalRankPic.forEach(element=> {
                element.addEventListener("click",function(event){
                    alertss.style.display = "block"
                    alerts.style.display="none"
                    onayla.addEventListener("click",function (){
                                alertss.style.display = "none"
                                alerts.style.display="block"
                                pic[4].src= event.target.src
                                
                            });
                });
                
            });
        };

    });
 };

span.addEventListener("click",function () {
    alertss.style.display = "none"
    alerts.style.display="none"
    myModal.style.display = "none"
    document.body.classList.toggle("white");
        document.querySelector(".card").classList.toggle("white");
        document.querySelector(".uzunyazi").classList.toggle("black");
        document.querySelector(".KAA").classList.toggle("black");
})
kapat.addEventListener("click",function () {
    alertss.style.display = "none"
    alerts.style.display="none"
    myModal.style.display = "none"
    document.body.classList.toggle("white");
        document.querySelector(".card").classList.toggle("white");
        document.querySelector(".uzunyazi").classList.toggle("black");
        document.querySelector(".KAA").classList.toggle("black");
})  
  


