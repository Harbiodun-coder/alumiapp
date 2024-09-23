document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const  password = document.getElementById('psw-input').value;
    
    loginUser(email, password);
})


function loginUser(email, password) {
    fetch('https://alumn1.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => {
      response.json()) 
    .then(data => {
      if (data.success) {
        
        window.location.href = 'index.html';
      } else {
        
        alert(data.message || 'Login failed. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
