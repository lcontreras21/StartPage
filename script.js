function clock() {
	var date = new Date();
	var hours = ("0" + date.getHours()).slice(-2);
	var minutes = ("0" + date.getMinutes()).slice(-2);
    $('#clock').html(hours + ':' + minutes);
	setTimeout(clock, 500);
}
clock()

// Prevent Email dropdown from closing
$('.Emails .dropdown-menu').on('click', function (e) {
    e.stopPropagation();
});
