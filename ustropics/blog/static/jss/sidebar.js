function openNav() {
  document.getElementById("mySidenav").style.width = "22%";
  document.getElementById("main").style.marginLeft = "22%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.style.display == 'block') {
    e.style.display = 'none';
    document.getElementById('sidebar_content_wrapper').style.height = "26%";
  }
  else {
    e.style.display = 'block';
    document.getElementById('sidebar_content_wrapper').style.height = "13%";
  }
}

function changeClass() {
  document.getElementById('sidebar_button3').classList.toggle("sidebar_button_active");
}

$("div").click(function(){
   window.location=$(this).find("a").attr("href"); return false;
});
