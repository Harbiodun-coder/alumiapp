
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('psw-input').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

  
    if (validateForm(email, password, confirmPassword)) {
      signupUser(email, password);
    }
  });

  
  function validateForm(email, password, confirmPassword) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email.');
      return false;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return false;
    }

   
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }

    return true;
  }

  
  function signupUser(email, password) {
    fetch('apiUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
       
        window.location.href = 'sign-in.html';
      } else {
        alert(data.message || 'Signup failed. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred during signup. Please try again.');
    });
  }

