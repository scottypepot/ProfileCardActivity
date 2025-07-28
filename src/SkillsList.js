import "./App.css";

export default function SkillList() {
  return (
    <div className="skillsList">
      <Skills skill="JavaScrirpt" emoji=" 😍" color="yellow" />
      <Skills skill="ReactJS" emoji=" 🤯" color="#61dafb" />
      <Skills skill="Java" emoji=" 🥶" color="green" />
      <Skills skill="C" emoji=" 😱" color="blue" />
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skills" style={{ backgroundColor: props.color }}>
      <span>
        {props.skill}
        {props.emoji}
      </span>
    </div>
  );
}
