---
title: "We're here"
draft: false
images: []
---

{{< email user="csec" domain="ischool.wisc.edu" >}}
<br />
<div id="submitmsg">
</div>
<hr />

<form id="contactForm" action="https://getform.io/f/7196d6fa-3fc6-473d-af7b-eab7aa3ebe1e" method="POST">
  <div class="form-group" style="text-align: left">
    <label for="fname">First Name</label>
    <input type="text" class="form-control" id="fname" name="First Name" placeholder="Ex. Badger" required>
  </div>
  <br />
  <div class="form-group" style="text-align: left">
    <label for="lname">Last Name</label>
    <input type="text" class="form-control" id="lname" name="Last Name" placeholder="Ex. Buckingham" required>
  </div>
  <br />
  <div class="form-group" style="text-align: left">
    <label for="email">Email Address</label>
    <input type="email" class="form-control" id="email" name="Email" placeholder="Ex. NetID@wisc.edu" required>
  </div>
  <br />
  <div class="form-group" style="text-align: left">
    <label for="affiliation">Your Affiliation</label>
    <select class="form-select" id="affiliation" name="Affiliation" required>
      <option value="" selected disabled>Select...</option>
      <option>UW-Madison Student</option>
      <option>Non UW-Madison Student</option>
      <option>Sponsor</option>
      <option>Other</option>
    </select>
  </div>
  <br />
  <div class="form-group" style="text-align: left">
    <label for="message">Your Message</label>
    <textarea class="form-control" id="message" name="Message" rows="6" placeholder="Ex. Hi! I'd like to join your club." required></textarea>
  </div>
  <br />
  <button class="btn btn-primary" type="submit">Submit</button>
</form>
