import { Exercise } from '../../Constants/craft';
import '../../Styles/CraftCard.scss';

export default function CraftCard(props: Exercise) {
  return (
    <div className="CraftCard">
      <h1>{props.title}</h1>
      <img src={props.imageURL} alt="Placeholder for pics rn" />
      <div>
        <p>{props.description}</p>
      </div>
      <strong>{props.activityLevel}</strong>
    </div>
  );
}
