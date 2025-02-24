import React, { FC } from "react";
import { stagesArr } from "../lesPage/lesStages/LesStages";
import { LesContainer } from "../userLesComponents/lesContainer/LesContainer";
import { LesPTitle } from "../userLesComponents/lesPTitle/LesPTitle";
import { ExtraMaterials } from "./extraMaterials/ExtraMaterials";
import { LesStageBox } from "./lesStageBox/LesStageBox";
import { LesWorkBox, LesWorkBoxProps } from "./lesWorkBox/LesWorkBox";
import "./stageLesPage.css";

const lesWorkAndHomeWork: LesWorkBoxProps[] = [
  {
    title:
      "«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության կարեւորությունն ու արդիականությունը",
    description:
      "Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով դասական գրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով դասական գրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։",
    extMats: ["png", "pptx", "docx"],
    lesNumber: 1,
  },
  {
    title: "Տնային աշխատանք",
    description:
      "Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ ",
    extMats: ["png", "pptx", "docx"],
    className: { title: "text-[#898BCE]" },
  },
];

export const StageLesPage: FC = () => {
  return (
    <div className="stageLesPage">
      <div className="lessonContent">
        <div className="my_background_06" />
        <LesContainer className="lesCont">
          <LesPTitle
            title="Գրաֆիկ դիզայնի դասընթաց սկսնակների համար"
            className={{ title: "!text-[#6B6B6B] !font-normal" }}
          />
          <hr className="stageLesPage_hr" />
          <LesContainer className="lesWorkHomeWork_container ">
            {lesWorkAndHomeWork.map(
              ({ title, description, extMats, lesNumber, className }) => (
                <LesWorkBox
                  {...{ title, description, lesNumber, extMats, className }}
                  key={Math.random()}
                />
              )
            )}
          </LesContainer>
        </LesContainer>
      </div>
      <div className="stagesContainer">
        {stagesArr.map(({ stageLessons }, i) => (
          <LesStageBox
            {...{ stageLessons }}
            stageNumber={i + 1}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};
