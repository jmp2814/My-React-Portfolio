import { useState } from "react";
import Card from "./Card";
import ClassManageImg from "../images/classManage.JPG";
import HoriseonImg from "../images/challenge1.png";
import JSQuizImg from "../images/correct.png";
import CalendarImg from "../images/moment1.png";
import NoteImg from "../images/note_taker.JPG";
import WeatherImg from "../images/searchOne.JPG";
import TeamImg from "../images/team1.JPG";
import Avatar from "../images/portAvatar.JPG";
import resumePDF from "../files/Resume_Fall_2019_school.pdf";

export function AboutMe() {
  return (
    <div>
      <div className="bio-container">
        <img
          src={Avatar}
          alt="A picture of me with a fancy black and white filter."
        />
        <div className="bio-text">
          <p>
            My name is Jake Perry and I am an aspiring Web Developer / Preschol
            Teacher. Pretty interesting combo right?
          </p>
        </div>
      </div>
    </div>
  );
}
