---
title : "Schedule"
type: "calendar"
layout: "single"
---
<link rel="stylesheet" href="/css/full-calendar.css">

<script>
 document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listMonth'
    },
    events: [
      {
        title: 'Open Source Intelligence',
        url: 'https://www.cybersecurityuw.com/blog/2022/09/2022_fall_01/',
        start: '2022-09-21T17:30:00'
      },
    ],
  });

  let details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
      calendar.changeView('listMonth');
  }

  calendar.render();

 });
</script>
