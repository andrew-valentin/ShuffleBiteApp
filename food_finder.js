const apiKey = 'xZ0cLdAEVKLV2pXTRMEMgVuqwiYg37B04gcGsT-rWytPlm9l0nn5S_9vPXIEA-64PkowBwjHGC8Y35dcVuEhpr5lrSFI07-KaGb-u4g1jvxrnM41dHBbU0CjNjb1Y3Yx';
const apiUrl = 'https://api.yelp.com'

export function getRandomInt(num) {
  let randnum = Math.floor(Math.random() * num);

  while (randnum === 0) randnum = Math.floor(Math.random() * num);

  return randnum;
}

function restaurantToArr(restaurant) {
  console.log(restaurant);
  return [restaurant['name'], restaurant['location'], restaurant['phone']];
};

function getRandomRestaurants(restaurants) {
  const choice1 = getRandomInt(restaurants.length);
  let choice2 = getRandomInt(restaurants.length);

  if (restaurants.length === 1) return [restaurants[choice1], restaurants[choice1]];
  while (choice2 === choice1) choice2 = getRandomInt(restaurants.length);

  const choices = [restaurantToArr(restaurants[choice1]), restaurantToArr(restaurants[choice2])];
  console.log(choices);

  return choices;
}

export function getRestaurants(location, type, price) {
  const endpoint = `${apiUrl}/v3/businesses/search?term=${type}&location=${location}&price=${price}`;

  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(endpoint, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const restaurants = data.businesses.map((business) => {
        return {
          name: business.name,
          location: business.location.address1,
          price: business.price,
          rating: business.rating,
          phone: business.phone,
        };
      });

      return getRandomRestaurants(restaurants);
    })
    .catch((error) => {
      console.error(error);
    });
}
