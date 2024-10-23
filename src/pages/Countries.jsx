import { useLoaderData,Link } from "react-router-dom";
import { useState } from "react";

import { getCountries } from "../../countries"

export async function loader() {
  const countries = await getCountries();
  return countries;
}

export default function Countries() {
  const countries  = useLoaderData();
  const [query,setQuery] = useState("");
  // countries.sort((a,b)=>a.country.name.common.localeCompare(b.country.name.common))

  const countriesCard = countries.filter(country=>country.name.common.toLowerCase().includes(query)).map(country => (
    <div key={country.name.common} className="transition duration-500 hover:scale-105 shadow-xl h-80 w-60 bg-white rounded overflow-hidden">
      <Link to={country.name.common}>
        <div className="h-40 size-zero">
          <img className="block h-full w-full object-cover" src={country.flags.svg} alt={country.flag.alt}/>
        </div>
        <div className="px-6 pt-4">
          <h3 className="text-lg font-extrabold">{country.name.common}</h3>
          <p><b>Population</b> {country.population}</p>
          <p><b>Region</b> {country.region}</p>
          <p><b>Capital</b> {country.capital}</p>
        </div>
      </Link>
    </div>
  ))


  return (
    <main className="px-20 py-5">
      <div className="my-8">
        <span aria-label="hidden" className="search">
        <input placeholder='Search for a country' className="shadow-xl h-12 w-96 rounded-sm px-16 py-1" type="text" onChange={(e)=> setQuery(e.target.value)} />
        </span>
      </div>
      <div className="flex flex-wrap justify-between gap-8">
        {countriesCard}
      </div>
    </main>
  )
}