function goBack(){
    window.location.href = "./index.html"
}

function postBuyerData(){
    const buyerName = document.getElementById("buyerName").value
    const buyerNIP = document.getElementById("buyerNIP").value
    const buyerAdress1 = document.getElementById("buyerAdress1").value
    const buyerAdress2 = document.getElementById("buyerAdress2").value

    if(!(/^\d{10}$/.test(buyerNIP))){
        alert("Błędny NIP nabywcy!")
        return 1
    }

    const buyerData = {
        "Name": buyerName,
        "NIP": buyerNIP,
        "Adress1": buyerAdress1,
        "Adress2": buyerAdress2
    }

    
        fetch('http://localhost:3000/buyerData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(buyerData),
          })
            .then(response => response)
            .then(result => {
              console.log('Success:', result);
            })
            .catch(error => {
              console.error('Error:', error);
            });
            alert("Pomyślnie dodano nowego nabywcę");
            goBack();
    return 0
}

document.getElementById("save").addEventListener("click", postBuyerData);
document.getElementById("cancel").addEventListener("click", goBack);