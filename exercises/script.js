const countriesAPI = "https://restcountries.com/v2/all";
const element = document.querySelector("#country");

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    let htmls = data.map((item) => {
      return `
        <li>
          Quốc gia: ${item.name}
          <br/>
          Thủ đô: ${item.capital}
          <br/>
          Dân số: ${item.population}
          <br/>
          Khu vực: ${item.region}
        </li>
      `;
    });
    element.innerHTML = htmls.join("");
  })
