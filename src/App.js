import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillsList";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

export default App;
