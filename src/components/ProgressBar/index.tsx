import './styles.scss';

export function ProgressBar() {

  const subsCount = 10;
  const subsPercent = (subsCount / 1);

  return (
    <div id="container-progress">
      <div className="progress-bar">
        <span style={{ width: `${subsPercent}%` }} />
      </div>
      <p>{`${subsCount}%`}</p>
    </div>
  )
}
