---
title : "Schedule"
type: "calendar"
layout: "single"
---

<script>
	document.addEventListener('DOMContentLoaded', function() {
	 var calendarEl = document.getElementById('calendar');

	 var calendar = new FullCalendar.Calendar(calendarEl, {
	   initialView: 'dayGridMonth',
	   headerToolbar: {
	     left: 'prev,next today',
	     center: 'title',
	     right: 'dayGridMonth,timeGridWeek,timeGridDay'
	   },
	   events: [
	     {
	       title: 'Meeting 1',
	       url: '/fullcalendar/main.js',
	       start: '2022-01-14'
	     },
	     {
	       title: 'Meeting 2',
	       url: 'http://google.com/',
	       start: '2022-01-21T17:00:00'
	     },
	   ]
	 });

	 calendar.render();
	});


</script>
