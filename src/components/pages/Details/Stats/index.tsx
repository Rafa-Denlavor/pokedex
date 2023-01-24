import "./Stats.css";
import React from 'react';

const Stats = () => {
  return (
    <section className='statsWrapper'>
      <article className='titles'>
        <h1>Stats</h1>
      </article>
      <article className='statsProgress'>
        <div>
            <p>HP</p>
            <progress value='100' max='100' />
        </div>
        <div>
            <p>Attack</p>
            <progress value='100' max='100' />
        </div>
        <div>
            <p>Defense</p>
            <progress value='100' max='100' />
        </div>
        <div>
            <p>Sp. attack</p>
            <progress value='100' max='100' />
        </div>
        <div>
            <p>Sp. defense</p>
            <progress value='100' max='100' />
        </div>
        <div>
            <p>Speed</p>
            <progress value='100' max='100' />
        </div>
      </article>
    </section>
  );
};

export default Stats;
