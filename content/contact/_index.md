---
title: "We're here"
draft: false
images: []
---

{{< email user="csec" domain="ischool.wisc.edu" >}}

<br />
<hr />
<script>
$("#choice").change(function () {
    if($(this).val() == "0") $(this).addClass("empty");
    else $(this).removeClass("empty")
});
$("#choice").change();
</script>
<style>
#choice option { color: black; }
.empty { color: gray; }
</style>
<form>
  <div class="form-group" style="text-align: left">
    <label for="exampleFormControlInput1">First Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Badger" required>
  </div>
  <br />
  <div class="form-group" style="text-align: left">
    <label for="exampleFormControlInput1">Last Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Buckingham" required>
  </div>
  <br />
  <div class="form-group" style="text-align: left">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="NetID@wisc.edu" required>
  </div>
  <br />
  <div class="form-group" style="text-align: left">
    <label for="exampleFormControlSelect1">Your Affiliation</label>
    <select class="form-control" name="affiliation" id="choice" required>
      <option value="" selected disabled>Select...</option>
      <option>UW-Madison Student</option>
      <option>Non UW-Madison Student</option>
      <option>Sponsor</option>
      <option>Other</option>
    </select>
  </div>
  <br />
  <div class="form-group" style="text-align: left">
    <label for="exampleFormControlTextarea1">Your Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" required></textarea>
  </div>
  <br />
  <button class="btn btn-primary" action="submit">Submit</button>
</form>
