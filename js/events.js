const events = [

{
date: "March 6",
title: "Missile strike reported in Tel Aviv"
},

{
date: "March 5",
title: "Airstrike reported near Tehran"
}

];

const timeline = document.getElementById("timeline");

events.forEach(event => {

const div = document.createElement("div");
div.className = "event";

div.innerHTML =
"<h3>" + event.date + "</h3>" +
"<p>" + event.title + "</p>";

timeline.appendChild(div);

});