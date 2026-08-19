import { useState } from "react";

function DynamicFormFields() {
  const [skills, setSkills] = useState([""]);

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const updateSkill = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;

    setSkills(updatedSkills);
  };

  return (
    <div>
      <h2>Employee Skills--dynamic form fields</h2>

      {skills.map((skill, index) => (
        <div key={index}>
          <input
            type="text"
            value={skill}
            placeholder="Enter skill"
            onChange={(e) =>
              updateSkill(index, e.target.value)
            }
          />

          <button onClick={() => removeSkill(index)}>
            Remove
          </button>
        </div>
      ))}

      <br />

      <button onClick={addSkill}>
        + Add Skill
      </button>

      <h3>Skills:</h3>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicFormFields;