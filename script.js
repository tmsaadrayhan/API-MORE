fetch("https://restcountries.com/v3.1/all")
.then(res=> res.json())
.then(data=> displayCountries(data))

const displayCountries= countries => {
    const divCountries= document.getElementById("countries");
    countries.forEach(country => {
        const divCountry= document.createElement("div");
        divCountry.innerHTML=`
        <div class= "card p-2 m-2 shadow bg-body-tertiary rounded">
          <h3>${country.name.common}</h3>
          <p>${country.capital}</p>
          <button onclick="displayCountryDetails('${country.name.common}')" class="btn shadow bg-body-tertiary rounded" type="button" value="Input">Details</button>
        </dev>
        `;
        divCountries.appendChild(divCountry);
    });
    
}
const displayCountryDetails= name => {
    const url= `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=> renderCountryInfo(data[0]));
}

const renderCountryInfo= country => {
    console.log(country);
    const countryDetails= document.getElementById("countryDetails");
    countryDetails.innerHTML= `
    <div>
    <h1 class="d-flex justify-content-center">${country.name.common}</h1>
    <p class="d-flex justify-content-center">Population:${country.population} </p>
    <p class="d-flex justify-content-center">Area:${country.area} </p>
    <img class="d-flex justify-content-center" src="${country.flags.png}">
    </div>
    `;
}


