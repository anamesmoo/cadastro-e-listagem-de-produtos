const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList').getElementsByTagName('tbody')[0];
const newProductButton = document.getElementById('newProductButton');

let products = [];

productForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productValue = parseFloat(document.getElementById('productValue').value);
    const available = document.querySelector('input[name="available"]:checked').value;

    const product = {
        name: productName,
        description: productDescription,
        value: productValue,
        available: available
    };

    products.push(product);
    products.sort((a, b) => a.value - b.value); // Ordena por valor

    renderProductList();
    productForm.reset();
});

newProductButton.addEventListener('click', function () {
    productForm.scrollIntoView({ behavior: 'smooth' });
});

function renderProductList() {
    productList.innerHTML = ''; // Limpa a lista atual

    products.forEach(product => {
        const row = productList.insertRow();
        const cellName = row.insertCell(0);
        const cellValue = row.insertCell(1);

        cellName.textContent = product.name;
        cellValue.textContent = `R$ ${product.value.toFixed(2)}`;
    });
}