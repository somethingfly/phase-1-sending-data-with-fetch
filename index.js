// Add your code here

function submitData(username,userEmail) {
  const bodyArea = document.querySelector('body');
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: username,
      email: userEmail
    })
  })
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    bodyArea.append(data.id);
  })
  .catch(error => {
    bodyArea.append(error.message);
  });
}

submitData("username","useremail");