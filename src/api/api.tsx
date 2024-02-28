import axios from "axios";

const fetchData = async () => {
  const options = {
    method: "GET",
    url: "https://kohls.p.rapidapi.com/products/list",
    headers: {
      "X-RapidAPI-Key": "a2853e4d13msh62541289f488ae2p1a12ecjsn71ce787f5a60",
      "X-RapidAPI-Host": "kohls.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    if (response.data) {
      const data = response.data;
      console.log(data);
    } else {
      console.log("Brak danych w odpowiedzi z API");
    }
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
