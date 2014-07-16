function generateTableRowFromSpeaker(speaker) {
	var tableRow = "<tr class='entry'>";
	tableRow += "<td class='number'>"+speaker.number+"</td>";
	tableRow += "<td class='name'>"+speaker.name;
	tableRow += "</td></tr>";
	
	if (speaker.replies.length > 0) {
		speaker.replies.forEach(function(entry) {
			tableRow += "<tr class='reply'><td class='reply-arrow'>&#8627;</td><td class='replies'>" 
			tableRow += entry.number+" "+entry.name+"</td>";
			tableRow += "</tr>";
		});
	}


	$("#speakerList").find('tbody').append(tableRow);
}

function parseSpeakerQueue(data) {
	$("#speakerList tr").remove();
	data.forEach(generateTableRowFromSpeaker);
}

function setSubject(data) {
	$("h2").text(data);
}

$(document).ready(function () {
	window.setInterval(function() {
		$.get(SERVER_URL + "/speakerList", parseSpeakerQueue);
		$.get(SERVER_URL + "/subject", setSubject)
	}, 1000);
});