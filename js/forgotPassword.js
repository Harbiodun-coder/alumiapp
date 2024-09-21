
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const newPassword = document.getElementById('psw-input').value;

  
    if (validatePassword(newPassword)) {
      resetPassword(newPassword);
    }
  });

  
  function validatePassword(password) {
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return false;
    }
    return true;
  }

  function resetPassword(newPassword) {
    fetch('apiUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: newPassword
      })
    })
    .then(response => response.json()) 
    .then(data => {
      if (data.success) {
        alert('Password reset successful! Redirecting to sign-in page...');
        window.location.href = 'sign-in.html';
      } else {
        alert(data.message || 'Password reset failed. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred during password reset. Please try again.');
    });
  }
