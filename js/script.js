console.log('Warsztat - (jQuery) Pobierz dane po kliknięciu przycisku');

$(document).ready(function () {
	// wariant 1
	// $('#get-data').click(function(){
	// $.get('https://akademia108.pl/api/ajax/get-post.php')
	//     .done(function(data) {
	//         let pId = $('<p></p>').text(`Post ID: ${data.id}`);
	//         let pUserId = $('<p></p>').text(`User ID: ${data.userid}`);
	//         let pTitleId = $('<p></p>').text(`Title: ${data.title}`);
	//         let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
	//         let hr = $('<hr />');
	//         let jqBody = $('body');
	//         jqBody.append(pId);
	//         jqBody.append(pUserId);
	//         jqBody.append(pTitleId);
	//         jqBody.append(pBody);
	//         jqBody.append(hr);
	//     })
	//     .fail(function(error){
	//         console.log(error);
	//     });
});

//wariant 2
$('#get-data').click(function () {
	$.getJSON('https://akademia108.pl/api/ajax/get-post.php')
		.done(function (data) {
			let pId = $('<p></p>').text(`Post ID: ${data.id}`);
			let pUserId = $('<p></p>').text(`User ID: ${data.userid}`);
			let pTitleId = $('<p></p>').text(`Title: ${data.title}`);
			let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
			let hr = $('<hr />');

			let jqBody = $('body');

			jqBody.append(pId);
			jqBody.append(pUserId);
			jqBody.append(pTitleId);
			jqBody.append(pBody);
			jqBody.append(hr);
		})
		.fail(function (error) {
			console.log(error);
		});
});
