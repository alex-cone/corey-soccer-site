import React from 'react';

const statList = [{ title: 'Height:', value: ' 6\' 0"' }, { title: 'Weight:', value: ' 140 lbs.' }, { title: 'GPA:', value: ' 3.95/4.0 ' }, { title: 'Weighted GPA:', value: ' 4.35/5.0 ' }];
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