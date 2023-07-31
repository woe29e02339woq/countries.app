import React from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const Countries = () => {
    const [countries, setCountries] = React.useState([])
    const {country} = useParams()

    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${country}`)
            .then(res => res.json())
            .then(res => setCountries(res))
            .catch(err => console.error(err))
    }, [country])

    return(
        <div>
            <div className="flex justify-center flex-wrap px-6 py-4">
                {countries.map(country => (
                    <Card 
                        key={country.name.common}
                        name={country.name.common}
                        area={country.area}
                        borders={country.borders}
                        capital={country.capital}
                        flags={country.flags.svg}
                        population={country.population}
                        maps={country.maps.googleMaps}
                    />
                ))}
            </div>
        </div>
    )
}

export default Countries