import React from 'react';

const statList = [{ title: 'Shots on Goal:', value: ' 23' }, { title: 'Saved:', value: ' 21' }, { title: 'Allowed:', value: ' 2' }];
const totalList = [{ title: 'GAA:', value: ' 0.3' }, { title: 'Total Goals Against:', value: ' 2' }, { title: 'Total Shutouts:', value: ' 6' }, { title: 'Total Save Percentage:', value: ' 91.3%' }, { title: 'Best Mile:', value: ' 6:22' }];
const GKStats = () => {
  return (
    <div>
      <hr />
      {statList.map(s => (
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <b style={{ paddingLeft: '5%' }}>{s.title}</b>
          <p style={{ float: 'right', overflow: 'hidden', whiteSpace: 'nowrap', paddingRight: '5%' }}>{s.value}</p>
          <hr />
        </div>
      ))}
      {totalList.map(s => (
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <b style={{ paddingLeft: '5%' }}>{s.title}</b>
          <p style={{ float: 'right', overflow: 'hidden', whiteSpace: 'nowrap', paddingRight: '5%' }}>{s.value}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default GKStats;