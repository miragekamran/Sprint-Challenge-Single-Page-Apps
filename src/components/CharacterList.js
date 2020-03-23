import React, { useEffect, useState } from "react"
import axios from "axios"
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import CharacterCard from "./CharacterCard"
import Search from "./SearchForm"

export default function CharacterList(props) {
  // console.log('list props', props)
  const [characters, setCharacters] = useState([])
  const [filteredCharacter, updateCharacter] = useState([])

  const search = characters => {
    updateCharacter(characters)
  };

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
        updateCharacter(response.data.results);
      })
  }, []);

  console.log('characters', characters)

  // DESIGN
  const ListContainer = styled.div`
    display: flex;
  `;

  const CharacterInfo = styled.div`
    width: 50%;
  `;

  const CharacterNamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
  `;



  return (
    <section className="character-list">
      <ListContainer>
        <CharacterNamesContainer>
          <Search search={search} characters={characters} />
          {filteredCharacter.map(character => {
            return <div key={character.id}>
              <Link to={`/characters/${character.id}`} style={{textDecoration: 'none', color: 'black'}}><h3>{character.name}</h3></Link>
            </div>
          })}
        </CharacterNamesContainer>
        <CharacterInfo>
          <Route path='/characters/:id' component={(props) => <CharacterCard {...props} info={characters} />} />
        </CharacterInfo>
      </ListContainer>
    </section>
  );
}