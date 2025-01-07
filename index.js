let form =document.getElementById('form');
let border=document.getElementById('border');

document.addEventListener('DOMContentLoaded', () => {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedpassword = localStorage.getItem('password');
   
    
    if (storedUsername && storedEmail && storedpassword) {
        // Display stored data in the border div
        border.innerHTML = `
          <p><strong>Username:</strong> ${storedUsername}</p>
          <p><strong>Email:</strong> ${storedEmail}</p>
          <p><strong>Password:</strong> ${storedpassword}</p>
          
        `;
      }
  });

form.addEventListener('click',(event) => {
    event.preventDefault()

    let username = document.getElementById('username').value

   //console.log(username);

    let email = document.getElementById('email').value

    let password = document.getElementById('password').value

    

    //console.log(email)
    



    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    

    border.innerHTML = `
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
    
    `;

})