
  let position = 0;
  const 
  const SliderToShow = 1;
  const SliderToScroll = 1;
  const slader_containe = document.getElementsByClassName('slader_containe');
  const slider_track = $(".slider_track");
  const production_page_item = $(".production_page_item");
  const btn_prev = $(`.btn_prev`);
  const btn_next = $(".btn_next");
  const itemWidth = slader_containe.width() / SliderToShow;

  item.each(function (index, iten) {
      $(item).css({
        minWidth: itemWidthh,
      });
  });

  btn_prev.click(function() {
    console.log(`.btn_prev`);
  });

  btn_next.click(function() {
    console.log("btn_next");
  });




  var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var myList = document.getElementById("list");
var myNotes = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");

function addNote() {
    var newLi = document.createElement("li");
    newLi.innerHTML = "Новая задача!";
    newLi.className = "item";
    myList.appendChild(newLi);
    popup.style.display = "none";
}

function removeNote() {
    myList.removeChild(myNotes[0]);
    if (myNotes.length == 0) {
        popup.style.display = "block";
    }
}

function popupClose() {
    popup.style.display = "none";
}

btn1.addEventListener("click", addNote);
btn2.addEventListener("click", removeNote);
close.addEventListener("click", popupClose);

var name = prompt("Please enter your name", "");
var age = prompt("Please enter your age", "");
var sub = true;

test();

function test(){
    if (age >= 18 && sub) {
        alert("Hello " + name + ". Welcome!")
    }
    else {
        alert("Sorry " + name + " but you are so young!")
    }
}

 