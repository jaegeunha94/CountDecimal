import * as React from 'react';

export default function CompareNumber() {
  const [wordCounts, setWordCounts] = React.useState(0);
  const [isNumber, setIsNumber] = React.useState(true);

  const [wordCounts2, setWordCounts2] = React.useState(0);
  const [isNumber2, setIsNumber2] = React.useState(true);

  const isSameNumber = wordCounts === wordCounts2 ? '같습니다' : '다릅니다';
  const numberDifference = wordCounts - wordCounts2;

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
      <h2>값 비교하기</h2>
      <input type="text" onChange={onChange} />
      <span style={{ color: 'red' }}>
        {isNumber === true ? '' : '  숫자만 입력해주세요'}
      </span>
      <br />
      <input type="text" onChange={onChange2} />
      <span style={{ color: 'red' }}>
        {isNumber2 === true ? '' : '  숫자만 입력해주세요'}
      </span>

      <br />
      <span style={{ color: 'red' }}>{`두 숫자의 값은 ${isSameNumber}`}</span>
      <span style={{ color: 'green' }}>
        <br />
        {`두 숫자의 차이: ${numberDifference}`}
      </span>
    </div>
  );
}
