import React from 'react';
import '../App.css'

const Definitionlist = (props) => {
  if (!props.definitions || props.definitions.length === 0) {
    return <div className="alert alert-warning">No results found.</div>;
  }

  const { word, phonetic, meanings } = props.definitions[0];

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <div className="card custom-card my-4">
      <div className="card-body ">
        <h2 className="card-title text-bold">{capitalize(word)}</h2>
        {phonetic && <p className="card-text mb-3"><strong>Phonetic :</strong> {phonetic}</p>}

        {meanings && (
          <div>
            <h5 className="card-text mb-2">Meanings:</h5>
            {meanings.map((meaning, index) => (
              <div key={index} className="mb-4">
                <h6 className="card-text font-weight-bold text-decoration-underline">In terms of {capitalize(meaning.partOfSpeech)}</h6>
                <ul className="list-unstyled">
                  {meaning.definitions.map((definition, index) => (
                    <li key={index} className="mb-2">
                      <strong>Definition:</strong> {definition.definition}<br/>
                      {definition.example && (
                        <span className="text-muted fst-italic"><strong>Example:</strong> {definition.example}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Definitionlist;
