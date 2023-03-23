function login(event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullname").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    
    if (!fullName) {
      alert("Please fill out the Name");
      return false;
    }
  
    if (password !== "12345") {
      alert("Please fill out the correct password");
      return false;
    }
  
    if (email !== "admin@gmail.com") {
      alert("Please fill out the correct email");
      return false;
    }
  
    document.cookie = "fullName=" + fullName;
    window.location.href = 'home.html';
    return true;
  }

// function login() {
//       // event.preventDefault();
      
//       const fullName = document.getElementById("fullname").value;
//       const password = document.getElementById("password").value;
//       const email = document.getElementById("email").value;
      
//       if (!fullName) {
//         alert("Please fill out the Name");
//         return false;
//       }
    
//       if (password !== "12345") {
//         alert("Please fill out the correct password");
//         return false;
//       }
    
//       if (email !== "admin@gmail.com") {
//         alert("Please fill out the correct email");
//         return false;
//       }
    
//       // document.cookie = "fullName=" + fullName;
//       window.location.href = window.origin + '/home.html';
//       document.getElementById("welcome-message").textContent = "welcome"
//       return true;
//     }