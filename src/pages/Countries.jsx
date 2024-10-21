import { useLoaderData,Link } from "react-router-dom";

import { getCountries } from "../../countries"

export async function loader() {
  const countries = await getCountries();
  return countries;
}

export default function Countries() {
  const countries  = useLoaderData();
  // countries.sort((a,b)=>a.country.name.common.localeCompare(b.country.name.common))

  const countriesCard = countries.map(country => (
    <div key={country.name.common} className="h-80 w-60 bg-white rounded overflow-hidden">
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
      <div className="flex flex-wrap justify-between gap-8">
        {countriesCard}
      </div>
    </main>
  )
}