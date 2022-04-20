function performAPIrequest(countryName) {

    axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(({ data }) => {

            console.log(data)

            const { name, capital, population } = data[0]

            document.querySelector('#countryName').textContent = name.official
            document.querySelector('#countryCapital').textContent = capital[0]
            document.querySelector('#countryPopulation').textContent = population
        })
        .catch(err => console.log('El país', countryName, 'no existe'))
}


document.querySelector('#countryField').onkeyup = e => {
    const fieldValue = e.currentTarget.value
    performAPIrequest(fieldValue)
}