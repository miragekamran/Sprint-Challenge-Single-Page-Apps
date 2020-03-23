import React, {useState} from "react";

export default function SearchForm(props) {
  const [results, setResults] = useState();

  const handleChanges = event => {
    setResults(event.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const characterSearch = props.characters.filter(character => {
      return character.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
    });
    props.search(characterSearch);
    console.log(characterSearch);
  };


  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search: </label>
        <input onChange={handleChanges} type="text" name="character" placeholder="Search" />
      </form>
    </section>
  );
}
