$('.answer').map(function (index, item) {
    $(item).find('.r0 input[type=radio]').prop("checked", true);
});
for (var i = 0; i < 5; i++) {
    var num = Math.floor(Math.random() * 25) + 1;
    $('#q' + num).find('.r1 input[type=radio]').prop("checked", true);
}
$('.submitbtns input[type=submit]').click()