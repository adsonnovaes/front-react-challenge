import useProgress from '../../hooks/useProgress';
import './styles.scss';

export function ProgressBar() {

  const { progress } = useProgress();

  // const subsCount = 10;
  // const subsPercent = (subsCount / 1);

  return (
    <div id="container-progress">
      <div className="progress-bar">
        <span style={{ width: `${progress}%` }} />
      </div>
      <p>{`${progress}%`}</p>
    </div>
  )
}
