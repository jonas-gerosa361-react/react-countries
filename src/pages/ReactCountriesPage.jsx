import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import {allCountries} from "../data/countries";
import Countries from "../components/Countries";

export default function ReactCountriesPage() {
    const [filterCountry, setFilterCountry] = useState('');
    const [visitedCountries, setVisitedCountries ] = useState([]);

    const filterCountryLowerCase = filterCountry.trim().toLocaleLowerCase();

    const filteredCountries = filterCountry.length >= 3 ? allCountries.filter(({nameLowercase}) => {
        return nameLowercase.includes(filterCountryLowerCase);
    }) : allCountries;

    function handleFilterCountry(newCountry) {
        setFilterCountry(newCountry);
    }

    function toggleVisitedCountries(countryId) {
        let newVisitedCountries = [...visitedCountries];

        const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;
        if (isCountryVisited) {
            newVisitedCountries = newVisitedCountries.filter((visitedCountry) => {
                return visitedCountry !== countryId;
            });
        } else {
            newVisitedCountries.push(countryId);
        }
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <Header>React-Countries</Header>
            <Main>
                <form autoComplete="off">
                <TextInput id="filterCountry"
                    autoFocus
                    inputDefaultValue={filterCountry}
                    onInputChange={handleFilterCountry}
                    labelDescription="Digite um pais: (pelo menos 3 caracteres)" />
                <Countries visitedCountries={visitedCountries} onCountryClick={toggleVisitedCountries}>{filteredCountries}</Countries>
                </form>

            </Main>
        </div>
    )
}