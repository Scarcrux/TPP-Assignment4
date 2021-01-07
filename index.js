// Completes Requirement #4
function verifyPassword(input) {
  let pw = "12345678";
  if (input === pw) {
    document.querySelector("h1").innerText = "Welcome! Login Successful";
    return false;
  } else {
    alert('Login Failed. Try again.')
    return false;
  }
}
