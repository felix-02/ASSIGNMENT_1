function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
$('button').click(function setRandomColor() {
    $("[id=colorpad]").css("background-color", getRandomColor);
    $('[id=colorpad]').html(getRandomColor);
    $(function () {
        $('[id=colorpad]').toggle(
            function () { $(this).animate({ width: "300px",height:"300px" }, 500) },
            function () { $(this).animate({ width: "300px",height:"300px" }, 500); }
        );
    });

})

