import { useState } from 'react'
import IssueSlider from './components/IssueSlider.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const issues = [1, 2, 3]; // You can add more issues later

  const [values, setValues] = useState({
    1: 5,
    2: 5,
    3: 5,
  });

  const [touched, setTouched] = useState({});

  function handleSliderChange(issueId, newValue) {
    setValues((prev) => ({
      ...prev,
      [issueId]: newValue,
    }));

    setTouched((prev) => ({
      ...prev,
      [issueId]: true,
    }));
  }

  const allTouched = issues.every((id) => touched[id]);

  function prepareResponse() {
    const responses = {};
    issues.forEach((id) => {
      responses[`issue_id_${id}`] = values[id];
    });

    const responseObject = {
      county: "Pinellas",
      responses: responses,
      submittedAt: new Date().toISOString(), 
    };

    console.log("Submitted response:", responseObject);
    return responseObject;
  }

  return (
    <div className="app-container">
      <h1>Community Issues Survey</h1>
      <p className="county-label">Pinellas County, Florida</p>

      {issues.map((id) => (
        <IssueSlider
          key={id}
          issueId={id}
          value={values[id]}
          onChange={handleSliderChange}
        />
      ))}

      <button
        disabled={!allTouched}
        onClick={() => {
          prepareResponse();
          alert("Response prepared! Check console for JSON.");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
