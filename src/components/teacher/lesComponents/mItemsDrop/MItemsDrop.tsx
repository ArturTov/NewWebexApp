import React, { FC } from "react";
import "./mItemsDrop.css";
import { Link } from "react-router-dom";
import { IteacherMenu } from "../../../../models/interfaces";
import chevDown from "../../../../images/chevDown.svg";
import chevDownPurple from "../../../../images/chevDownPurple.svg";

interface MItemsDropProps extends IteacherMenu {
  chooseMenuItem: (id: number) => void;
}

export const MItemsDrop: FC<MItemsDropProps> = ({
  id,
  toSubPaths,
  isClicked,
  activeImg,
  img,
  title,
  chooseMenuItem,
}) => {
  const toggleSubMenu = (el: {
    title: string;
    path: string;
    isClicked: boolean;
  }) => {
    toSubPaths?.forEach((item) => {
      item.isClicked = false;
    });
    el.isClicked = true;
  };
  return (
    <li
      className={`mItemsDrop ${isClicked ? "activeMenuItem" : ""}`}
      onClick={() => chooseMenuItem(id!)}
    >
      <div className="menuA">
        <img src={isClicked ? activeImg : img} alt="" />
        <p className="menuSpan">{title}</p>
        <img
          src={isClicked ? chevDownPurple : chevDown}
          alt=""
          className={`w-4 h-3 duration-200 ${isClicked ? "rotate-180" : ""}`}
        />
      </div>
      {isClicked && (
        <div className="sumItems">
          {toSubPaths?.map((el) => (
            <Link
              key={Math.random()}
              to={el.path}
              state={{ id: id }}
              className={`subMenuSpan ${el.isClicked ? "textPurple" : ""}`}
              onClick={() => toggleSubMenu(el)}
            >
              {el.title}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};
