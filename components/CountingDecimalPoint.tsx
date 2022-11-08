import * as React from 'react';
import DecimalTable from './DecimalTable';

export default function CountingDecimalPoint() {
  const [wordCounts, setWordCounts] = React.useState('');
  const [isNumber, setIsNumber] = React.useState(true);

  const [wordCounts2, setWordCounts2] = React.useState('');
  const [isNumber2, setIsNumber2] = React.useState(true);

  const decimalPointLength = wordCounts.split('.')?.[1]?.length;
  const decimalPointLength2 = wordCounts2.split('.')?.[1]?.length;
  const isSameNumber = wordCounts === wordCounts2 ? '같습니다' : '다릅니다!!!!';
  const _color = wordCounts === wordCounts2 ? 'green' : 'red';

  const onChange = (event) => {
    if (isNaN(event.target.value)) {
      setIsNumber(false);
      return;
    }
    setIsNumber(true);
    setWordCounts(event.target.value);
  };
  const onChange2 = (event) => {
    if (isNaN(event.target.value)) {
      setIsNumber2(false);
      return;
    }

    setIsNumber2(true);
    setWordCounts2(event.target.value);
  };

  return (
    <div>
      <h2>소수점 자리수 세기</h2>
      <input type="text" onChange={onChange} />
      {`   소수점 자리 개수: ${
        decimalPointLength === undefined ? '0' : decimalPointLength
      }`}
      <span style={{ color: 'red' }}>
        {isNumber === true ? '' : '  숫자만 입력'}
      </span>
      <br />
      <input type="text" onChange={onChange2} />
      {`   소수점 자리 개수: ${
        decimalPointLength2 === undefined ? '0' : decimalPointLength2
      }`}
      <span style={{ color: 'red' }}>
        {isNumber2 === true ? '' : '  숫자만 입력'}
      </span>

      <br />
      <span style={{ color: _color }}>{`두 숫자의 값은 ${isSameNumber}`}</span>
      <br />

      <DecimalTable wordCounts={wordCounts} wordCounts2={wordCounts2} />
    </div>
  );
}
