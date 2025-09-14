import { useState } from "react";

export const RegForm = () => {
  const [user, setUser] = useState({
    name: "Ajay",
    age: 25,
    gender: "Male",
    isMarried: false,
    country: "India",
    bio: "Write something about yourself",
  });

  function changeHandler(e) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({ ...user, [name]: value });
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Marital Status</td>
            <td>{user.isMarried ? "Married" : "Single"}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{user.country}</td>
          </tr>
          <tr>
            <td>Bio</td>
            <td>{user.bio}</td>
          </tr>
        </tbody>
      </table>
      <form action="submit">
        <input
          type="text"
          placeholder="Full name"
          value={user.name}
          onChange={changeHandler}
          name="name"
        />
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={changeHandler}
          name="age"
        />
        <div>
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              checked={user.gender === "Male"}
              value={"Male"}
              onChange={changeHandler}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              checked={user.gender === "Female"}
              value={"Female"}
              onChange={changeHandler}
            />
            Female
          </label>
        </div>
        <label htmlFor="isMarried">
          <input
            type="checkbox"
            id="isMarried"
            checked={user.isMarried}
            onChange={changeHandler}
            name="isMarried"
          />
          Is Married
        </label>
        <label htmlFor="country">Select Country</label>
        <select
          name="country"
          id="country"
          value={user.country}
          onChange={changeHandler}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Russia">Russia</option>
          <option value="China">China</option>
        </select>
        <textarea
          name="bio"
          id="bio"
          cols={30}
          rows={5}
          placeholder="Write about ypu..."
          value={user.bio}
          onChange={changeHandler}
        ></textarea>
      </form>
    </>
  );
};
