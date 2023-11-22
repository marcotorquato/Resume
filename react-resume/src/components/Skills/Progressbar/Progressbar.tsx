
interface ProgressBarProps {
  skillName: string;
  skillValue: number;
}

export function Progressbar({skillName, skillValue }: ProgressBarProps) {

  return (
    <>
      <div className="progress">
      <span className="skill">
        {skillName} <i className="val">{skillValue}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={skillValue}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: `${skillValue}%` }}
        ></div>
      </div>
    </div>
    </>
  )
}



