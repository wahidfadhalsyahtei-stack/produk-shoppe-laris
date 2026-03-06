const products = [
{
name: "setelan crop,Setelan Panjang Celana Kulot Terbaru, Bahan Rayon Viscose dan Sritex",
price: "Rp 66.400",
image: "https://via.placeholder.com/200",
link: "https://s.shopee.co.id/1BHPOcPzmX"
},
{
name: "PIYAMA RAYON WANITA.PIYAMA KANCING",
price: "Rp 61.616",
image: "https://via.placeholder.com/200",
link: "https://s.shopee.co.id/W1ibsG4Tm"
},
{
name: "Daster long motif semata kaki/Daster long/Daster motif/Termurah/Terlaris/Busuy/Seleting/Kekinian/",
price: "Rp 49.000",
image: "https://via.placeholder.com/200",
link: "https://s.shopee.co.id/5fjolSkyNE"
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
