import React from 'react';
import '../Styles/GoalSetFunc.scss';
import { goalTable } from '../Constants/goalTable';

export function TitleCard(props: {
  category: string;
  setSelectedGoal?: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { category, setSelectedGoal } = props;
  const getColor = (): string => (goalTable as any)[category]?.color;
  return (
    <h2
      className="Title"
      style={{
        backgroundColor: getColor(),
      }}
      onClick={
        setSelectedGoal
          ? () => setSelectedGoal(category)
          : () => console.log('nothing')
      }
    >
      {category}
    </h2>
  );
}

export default function GoalSetFunc(prop: {
  category: string;
  orientation: any;
  setSelectedGoal: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { category, orientation, setSelectedGoal } = prop;

  return (
    <div className="GoalSet">
      <div
        style={{ display: 'flex', flexDirection: orientation }}
        onClick={() => setSelectedGoal(category)}
      >
        <TitleCard category={category} />
        <div>Image</div>
      </div>
    </div>
  );
}
