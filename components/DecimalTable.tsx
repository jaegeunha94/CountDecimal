import * as React from 'react';
import Photo from './Photo';

export default function DecimalTable({ wordCounts, wordCounts2 }) {
  const tableWidth = 100 / 13;
  const widthStyle = { width: `${tableWidth}%` };
  const decimalPoint = wordCounts.split('.')?.[1]?.split('');

  const decimalPoint2 = wordCounts2.split('.')?.[1]?.split('');
  const widthStyle2 = { width: `${tableWidth}%`, textAlign: 'center' };

  return (
    <div>
      <br />
      <h3>소수점 자리수</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr>
          <th style={widthStyle}>1</th>
          <th style={widthStyle}>2</th>
          <th style={widthStyle}>3</th>
          <th style={widthStyle}>4</th>
          <th style={widthStyle}>5</th>
          <th style={widthStyle}>6</th>
          <th style={widthStyle}>7</th>
          <th style={widthStyle}>8</th>
          <th style={widthStyle}>9</th>
          <th style={widthStyle}>10</th>
          <th style={widthStyle}>11</th>
          <th style={widthStyle}>12</th>
          <th style={widthStyle}>13</th>
        </tr>
        <tr style={{ borderBottom: '1px solid #000', height: '10px' }}>
          <td></td>
        </tr>
        <tr>
          <td style={widthStyle2}>{decimalPoint?.[0]}</td>
          <td style={widthStyle2}>{decimalPoint?.[1]}</td>
          <td style={widthStyle2}>{decimalPoint?.[2]}</td>
          <td style={widthStyle2}>{decimalPoint?.[3]}</td>
          <td style={widthStyle2}>{decimalPoint?.[4]}</td>
          <td style={widthStyle2}>{decimalPoint?.[5]}</td>
          <td style={widthStyle2}>{decimalPoint?.[6]}</td>
          <td style={widthStyle2}>{decimalPoint?.[7]}</td>
          <td style={widthStyle2}>{decimalPoint?.[8]}</td>
          <td style={widthStyle2}>{decimalPoint?.[9]}</td>
          <td style={widthStyle2}>{decimalPoint?.[10]}</td>
          <td style={widthStyle2}>{decimalPoint?.[11]}</td>
          <td style={widthStyle2}>{decimalPoint?.[12]}</td>
        </tr>
        <tr>
          <td style={widthStyle2}>{decimalPoint2?.[0]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[1]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[2]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[3]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[4]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[5]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[6]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[7]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[8]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[9]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[10]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[11]}</td>
          <td style={widthStyle2}>{decimalPoint2?.[12]}</td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <Photo />
    </div>
  );
}
