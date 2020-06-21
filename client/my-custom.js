function storedata() {
    const userEmail = document.getElementById("userInputEmail").value;
    
    var checkedBoxes = [];
    $("input[name=custombox]:checked").each(function() {checkedBoxes.push(this.value)});

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({userEmail, checkedBoxes}),
  };

  console.log("test5:", options.body);

  fetch("/api/add", options);
}
