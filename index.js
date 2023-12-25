//sticky navbar
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
//responsive nav bar
function togglemenu() {
    const menutoggle = document.querySelector('.menutoggle');
    const navigation = document.querySelector('.navigation');
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
};
//light and dark mode 
let tog= document.getElementById("tog");
tog.onclick=function(){
    document.body.classList.toggle("dark-theme");
    document.body.style.transition='2s';
    if(document.body.classList.contains("dark-theme")){
        tog.src="images/sunb1.png";
    }
    else{
        tog.src="images/moon.png";
    }
}



