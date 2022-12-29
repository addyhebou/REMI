import { CraftExercises } from '../../Constants/craft';
import CraftCard from './CraftCard';
import '../../Styles/Craft.scss';

export default function Craft() {
  return (
    <div className="Craft">
      {CraftExercises.map((exercise) => (
        <CraftCard
          title={exercise.title}
          description={exercise.description}
          imageURL={exercise.imageURL}
          impact={exercise.impact}
          activityLevel={exercise.activityLevel}
        />
      ))}
    </div>
  );
}
