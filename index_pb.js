const Schema = require("./proto/products_pb");
const fs = require("fs");

// Ajoutez vos données (produits) en utilisant products_pb.js
const products = new Schema.Products();
const product1 = new Schema.Product();
product1.setId(1);
product1.setType("Type 1");
product1.setBrand("Brand 1");
product1.setPrice(10.99);

const product2 = new Schema.Product();
product2.setId(2);
product2.setType("Type 2");
product2.setBrand("Brand 2");
product2.setPrice(19.99);

products.setItemsList([product1, product2]);

// Sérialisez les données en binaire
const bytes = products.serializeBinary();
console.log("Binary data: " + bytes);

// Écrivez les données binaires dans un fichier
fs.writeFileSync("productsbinary", bytes);

// Désérialisez les données binaires
const products2 = Schema.Products.deserializeBinary(bytes);
console.log("Deserialized data: " + products2.toString());
