
document.getElementById('deposit-button').addEventListener('click',function(){
   
        var newDeposit = document.getElementById('deposit-input').value
    console.log(newDeposit)
    var totalDeposit = parseFloat(document.getElementById('total-deposit').innerText)+parseFloat(newDeposit)
    document.getElementById('total-deposit').innerText=totalDeposit
    document.getElementById('deposit-input').value=''
    var balance = parseFloat(document.getElementById('balance').innerText) + parseFloat(newDeposit)
    document.getElementById('balance').innerText = balance
})


     

  