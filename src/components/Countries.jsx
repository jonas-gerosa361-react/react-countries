import Country from "./Country";
export default function Countries({children: countries = [], onCountryClick = null, visitedCountries = []}) {
    return (
        <div className="border p-2">
            <h2 className="text-center font-semibold">{`${countries.length} pais(es) encontrados`}</h2>
            <h3 className="text-center font-semibold">{visitedCountries.length} paises visitados</h3>
            {
                countries.map(country => {
                    const isVisited = visitedCountries.indexOf(country.id) !== -1;
                    return <Country isVisited={isVisited} onCountryClick={onCountryClick} key={country.id}>{country}</Country>
                })
            }
        </div>
    )
}
