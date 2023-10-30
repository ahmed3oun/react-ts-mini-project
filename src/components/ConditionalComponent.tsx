import { useState } from "react";

const ConditionalComponent = () => {
  const [display, setDisplay] = useState(false);
  let output;
  if (display) {
    output = (
      <div>
        <h2>This is a conditional component</h2>
        <h2>Displayed : {display.valueOf()} </h2>
      </div>
    );
  } else {
    output = (
      <div>
        <h2>This is a conditional component</h2>
        <h2>Displayed : {display.valueOf()} </h2>
      </div>
    );
  }

  return (
    <div>
      {display}
      {output}
      <button onClick={() => setDisplay(!display)}>
        {display ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default ConditionalComponent;
