import React from 'react';

const statList = [{ title: 'Height:', value: ' 5\' 5" 1/4' }, { title: 'Weight:', value: ' 108 lbs.' }];
const Stats = () => {
  return (
    <div>
      {statList.map(s => (
        <span>
          <b>{s.title}</b>
          {s.value}
          <br />
        </span>
      ))}
    </div>
  );
};

export default Stats;