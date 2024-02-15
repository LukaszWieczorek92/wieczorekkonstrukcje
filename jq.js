// nav color change
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $("nav").addClass("black");

    }else{
        $("nav").removeClass("black");
    }
})
// buton slide to section about
 $(".textbox button").on("click", () => {
     $("html,body").animate({
        scrollTop: $(".about-us").offset().top - $("nav").outerHeight()
     },500);
 });
// logo slide back to top of the site
 $(".logo").on("click", () => {
     $("html,body").animate({
         scrollTop: $("body").offset().top -  $("nav").outerHeight()
     },500);
 });
// nav slide to section
$("nav a").on("click", function(){
    const goToSection = "#"+ $(this).attr("class");
    $("body,html").animate({
        scrollTop:$(goToSection).offset().top - $("nav").outerHeight()
    },500)

    
})

// hiding menu-mobile
$("ul li").on("click", () => {
$("nav ul").toggleClass("active");
$(".menu-mobile").toggleClass("active");


}) 


//textbox show up
$(document).ready(function () {
    $('.textbox').fadeIn(1500);
   // $('.textbox').show(2200);
    //$('.textbox').slideDown(1000);
});
 