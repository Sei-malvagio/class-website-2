

/*
function ppks() {
  const masukan = document.getElementById("nyimpen").value
  var teks = masukan;
  var bob = {
  "judul": teks
}
  document.getElementById('show').innerHTML = bob.judul;
  console.log(teks)
}

$(document).ready(function() {
  $.getJSON("database.json", function(data) {
    console.log(data)
    $('.title').html(data.title);
    $('.desc').html(data.desc);
  }).fail(function() {
    console.log("err")
  });
});*/


function search_engine() {
    let input = document.getElementById('nyari').value
    input=input.toLowerCase();
    let result = document.getElementsByClassName('box');
      
    for (i = 0; i < result.length; i++) { 
        if (!result[i].innerHTML.toLowerCase().includes(input)) {
            result[i].style.display="none";
        }
        else {
            result[i].style.display="list-item";
            result[i].style.color="white";
        } console.log("src")
    }
}

let currentSlide = 0;

function startSlider() {
  let imageCount = document.querySelectorAll(".slide");
  
  let imageCount2 = document.querySelectorAll(".slide2");
  
  let images = document.querySelector(".sliders");
  
  let images_android = document.querySelector(".sliders2");

  if (imageCount.length === 0) {
    imageCount = document.querySelectorAll(".slide");
    imageCount2 = document.querySelectorAll(".slide2");
    images.style.transform = `translateX(0px)`;
    images_android.style.transform = `translateX(0px)`;
    return;
  }

  images.style.transform = `translateX(-${currentSlide * 430}px)`;
  
  images_android.style.transform = `translateX(-${currentSlide * 340}px)`;

  if (currentSlide === imageCount.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
}

setInterval(() => {
  startSlider();
  console.log('Aku ngeselide bang')
}, 3000); //4 detik per slide