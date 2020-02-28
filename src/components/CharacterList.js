import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";




export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // Initial link worked with FIREFOX but not Chrome. No CORS heroku needed.
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log("R E S U L T S", response.data.results);
      const ppl = response.data.results.filter(person =>
        person.name.toLowerCase().includes(search.toLowerCase())
        );
        setCharacters(ppl);
    })
    .catch(error => {console.error("E R R O R", error)})


  }, [search]);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <div className="CardContainer">
        <CharacterCard>

        </CharacterCard>
      </div>
    </section>
  );
}
