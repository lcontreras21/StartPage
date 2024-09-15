function clock() {
	var date = new Date();
	var hours = ("0" + date.getHours()).slice(-2);
	var minutes = ("0" + date.getMinutes()).slice(-2);
    $('.clock p').html(hours + ':' + minutes);
	setTimeout(clock, 500);
}
clock()

// Prevent dropdown from closing
// TODO make this a tag of some sort assignable per dropdown
$('.dropdown-menu').on('click', function (e) {
    e.stopPropagation();
});
