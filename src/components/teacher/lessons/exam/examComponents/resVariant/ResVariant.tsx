import React from "react";
import {
  FieldArrayWithId,
  UseFieldArrayReturn,
  useFormContext,
} from "react-hook-form";
import { CstmInput } from "../../../../lesComponents/cstmInput/CstmInput";
import removeVariantImg from "../../../../../../images/Teacher/Exam/Group 1555.svg";
import { IExamSchema } from "../../examSchema";

interface ResVariantProps {
  field: FieldArrayWithId<IExamSchema, "questionBox", "id">;
  questions: UseFieldArrayReturn<IExamSchema, "questionBox", "id">;
  ind: number;
  i: number;
}

export const ResVariant: React.FC<ResVariantProps> = ({
  field,
  questions,
  ind,
  i,
}) => {
  const { register, watch, setValue } = useFormContext();
  const removeVariant = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const newObj = watch(`questionBox.${i}.responseVariants`).filter(
      (el: { variant: string }, ix: number) => {
        return ix !== ind;
      }
    );
    questions.update(i, {
      ...field,
      responseVariants: newObj,
    });
  };

  return (
    <div className="flex justify-between gap-[31px] items-center" key={ind}>
      <CstmInput
        type="text"
        placeholder={`Տարբերակ ${ind + 1}`}
        className="w-full"
        regName={`questionBox.${i}.responseVariants.${ind}.variant`}
      />
      <input
        type="checkbox"
        className="customCheckbox !h-[14px] !w-[17px] before:h-[11.5px]"
        {...register(`questionBox.${i}.responseVariants.${ind}.isVariantTrue`)}
      />
      <img
        src={removeVariantImg}
        alt=""
        className="w-[19px] h-[19px] cursor-pointer"
        onClick={removeVariant}
      />
    </div>
  );
};
