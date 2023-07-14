function updateValorCredito(slideAmount) {
    var display = document.getElementById("valorCredito");
    display.dataset.value = slideAmount;
    display.innerHTML = formatter.format(slideAmount);
    updateValorParcelas();
  }
  
  function updateNumeroParcelas(slideAmount) {
    var display = document.getElementById("numeroParcelas");
    display.dataset.value = slideAmount;
    display.innerHTML = slideAmount;
    updateValorParcelas();
  }
  
  function updateValorParcelas() {
    var valorCredito = document.getElementById("valorCredito").dataset.value;
    var numeroParcelas = document.getElementById("numeroParcelas").dataset.value;
    var display = document.getElementById("valorParcelas");
  
    var i = 1.14 / 100;
    var t = Math.pow((1 + i), numeroParcelas);
    var num = t * i;
    var den = t - 1;
    var pmt = valorCredito * (num / den);
    display.innerHTML = formatter.format(pmt)
  }
  
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });