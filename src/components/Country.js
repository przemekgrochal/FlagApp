import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import Spinner from 'reactjs-simple-spinner'
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 600px;
  background: #dfdfdf;
  border-radius: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  margin-bottom: 20px;

   > div {
    color: #4b4b4e;
    font-weight: 600;
   }
`;


function Country() {
  const routeParams = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState();
  const [countryError, setCountryError] = useState(null);
  const url = `https://restcountries.com/v2/name/${routeParams.country}`

  const renderCountry = () => {
    if (countryError) {
      return <div>{countryError}</div>
    }

    if (country) {
      return (
        <Wrapper>
          <div>Name: {country.name}</div>
          <div>Capital: {country.capital}</div>
          <div>Region: {country.region}</div>
          <div>Population: {country.population}</div>
          <div>Region: {country.region}</div>
          <div>Subregion: {country.subregion}</div>
          <div>Capital: {country.capital}</div>
          <div>Currencies: {country?.currencies.map((item, index) => <div key={index}><span>{item.symbol}</span><span>{item.name}</span></div>)}</div>
          <div><img src={country.flag} height="150" width="150" alt="img"></img></div>
        </Wrapper>
      )
    }

    return <Spinner size="large" message="Loading..." />;
  }

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Http error: ${res.status}`);
        }
      })
      .then((res) => {
        setCountry(res[0] ? res[0] : []);
      })
      .catch((error) => {
        console.error(error);
        setCountryError('Error occurred while downloading')
      });
  }, []);

  return (
    <div>
      <h1>Country Detail</h1> <button onClick={() => navigate(-1)}>Back to home</button>
      {renderCountry()}
    </div>
  );
}

export default Country;