

const loadCountry =()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => displayCountry(data))
}



const displayCountry = (countryName) =>{
    console.log(countryName[0])
    const countryHtml = countryName.map(c => getCountryHtml(c))
    const countryCard = document.getElementById('countrys');
        countryCard.innerHTML = countryHtml.join('');
        

}


 const getCountryHtml = info =>{

    return `
    
            <div class = "country_Card">
                <h2> ${info.name.common}</h2>
                <img src = "${ info.flags.png}">
                <p>${info.capital}</p>
            </div>
    
    `   
 }

loadCountry()