import { useState } from 'react';
import './App.css';

// const MinutesToHours = () => {
//   const [hour, setHour] = useState('');
//   const [min, setMin] = useState('');
//   const [flip, setFlip] = useState(false);

//   const converterHour = (e) => {
//     const value = e.target.value;
//     setMin(value);
//     setHour(value / 60);
//   };

//   const converterMin = (e) => {
//     const value = e.target.value;
//     setHour(value);
//     setMin(value * 60);
//   };

//   const onClickReset = () => {
//     setMin('0');
//     setHour('0');
//   };

//   const onClickFlip = () => {
//     setFlip(!flip);
//   };

//   return (
//     <div>
//       <h3>Minutes To Hours</h3>
//       <div>
//         <label htmlFor="minutes">Minutes</label>
//         <input type="number" id="minutes" placeholder="Minutes"
//           disabled={flip} value={min} onChange={converterHour} />
//       </div>
//       <div>
//         <label htmlFor="hours">Hours</label>
//         <input type="number" id="hours" placeholder="Hours"
//           disabled={!flip} value={hour} onChange={converterMin} />
//       </div>
//       <button onClick={onClickReset}>Reset</button>
//       <button onClick={onClickFlip}>Flip</button>
//     </div>
//   )
// };


// function App() {
//   return (
//     <div className="App">
//       <MinutesToHours />
//     </div>
//   );
// }

// export default App;

// 강사님 풀이
// Minutes, Hours 입력창 활성/비활성 ===> inMinutes (true/false)
// Minutes, Hours 입력 숫자 ===> amount
// Flip을 클릭하면 isMinutes 값 변경 (true/false)
// true 상태라면 (Minutes 활성화 상태라면)
// ===> Minutes input에 amount 출력
// ===> Hours input에 amount/60 출력
// false 상태라면 (Hours 활성화 상태라면)
// ===> Hours input에 amount 출력
// ===> Minutes input에 amount*60 출력
const MinutesToHours = () => {
  const [isMinutes, setIsMinutes] = useState(true);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h3>Minutes To Hours</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input type="number" id="minutes" placeholder="Minutes"
          disabled={!isMinutes}
          value={isMinutes ? amount : amount * 60}
          onChange={(e) => {
            setAmount(e.target.value);
          }} />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input type="number" id="hours" placeholder="Hours"
          disabled={isMinutes}
          value={!isMinutes ? amount : amount / 60}
          onChange={(e) => {
            setAmount(e.target.value);
          }} />
      </div>
      <button onClick={() => {
        setAmount(0);
      }}>
        Reset
      </button>
      <button onClick={() => {
        setIsMinutes(!isMinutes);
      }}>
        Flip
      </button>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <MinutesToHours />
    </div>
  );
}

export default App
  ;