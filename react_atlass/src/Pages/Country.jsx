import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../Components/Loader";
import { CountryCard } from "../Components/CountryCard";
import { SearchFilter } from "../Components/SearchFilter";




export const Country = () => {
 
    const[isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    const [search, setSearch] =useState();
    const [filter, setFilter] = useState("all");

useEffect(() => {
    startTransition(async() => {
        const res = await getCountryData();
        setCountries(res.data);

    });

    // const fetchData = async() => {
    //     const res = await getCountryData();

    //     startTransition(() => {
    //         setCountries(res.data);
    //     });
    // };

    // fetchData();
}, [])

if(isPending) return <Loader />;

// console.log(search, filter);

const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

    return (
        <section className="country-section">
            <SearchFilter search = {search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>
            <ul className="grid grid-four-cols">{
                filterCountries.map((preCountry, index) => {
                    return <CountryCard country={preCountry} key={index}/>
                })
                }

            </ul>

        </section>
    )
}