$(document).ready(function(){
    console.log("Ready")
    $("img").click(function(){
        var src = $(this).attr("alt-src")
        $(this).attr("alt-src", $(this).attr("src")) 
        $(this).attr("src", src)
    })
})