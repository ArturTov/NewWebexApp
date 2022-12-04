import React, { useState } from "react";
import "./lessonCntBody.css";
import { ISelect } from "../../../../models/interfaces";
import { AgeDiv } from "./ageDiv/AgeDiv";
import { FinishExam } from "./finishExam/FinishExam";
import downloadImg from "../../../../images/Teacher/NewLesson/download.svg";
import { CustomNmbInp } from "./customNmbInp/CustomNmbInp";
import { TxtWinput } from "./txtWinput/TxtWinput";
import { DifferentCourses } from "./differentCourses/DifferentCourses";
import { Phases } from "./phases/Phases";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomSelect } from "../customSelect/CustomSelect";
import { nLessCreate_L_Schema, TeacherSubmitForm } from "./validationSchema";
import { CstmInput } from "./cstmInput/CstmInput";

export const LessonCntBody: React.FC = () => {
  const [selectVals, setselectVals] = useState<ISelect>({
    title: "Ընտրել կատեգորիան*",
    options: ["aaa", "bbbb", "cccc"],
  });
  const dificultyLevels: ISelect = {
    title: "Ընտրել մակարդակը*",
    options: ["aaa", "bbb"],
  };
  const [isDifferent, setIsDifferent] = useState<boolean>(false);

  const methods = useForm<TeacherSubmitForm>({
    resolver: yupResolver(nLessCreate_L_Schema),
    defaultValues: {
      stages: [
        { stage: 0, count: 2, stageDescription: "" },
        { stage: 1, count: 2, stageDescription: "" },
        { stage: 2, count: 2, stageDescription: "" },
      ],
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = methods;
  const fieldArray = useFieldArray<TeacherSubmitForm, "stages", "id">({
    control,
    name: "stages",
  });
  const { fields, append, remove } = fieldArray;

  function setStageLessonsNull(): void {
    !watch("areStagesDifferent") &&
      fields.map((field) => {
        console.log(field.count);

        return {
          ...field,
          count: null,
        };
      });
  }
  setStageLessonsNull();
  const onSubmit = (data: TeacherSubmitForm) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className="LessonCntBody">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lessonContainer">
            <div className="LessonCntBody_box">
              <CstmInput
                placeholder="Դասընթացի վերնագիրը*"
                type="text"
                regName="title"
              />
              <CustomSelect
                select={selectVals}
                // setselectVals={setselectVals}
                {...{ setselectVals }}
                isInput={true}
                regName="select"
              />
              <CustomSelect select={dificultyLevels} regName="select1" />
              <textarea
                className="lessonTextarea lessonInp"
                placeholder="lorem isup*"
                {...register("describtion")}
              ></textarea>
              <AgeDiv />
              <FinishExam text="Վերջնական քննություն" regName="isExam" />
              <FinishExam text="Հավաստագիր" regName="certificate" />
              <div className="flex gap-5 items-center">
                <CstmInput
                  placeholder="Դասընթացի արժեքը*"
                  type="number"
                  regName="cost"
                />
                <span className="text-[#6B6B6B] text-xs">Դրամ</span>
              </div>
              <button
                className="flex gap-[13px] items-center w-fit"
                type="button"
              >
                <img src={downloadImg} alt="" />
                <span className="text-[#6B6B6B] text-xs">
                  Բեռնել շապիկի նկարը
                </span>
              </button>
            </div>
            <div className="hrMain" />
            <div className="LessonCntBody_box2 LessonCntBody_box">
              <div className="stagesContainer">
                <TxtWinput text="Դասընթացի փուլերի քանակը">
                  <CustomNmbInp
                    defaultValue={3}
                    regName="stagesCount"
                    {...{ remove, append }}
                  />
                </TxtWinput>
                <div
                  className={`stageBox ${
                    isDifferent ? "w-[497px]" : "w-[279px]"
                  }`}
                >
                  <div className="txtWcheckbox">
                    <span className="text-[#6B6B6B] text-xs">
                      Մի փուլի դասերի քանակը
                    </span>
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        className="customCheckbox"
                        onClick={() => setIsDifferent(!isDifferent)}
                        {...register("areStagesDifferent")}
                      />
                      <span>Փուլերը տարբերվում են</span>
                    </div>
                  </div>

                  {isDifferent ? (
                    <DifferentCourses {...{ fields }} />
                  ) : (
                    <CustomNmbInp defaultValue={12} regName={"stageLessons"} />
                  )}
                </div>
                <TxtWinput text="Մի դասի տևողությունը ">
                  <input
                    type="time"
                    defaultValue={"02:00:00"}
                    step="1"
                    className="lessonInp timeInp"
                    {...register("lessonTime")}
                  />
                </TxtWinput>
              </div>
              <Phases {...{ fields }} />
            </div>
          </div>
          <div className="nextBtnCont">
            <button type="submit" className="addLessonBtn ">
              Առաջ
            </button>
            <button
              type="button"
              className="addLessonBtn"
              onClick={() => {
                console.log(watch("areStagesDifferent"), watch("stages"));
              }}
            >
              watch stages
            </button>
            <button
              type="button"
              className="addLessonBtn"
              onClick={() => {
                console.log(watch());
              }}
            >
              watch
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};
