import React from 'react';

export default function StepFunc(props) {
  const step = props.step;
  return (
    <div>
      <p>{step}</p>
    </div>
  );
}
