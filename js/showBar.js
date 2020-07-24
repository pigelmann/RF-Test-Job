

// Функция показа-скрытия панелей (поиск, избранное, история поиска)
function showBar(myId) {
  // Тут хотел выключить другие панели, но что-то не получилось

  // var classNames = div.attr("class").match(/[\w-]*bar[\w-]*/g);
  // var myBarId = myId + "-bar";
  // for (i=0; i<3; i++) {
  //   if (classNames[i] != myBarId) {
  //     document.querySelector(classNames[i]).style.display = "none";
  //   }
  // }
  var myBarId = "." + myId + "-bar";
  var myMarkId = "." + myId + "-mark";
  var myBar = document.querySelector(myBarId);
  var myMark = document.querySelector(myMarkId);
  var currentState = myBar.style.display;
  if (currentState === "none") {
    myBar.style.display = "block";
    myMark.style.display = "block";

  } else {
    myBar.style.display = "none";
  }
}


// Показ черточек под кнопками при наведении и/или открытой соответствующей панели
function showMark(myId) {
  
  // Только на декстопе
  if (document.documentElement.clientWidth > 600) {
    var myBarId = "." + myId + "-bar";
    var myMarkId = "." + myId + "-mark";
    var myBar = document.querySelector(myBarId);
    var myMark = document.querySelector(myMarkId);
    if (myBar.style.display === "none") {
      myMark.style.display = "block";
    }
  }
}


// Скрытие черточек под кнопками
function hideMark(myId) {
  var myBarId = "." + myId + "-bar";
  var myMarkId = "." + myId + "-mark";
  var myBar = document.querySelector(myBarId);
  var myMark = document.querySelector(myMarkId);
  if (myBar.style.display === "none") {
    myMark.style.display = "none";
  }
}


function changeLayout(myLayout) {
  var myContent = document.querySelector(".photos-list");
  var myContentCol = document.querySelectorAll(".photos-list__col");
  var myContentItem = document.querySelectorAll(".photos-list__item");
  if (myLayout === "rows"){
    myContent.style.display = "block";
      for(i=0; i<myContentCol.length; i++) {
        myContentCol[i].style.width = "100%";
      }
      for(i=0; i<myContentItem.length; i++) {
        myContentItem[i].style.width = "100%";
      }
  }

  if (myLayout === "grid"){
    myContent.style.display = "flex";
    myContent.style.justifyContent = "space-between";
    for(i=0; i<myContentCol.length; i++) {
      if (document.documentElement.clientWidth > 1540) {
        myContentCol[i].style.width = "476px";
      }
      if (document.documentElement.clientWidth <= 1540) {
        myContentCol[i].style.width = "32%";
      }
    }
  }
}
