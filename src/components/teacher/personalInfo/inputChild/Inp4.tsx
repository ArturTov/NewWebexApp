import React from "react";
import { useFormContext } from "react-hook-form";
import buttonImg from "../../../../images/createGraffic/buttonimg.svg";
import { inputChildProps } from "../InterfacePerson";
import "./inputChild.css";
const Inp4: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="inputChild">
      <div className="infoName">Լեզուներ</div>
      {fieldArray.fields.map(({ id }, index) => {
        return (
          <div className="inputChild2" key={id}>
            <input
              type="text"
              className="name "
              placeholder="Հայերեն"
              {...register(`${regName}.${index}.language`)}
            />
          </div>
        );
      })}
      <div className="buttonContainer">
        <button className="add">
          <img
            src={buttonImg}
            onClick={() => {
              fieldArray.append({});
            }}
          />
        </button>
        <div className="addText">Ավելացնել</div>
      </div>
    </div>
  );
};

export default Inp4;
