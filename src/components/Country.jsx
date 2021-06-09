import Item from "./Item";

export default function Country({children: country = {}, onCountryClick = null, isVisited = null }) {
    
    const density = country.population / country.area;
    const {name, flag, capital, region, population} = country;

    function handleCountryClick() {
        if (onCountryClick) {
            onCountryClick(country.id);
        }
    }

    const isVisitedClassname = isVisited ? 'bg-green-200' : '';

    return (
        <div className={`border p-2 m-3 flex flex-row cursor-pointer items-center space-x-2 ${isVisitedClassname}`} onClick={handleCountryClick}>
            <img className="w-48" src={flag} alt={name} />
            <ul>
                <li>
                    <Item label="Name: ">{name}</Item>
                </li>
                <li>
                    <Item label="Capital: ">{capital}</Item>
                </li>
                <li>
                    <Item label="Region: ">{region}</Item>
                </li>
                <li>
                    <Item label="Population: ">{population.toLocaleString('pt-BR')}</Item>
                </li>
                <li>
                    <Item label="Density: ">{density}</Item>
                </li>
            </ul>
        </div>
    )
}
