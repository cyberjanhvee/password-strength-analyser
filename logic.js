function checkStrength() {

  const pwd = document.getElementById("password").value;
  const result = document.getElementById("result");

  // reset animation classes
  result.className = "";

  if (pwd.length === 0) {
    result.innerText = "";
    result.style.opacity = "0";
    result.style.transform = "translateY(10px)";
    return;
  }

  // 🚫 very common passwords list
  const common = [
    "123456", "password", "12345678", "qwerty",
    "abc123", "admin", "letmein", "welcome"
  ];

  if (common.includes(pwd.toLowerCase())) {
    result.innerText = "Very Weak – common password";
    result.style.color = "red";
    result.classList.add("shake");
    showResult(result);
    return;
  }

  // 🚫 repeated characters (aaa, 111, etc.)
  if (/(.)\1{2,}/.test(pwd)) {
    result.innerText = "Weak – repeated pattern";
    result.style.color = "red";
    result.classList.add("shake");
    showResult(result);
    return;
  }

  // 🎯 scoring system
  let score = 0;

  if (pwd.length >= 8) score++;
  if (pwd.length >= 12) score++;   // reward long passwords more

  if (/[a-z]/.test(pwd)) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  // 🧠 final decision
  if (score <= 2) {
    result.innerText = "Weak password";
    result.style.color = "red";
    result.classList.add("shake");
  }
  else if (score <= 4) {
    result.innerText = "Medium strength";
    result.style.color = "orange";
    result.classList.add("pulse");
  }
  else {
    result.innerText = "Strong password";
    result.style.color = "lightgreen";
    result.classList.add("glowStrong");
  }

  showResult(result);
}


// small helper for animation
function showResult(result){
  result.style.opacity = "1";
  result.style.transform = "translateY(0)";
}
