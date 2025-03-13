document.getElementById("btn").addEventListener("click", ()=>{
    postAndRedirect()
})

document.getElementById("addSeller").addEventListener("click", ()=>{
    window.location.href = "./addSeller.html"
})

document.getElementById("addBuyer").addEventListener("click", ()=>{
  window.location.href = "./addBuyer.html"
})

var sellersList = document.getElementById("sellers")
var buyersList = document.getElementById("buyers")

async function fetchData() {
  const response = await fetch('/indexData');
  const data = await response.json();
  const sellersData = data[0]
  const buyersData = data[1]
  for(var i = 0; i < sellersData.length; i++){
    el = sellersData[i]
    sellersList.innerHTML += `<option>${el.Name}, ${el.NIP}</option>`
  }

  for(var i = 0; i < buyersData.length; i++){
    el = buyersData[i]
    buyersList.innerHTML += `<option>${el.Name}, ${el.NIP}</option>`
  }
}
window.onload = fetchData;

function postAndRedirect(){
  const seller = sellersList.value
  const buyer = buyersList.value

  const data = {
    "Seller": sellersList.value,
    "Buyer": buyersList.value
  }


    fetch('http://localhost:3000/invoiceData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response)
        .then(result => {
          console.log('Success:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });
        window.location.href = "./invoiceData.html"
return 0
  
}
