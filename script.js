const products = [
{
name: "Blender Portable USB",
price: "Rp 59.000",
image: "https://via.placeholder.com/200",
link: "LINK-AFFILIATE-SHOPEE"
},
{
name: "Lampu LED Sensor",
price: "Rp 25.000",
image: "https://via.placeholder.com/200",
link: "LINK-AFFILIATE-SHOPEE"
},
{
name: "Mini Vacuum Cleaner",
price: "Rp 70.000",
image: "https://via.placeholder.com/200",
link: "LINK-AFFILIATE-SHOPEE"
}
]

const container = document.getElementById("product-list")

products.forEach(product => {

container.innerHTML += `
<div class="product">
<img src="${product.image}">
<h3>${product.name}</h3>
<p>${product.price}</p>
<a href="${product.link}" target="_blank">
<button>Beli Sekarang</button>
</a>
</div>
`

})