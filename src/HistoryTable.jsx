import { useState } from 'react';

const HistoryTable = function (props) {
  const buildRow = function (histItem) {
    const d = new Date(histItem.lastVisitTime);
    return (
      <tr>
        <td>{histItem.id}</td>
        <td>{histItem.title}</td>
        <td>{d.toString()}</td>
        <td>{histItem.visitCount}</td>
      </tr>
    );
  };

  return <table>{props.items.map(buildRow)}</table>;
};

export default HistoryTable;
