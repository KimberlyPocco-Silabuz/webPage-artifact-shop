const products =[
  {
    id: 1,
    name: "Licuadora",
    image:
      "https://falabella.scene7.com/is/image/FalabellaPE/880789897_1?wid=1500&hei=1500&qlt=70",
    description: "Producto 1",
    price: 150.00,
  },
  {
    id: 2,
    name: "Lavadora",
    image:
      "https://oechsle.vteximg.com.br/arquivos/ids/5430262-1000-1000/image-662c3dc13d674616a91dc611c1494c61.jpg?v=637699501027030000",
    description: "Producto 2",
    price: 770.00,
  },
  {
    id: 3,
    name: "Batidora",
    image:
      "https://electroluxpe.vtexassets.com/arquivos/ids/159529-1200-1200?v=637979287515000000&width=1200&height=1200&aspect=true",
    description: "Producto 3",
    price: 95.00,
  },
  {
    id: 4,
    name: "Plancha",
    image:
      "data:image/jpeg;base64,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",
    description: "Producto 4",
    price: 40.0,
  },
  {
    id: 5,
    name: "Producto 5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7EbOm38ordushxt8MVC6ljuA1oJkHUiHIA&usqp=CAU",
    description: "Producto 5",
    price: 80.0,
  },
  {
    id: 6,
    name: "Terma",
    image:
      "https://falabella.scene7.com/is/image/FalabellaPE/14787112_1?wid=1500&hei=1500&qlt=70",
    description: "Producto 6",
    price: 60.0,
  },
  {
    id: 7,
    name: "Celular",
    image:
      "https://walmartni.vtexassets.com/arquivos/ids/225881/Celular-Samsung-Galaxy-A53-5G-A536-128Gb-6-Ram-Blue-1-18413.jpg?v=637926646506400000",
    description: "Producto 7",
    price: 930,
  },
  {
    id: 8,
    name: "Televisión",
    image:
      "https://st3.depositphotos.com/18206890/32571/v/600/depositphotos_325715876-stock-illustration-black-television-with-white-screen.jpg",
    description: "Producto 8",
    price: 790.0,
  },
  {
    id: 9,
    name: "Microondas",
    image:
      "https://hiraoka.com.pe/media/catalog/product/cache/a357cb11a228eb6f7f15c0ee1ff203af/1/1/114807-1_1_1.jpg",
    description: "Producto 9",
    price: 185.0,
  },
  {
    id: 10,
    name: "Ventilador",
    image:
      "https://static.grainger.com/rp/s/is/image/Grainger/61LD85_AS01?$adapimg$&hei=536&wid=536",
    description: "Producto 10",
    price: 100.0,
  },
];

export default products;
