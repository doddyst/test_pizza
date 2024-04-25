export default function App() {
  return (
    <div className="App">
      {questions.map((i) => {
        const { question, option1, option2, option3, option4 } = i;

        return (
          <div>
            <h2>{question}</h2>
            <div className="q-cont">
              <div className="radio-cont">
                <label htmlFor="op1">{option1}</label>
                <input
                  label={option1}
                  type="radio"
                  name="op"
                  value={option1}
                  onClick={(e) => handleClick(e)}
                />
              </div>
              <div className="radio-cont">
                <label htmlFor="op2">{option2}</label>
                <input
                  type="radio"
                  name="op"
                  value={option2}
                  onClick={(e) => handleClick(e)}
                />
              </div>
              <div className="radio-cont">
                <label htmlFor="op3">{option3}</label>
                <input
                  type="radio"
                  name="op"
                  value={option3}
                  onClick={(e) => handleClick(e)}
                />
              </div>
              <div className="radio-cont">
                <label htmlFor="op4">{option4}</label>
                <input
                  type="radio"
                  name="op"
                  value={option4}
                  onClick={(e) => handleClick(e)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const questions = [
  {
    question: "Sample Question",
    option1: "A",
    option2: "B",
    option3: "C",
    option4: "D",
    answer: "C"
  }
];

function handleClick(e) {
  console.log(e.target.value);
}
