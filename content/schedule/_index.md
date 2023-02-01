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
        title: 'Mr. Robot 1 - CS 1221',
        url: 'https://www.cybersecurityuw.com/blog/2023/02/spring-2023-first-mr.-robot-group-watch-event/',
        start: '2023-02-01T19:00:00'
      },
      {
        title: 'First Meeting - Room TBA',
        url: '',
        start: '2023-02-07T17:30:00'
      },
      {
        title: 'Mr. Robot 2 - CS 1221',
        url: '',
        start: '2023-02-08T19:00:00'
      },
      {
        title: 'Mr. Robot 3 - CS 1221',
        url: '',
        start: '2023-02-15T19:00:00'
      },
      {
        title: 'Second Meeting - Room TBA',
        url: '',
        start: '2023-02-21T17:30:00'
      },
      {
        title: 'Mr. Robot 4 - CS 1221',
        url: '',
        start: '2023-02-22T19:00:00'
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
