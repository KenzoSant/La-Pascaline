function Calculadora() {

  this.display = document.querySelector('.display')
  
  this.inicia = function() {
    this.cliqueBotoes();
    this.pressionaEnter();
  }
  
  this.pressionaEnter = () =>{
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  }
  
  this.cliqueBotoes = function() {
    document.addEventListener('click', e => {
      const el = e.target;
  
        if(el.classList.contains('btn-num')) this.btnParaDisplay(el);
        if(el.classList.contains('btn-clear')) this.clearDisplay();
        if(el.classList.contains('btn-del')) this.apagaUm();     
        if(el.classList.contains('btn-eq')) this.realizaConta();
        this.display.focus();
    });
  }

  this.btnParaDisplay = el => this.display.value += el.innerText      
  this.clearDisplay = () => this.display.value = '';      
  this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);    

  this.realizaConta = () =>{
    let conta = this.display.value;
  
      try {
        conta = eval(conta);
  
        if(!conta) {
          alert('Conta inválida');
          return;
        }
  
        this.display.value = String(conta);
      }catch(e) {
          alert('Conta inválida');
          return;
        }
  }  

}
const calculadora = new Calculadora();
calculadora.inicia();
  