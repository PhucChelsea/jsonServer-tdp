const faker = require("faker");
const fs = require("fs");
// set locale to use vietnamese

//random data
// console.log(faker.commerce.productName());

const randomInfoBonusList = (n) => {
  if (n <= 0) return [];
  const infoBonusList = [];

  Array.from(new Array(n)).forEach(() => {
    const infoBonus = {
      image: faker.image.imageUrl(),
      title: faker.lorem.sentence(),
      text: faker.lorem.text(),
      color: faker.commerce.color(),
    };
    infoBonusList.push(infoBonus);
  });
  return infoBonusList;
};

const randomProductList = (n) => {
  if (n <= 0) return [];
  const productList = [];

  //loop and push products

  Array.from(new Array(n)).forEach(() => {
    const product = {
      id: Number.parseFloat(faker.datatype.number()),
      name: faker.commerce.productName(),
      image: faker.image.imageUrl(),
      description: faker.commerce.productDescription(),
      color: faker.commerce.color(),
      price: Number.parseFloat(faker.commerce.price()),
    };

    productList.push(product);
  });
  return productList;
};

const randomTopSellingList = (productList, numberOfTopSelling) => {
  if (numberOfTopSelling <= 0) return [];

  const topSellingList = [];

  //random data
  for (const product of productList) {
    Array.from(new Array(numberOfTopSelling)).forEach(() => {
      const topSelling = {
        productId: product.id,
        id: Number.parseFloat(faker.datatype.number()),
        name: faker.commerce.productName(),
        image: faker.image.imageUrl(),
        color: faker.commerce.color(),
        price: Number.parseFloat(faker.commerce.price()),
      };

      topSellingList.push(topSelling);
    });
  }

  return topSellingList;
};

(() => {
  //random du lieu
  const productList = randomProductList(4);
  const topSellingList = randomTopSellingList(productList, 3);
  const infoBonusList = randomInfoBonusList(4);

  //prepare data object
  const data = {
    products: productList,
    top_selling: topSellingList,
    info_bonus: infoBonusList,
  };

  //write data object to data.json
  fs.writeFile("data.json", JSON.stringify(data), () => {
    console.log("Generate data successfully !!!!!!!!");
  });
})();
