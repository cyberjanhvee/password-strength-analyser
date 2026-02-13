function checkStrength() {

  let pwd = document.getElementById("password").value;
  let result = document.getElementById("result");
  result.className = "";


  if (pwd.length === 0) {
    result.innerText = "";
    return;
  }

  let hasLower  = /[a-z]/.test(pwd);
  let hasUpper  = /[A-Z]/.test(pwd);
  let hasNumber = /[0-9]/.test(pwd);
  let hasSymbol = /[^A-Za-z0-9]/.test(pwd);

  if (hasLower && hasUpper && hasNumber && hasSymbol && pwd.length >= 10) {
    result.innerText = "Strong password";
    result.style.color = "lightgreen";
    result.classList.add("glowStrong");

  }
  else if (hasLower && hasUpper && hasNumber && pwd.length >= 6) {
    result.innerText = "Medium strength";
    result.style.color = "orange";
    result.classList.add("pulse");

  }
  else {
    result.innerText = "Weak password";
    result.style.color = "red";
    result.classList.add("shake");

  }
  /* SHOW RESULT */
result.style.opacity = "1";
result.style.transform = "translateY(0)";
}


