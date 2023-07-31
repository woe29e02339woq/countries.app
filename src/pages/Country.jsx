import React from "react";
import { useParams } from "react-router-dom";

const Country = () => {
    const [countries, setCountries] = React.useState([])
    const { country } = useParams()

    React.useEffect(() => {
            fetch(`https://restcountries.com/v3.1/name/${country}`)
            .then(res => res.json())
            .then(res => setCountries(res[0]))
            .catch(err => console.error(err))
    }, [country])

    if (!countries.flags) return <h1>Loading</h1>
    return(
        <div className="align-center my-5 mx-5 text-sm w-[25rem] bg-slate-200 rounded-[10px] border-2 border-slate-500p-3 px-3">
            <img className="w-55 rounded-[10px] pb-2" src={countries.flags.svg} alt="" />
            <div className="px-6 text-2xl	">{countries.name.common}</div>
            <div className="px-6 pb-1 text-base">Capital: {countries.capital.map(item => <span key={item}>{item}</span>)}</div>
            <div>d</div>
        </div>
    )
    
}

export default Country;