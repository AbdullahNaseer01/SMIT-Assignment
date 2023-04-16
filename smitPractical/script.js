const users= [
  {
    fullName: "Ali",
    country: "Pakistan",
    city: "FSD",
    age: "19",
    status: "active",
    id: "1",
  },
  {
    fullName: "Ali",
    country: "Pakistan",
    city: "FSD",
    age: "19",
    status: "active",
    id: "2",
  },
  {
    fullName: "Ahmad",
    country: "USA",
    city: "LA",
    age: "20",
    status: "inactive",
    id: "3",
  },
  {
    fullName: "Arham",
    country: "UAE",
    city: "Dubai",
    age: "30",
    status: "active",
    id: "4",
  },
  {
    fullName: "usman",
    country: "India",
    city: "Delhi",
    age: "59",
    status: "deleted",
    id: "5",
  },
];
const tableBody = document.querySelector("#tableBody");
users.forEach(user => {
    tableBody.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.fullName}</td>
        <td>${user.country}</td>
        <td>${user.city}</td>
        <td>${user.age}</td>
        <td>${user.status}</td>
      </tr>
    `;
  });

  function checkActive(){
    const found = users.filter(user => user.status === "active");
    console.log(found);
    tableBody.innerHTML = ""; // clear existing table
    found.forEach(user => { // use filtered array
      tableBody.innerHTML += `
        <tr>
          <td>${user.id}</td>
          <td>${user.fullName}</td>
          <td>${user.country}</td>
          <td>${user.city}</td>
          <td>${user.age}</td>
          <td>${user.status}</td>
        </tr>
      `;
    });
  }
  function checkInactive(){
    const found = users.filter(user => user.status === "inactive");
    console.log(found);
    tableBody.innerHTML = ""; // clear existing table
    found.forEach(user => { // use filtered array
      tableBody.innerHTML += `
        <tr>
          <td>${user.id}</td>
          <td>${user.fullName}</td>
          <td>${user.country}</td>
          <td>${user.city}</td>
          <td>${user.age}</td>
          <td>${user.status}</td>
        </tr>
      `;
    });
  }

function checkDelete(){
    const found = users.filter(user => user.status === "deleted");
    console.log(found);
    tableBody.innerHTML = ""; // clear existing table
    found.forEach(user => { // use filtered array
      tableBody.innerHTML += `
        <tr>
          <td>${user.id}</td>
          <td>${user.fullName}</td>
          <td>${user.country}</td>
          <td>${user.city}</td>
          <td>${user.age}</td>
          <td>${user.status}</td>
        </tr>
      `;
    });
  }
{/* <select class="form-select" aria-label="Default select example" onchange="checkStatus()">
  <option selected>Status</option>
  <option value="1">Active</option>
  <option value="2">Inactive</option>
  <option value="3">Delete</option>
</select>

<script> */}
function checkStatus() {
  var selectElement = document.querySelector('#form-select');
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;
  
  if (selectedValue == 1) {
    checkActive();
  } else if (selectedValue == 2) {
    checkInactive();
  } else if (selectedValue == 3) {
    checkDelete();
  }
}

function checkActive() {
  // your code for checking active status
  const found = users.filter(user => user.status === "active");
    console.log(found);
    tableBody.innerHTML = ""; // clear existing table
    found.forEach(user => { // use filtered array
      tableBody.innerHTML += `
        <tr>
          <td>${user.id}</td>
          <td>${user.fullName}</td>
          <td>${user.country}</td>
          <td>${user.city}</td>
          <td>${user.age}</td>
          <td>${user.status}</td>
        </tr>
      `;
    });
}

function checkInactive() {
    const found = users.filter(user => user.status === "inactive");
    console.log(found);
    tableBody.innerHTML = ""; // clear existing table
    found.forEach(user => { // use filtered array
      tableBody.innerHTML += `
        <tr>
          <td>${user.id}</td>
          <td>${user.fullName}</td>
          <td>${user.country}</td>
          <td>${user.city}</td>
          <td>${user.age}</td>
          <td>${user.status}</td>
        </tr>
      `;
    });
}

function checkDelete() {
  // your code for checking delete status
  const found = users.filter(user => user.status === "deleted");
    console.log(found);
    tableBody.innerHTML = ""; // clear existing table
    found.forEach(user => { // use filtered array
      tableBody.innerHTML += `
        <tr>
          <td>${user.id}</td>
          <td>${user.fullName}</td>
          <td>${user.country}</td>
          <td>${user.city}</td>
          <td>${user.age}</td>
          <td>${user.status}</td>
        </tr>
      `;
    });
}
// </script>
