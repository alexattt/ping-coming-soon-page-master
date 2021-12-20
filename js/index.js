window.addEventListener('load', function () {
  var submitBtn = this.document.getElementById('submit-btn');
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  submitBtn.addEventListener('click', function() {
    var emailValue = document.getElementById('email-input').value
    var emailInput = document.getElementById('email-input')
    var errorMsg = document.getElementById('error-msg')
    var thanksMessage = document.getElementById('thank-you-msg')

    if (emailValue === '' || !emailValue.match(emailRegex)) {
      emailInput.classList.add("email-input-error")
      errorMsg.classList.remove("element-invisible")
    }
    else {
      emailInput.classList.remove("email-input-error")
      errorMsg.classList.add("element-invisible")
      document.getElementById('email-input').value = ''

      thanksMessage.classList.add("element-visible")

      setTimeout(function(){
        thanksMessage.classList.remove("element-visible")
      }, 3500); 
    }
  })
})