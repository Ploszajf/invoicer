function goBack(){
    window.location.href = "./index.html"
}

function postSellerData(){
    const sellerName = document.getElementById("sellerName").value
    const sellerNIP = document.getElementById("sellerNIP").value
    const sellerAdress1 = document.getElementById("sellerAdress1").value
    const sellerAdress2 = document.getElementById("sellerAdress2").value
    const sellerbankAccountNr = document.getElementById("sellerBankAccountNr").value

    if(!(/^\d{10}$/.test(sellerNIP))){
        alert("Błędny NIP sprzedawcy!")
        return 1
    }

    const sellerData = {
        "Name": sellerName,
        "NIP": sellerNIP,
        "Adress1": sellerAdress1,
        "Adress2": sellerAdress2,
        "BankAccount": sellerbankAccountNr
    }

    fetch('http://localhost:3000/sellerData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sellerData),
      })
        .then(response => response)
        .then(result => {
          console.log('Success:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });
        alert("Pomyślnie dodano nowego sprzedawcę");
        goBack();
        return 0
}

document.getElementById("save").addEventListener("click", postSellerData);
document.getElementById("cancel").addEventListener("click", goBack);