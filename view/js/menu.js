var nav = true;
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    nav = false;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    nav = true;
}

function status_nav(status) {
    if (status == true) {
        openNav()
        console.log(status)
    } else {
        closeNav()
        console.log(status)
    }
}