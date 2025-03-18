function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => {
      if (!response.ok) {
        // If the server responds with an error status, throw an error with the status text
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // Create a new paragraph element and append the new id to the DOM
      const p = document.createElement("p");
      p.textContent = data.id;
      document.body.appendChild(p);
      return data;
    })
    .catch((error) => {
      // Create a new paragraph element and append the error message to the DOM
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}
