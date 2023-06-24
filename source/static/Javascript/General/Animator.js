function colorchange(id) {
  var date = new Date();
  (date);
  var Day = date.getDay();
  (Day);

  if (Day == 0) {
    document.getElementById(id).classList.add("bg-primary");
    ("primary");
  } else if (Day == 1) {
    document.getElementById(id).classList.add("bg-success");
    ("success");
  } else if (Day == 2) {
    document.getElementById(id).classList.add("bg-secondary");
    ("secondary");
  } else if (Day == 3) {
    document.getElementById(id).classList.add("bg-warning");
    ("warning");
  } else if (Day == 4) {
    document.getElementById(id).classList.add("bg-info");
    ("info");
  } else if (Day == 5) {
    document.getElementById(id).classList.add("bg-danger");
    ("danger");
  } else if (Data == 6) {
    document.getElementById(id).classList.add("bg-black");
    ("black");
  } else {
    document.getElementById(id).classList.add("bg-success");
    ("By Default Color");
  }
}
