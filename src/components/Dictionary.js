import React, { useState } from 'react';
import Definitionlist from './Definitonlist';
import Spinner from './Spinner';

const Dictionary = (props) => {
  const [term, setTerm] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (term.trim() === '') {
      props.showAlert("Enter any word to view its definition", "danger")
      setDefinitions([]);
      return;
    }

    setLoading(true);

    try {
      let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${term.toLowerCase()}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.length > 0) {
        setDefinitions(data);
      } else {
        setDefinitions([]);
        props.showAlert("No results found", "warning");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setDefinitions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='dictionary-app'>
      <div className='container'>
        <h3 className='text-center text-ligth mb-4 fst-italic' style={{ marginTop: '5px', fontSize: '4rem', fontWeight: 'bold' }}>
        Definity
        </h3>
        <div className='row justify-content-center my-3'>
          <div className='col-lg-6 col-md-8 col-sm-10'>
            <form onSubmit={handleSubmit} className='input-group'>
              <input
                className='form-control'
                type="text"
                value={term}
                onChange={handleInputChange}
                placeholder='Enter any word'
                style={{border:"1px solid rgb(96, 93, 93)",borderRadius:"10px"}}
              />
              <button type="submit" className='mx-1 btn btn-dark rounded fst-italic'>
                {loading ? 'Searching...' : 'Search'}
              </button>
            </form>
          </div>
        </div>
        {loading && <Spinner />}
        {definitions.length > 0 && <Definitionlist definitions={definitions} />}
      </div>
    </div>
  );
};

export default Dictionary;
