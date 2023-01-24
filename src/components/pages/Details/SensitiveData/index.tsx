import "./SensitiveData.css";
import React from 'react';

type TSensitiveDataProps = {
  height: number;
  width: number;
  ability: string;
}

const SensitiveData = ({ height, width, ability } : TSensitiveDataProps) => {
  return (
    <div className="sensitiveDataWrapper">
      <article>
        <h3>Height</h3>
        <p>{height}</p>
      </article>
      <article>
        <h3>Weight</h3>
        <p>{width}</p>
      </article>
      <article>
        <h3>Ability</h3>
        <p>{ability}</p>
      </article>
    </div>
  );
};

export default SensitiveData;
