console.log("document has loded")

$(".overlay-base").hover(function() {
    var overlay = ($( this ).children());
    $(overlay).css('display', 'block')
}, function() {
    //mouse out
    var overlay = ($( this ).children());
    $(overlay).css('display', 'none')
});
