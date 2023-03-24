// ChildComponent.tsx

import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { profileAtom } from "./atoms";

const ChildComponent: React.FC = () => {
  const [profile, setProfile] = useRecoilState(profileAtom);

  const handleClick = () => {
    setProfile((prev) => {
      return {
        ...profile,
        name: "Anum Qudsia",
        counter: prev.counter + 1,
      };
    });
  };

  return (
    <div>
      <p>Count: {profile.counter}</p>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <button onClick={handleClick}>Increment</button>
      <br />
      <br />
      <button onClick={useResetRecoilState(profileAtom)}>Clear State</button>
    </div>
  );
};

export default ChildComponent;
