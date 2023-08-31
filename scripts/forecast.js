const key = "WPftFkHJsvYI5XbGEAHjT00DTuqf3AbC";

const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

   return data[0];
//   console.log(data);
};

//도시 정보 가져오기.

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  //   console.log(data[0]);
  return data[0];
};

// getCity("newyork")
//   .then((data) => {
//     // console.log(data);
//     return getWeather(data.Key); //대문자 K
//   })
//   .catch((err) => console.log(err));
