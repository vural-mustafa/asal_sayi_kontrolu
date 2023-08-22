function checkPrime() {
    const numberInput = document.getElementById("numberInput");
    const result = document.getElementById("result");
  
    const num = parseInt(numberInput.value);
  
    if (isNaN(num)) {
      result.textContent = "Geçerli bir sayı girin.";
      result.style.color = "red";
      return;
    }
  
    if (num <= 1) {
      result.textContent = "Asal değil.";
      result.style.color = "red";
      return;
    }
  
    let isPrime = true;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      result.textContent = "Asal sayı.";
      result.style.color = "green";
    } else {
      result.textContent = "Asal değil.";
      result.style.color = "red";
    }
  }
  