const faker = require('faker');
const fs = require('fs');

const generateData = () => {
  const customers = [];
  const pagination = {
    nextPageUrl: 4,
    previousPageUrl: 2,
  };

  for (let id = 0; id < 50; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.firstName();
    const imageUrl = faker.image.imageUrl();

    customers.push({
      id,
      'first_name': firstName,
      'last_name': lastName,
      'image_url': imageUrl,
    })
  }

  return {
    customers,
    pagination,
  }
};

const db = JSON.stringify(generateData());

fs.writeFile("./db.json", db, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});
