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
        title: 'Meeting 1',
        url: '#',
        start: '2022-01-27T17:30:00'
      },
      {
        title: 'Meeting 2',
        url: '#',
        start: '2022-02-10T17:30:00'
      },
      {
        title: 'Meeting 3',
        url: '#',
        start: '2022-02-24T17:30:00'
      },
      {
        title: 'Meeting 4',
        url: '#',
        start: '2022-03-07T17:30:00'
      },
      {
        title: 'Meeting 5',
        url: '#',
        start: '2022-03-31T17:30:00'
      },
      {
        title: 'Meeting 6',
        url: '#',
        start: '2022-04-14T17:30:00'
      },
      {
        title: 'Meeting 7',
        url: '#',
        start: '2022-04-28T17:30:00'
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
