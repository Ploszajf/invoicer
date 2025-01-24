var addNewPosition = document.getElementById("addItem");
const start = document.getElementById("invoiceItems").innerHTML;
const itemsHeader = `<div class="item" style="text-align:center">
<span class="itemName">Nazwa towaru lub usługi</span><span class="unit">Jm</span><span class="ammount">Ilość</span><span class="netPrice">Cena netto</span><span class="netValue">Wartość netto</span><span class="vat">Stawka VAT</span>
</div>`
var items = "";
var positionCounter = 0;

function addItem(){
    items +=
        `<div class="item" id="position` + positionCounter + `">
            <input type="text" class="itemName">
            <input type="text" class="unit">
            <input type="text" class="ammount">
            <input type="text" class="netPrice">
            <input type="text" class="netValue">
            <input type="text" class="vat">
        </div>`;
    invoiceItems.innerHTML = itemsHeader + items + start;
    positionCounter++;
    addNewPosition = document.getElementById("addItem");
    addNewPosition.addEventListener("click", addItem);
}

addNewPosition.addEventListener("click", addItem);

