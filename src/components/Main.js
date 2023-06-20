import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import CardComp from "./CardComp";
import ClassManageImg from "../images/classManage.JPG";
import HoriseonImg from "../images/challenge1.png";
import JSQuizImg from "../images/correct.png";
import CalendarImg from "../images/moment1.png";
import NoteImg from "../images/note_taker.JPG";
import WeatherImg from "../images/searchOne.JPG";
import TeamImg from "../images/team1.JPG";
import Avatar from "../images/portAvatar.jpg";
import resumePDF from "../files/code_resume_pdf.pdf";

export function Bio() {
  return (
    <div>
      <div className="bio-container">
        <img
          src={Avatar}
          alt="A shot of me with a fancy black and white filter."
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

const portfolioCards = [
  {
    id: 1,
    imgLink: ClassManageImg,
    imgAltText: "Screen of second project class management app.",
    cardTitle: "Classroom Management App",
    cardText: "Keep Track Of Those Kids",
    cardLink: "https://warm-beyond-95422.herokuapp.com/",
    gitLink: "https://github.com/meriem0319/User-Management",
  },
  {
    id: 2,
    imgLink: HoriseonImg,
    imgAltText: "Screen of first assignment doing accessibility refactoring.",
    cardTitle: "Assignment One, Accessibility Refactor",
    cardText: "Accessibility Refactoring For The Modern World",
    cardLink: "https://jmp2814.github.io/accesibility-jake-refactor/",
    gitLink: "https://github.com/jmp2814/accesibility-jake-refactor",
  },
  {
    id: 3,
    imgLink: JSQuizImg,
    imgAltText: "Screen of a correct answer on quiz app.",
    cardTitle: "Quiz App",
    cardText: "How Well Do You Think You Know Me?",
    cardLink: "https://jmp2814.github.io/timed-quiz-game/",
    gitLink: "https://github.com/jmp2814/timed-quiz-game",
  },
  {
    id: 4,
    imgLink: CalendarImg,
    imgAltText: "Screen of daily planner app.",
    cardTitle: "Daily Planner App",
    cardText: "An Easy Way to Plan Your Day",
    cardLink: "https://jmp2814.github.io/gimme-a-moment/",
    gitLink: "https://github.com/jmp2814/gimme-a-moment",
  },
  {
    id: 5,
    imgLink: NoteImg,
    imgAltText: "Screen of note taking app.",
    cardTitle: "Note Taking App",
    cardText: "Note it, Remember it, Do it, Delete it",
    cardLink: "https://frozen-reef-95442.herokuapp.com/",
    gitLink: "https://github.com/jmp2814/note-that-down",
  },
  {
    id: 6,
    imgLink: WeatherImg,
    imgAltText: "Screen of weather dash app.",
    cardTitle: "Weather Dashboard App",
    cardText: "5-Day Weather Forecasts Where and When You Need Them",
    cardLink: "https://jmp2814.github.io/whats-the-weather/",
    gitLink: "https://github.com/jmp2814/whats-the-weather",
  },
  {
    id: 7,
    imgLink: TeamImg,
    imgAltText: "Screen of team generator app.",
    cardTitle: "Team Generator App",
    cardText: "Pick Your Team",
    gitLink: "https://github.com/jmp2814/Go_Team_Go",
  },
];

export function Portfolio() {
  return (
    <div>
      <div className="portfolio-container">
        {portfolioCards.map((portfolioCard) => (
          <CardComp data={portfolioCard} key={portfolioCard.id} />
        ))}
      </div>
    </div>
  );
}

export function Resume() {
  return (
    <div className="resume-container">
      <iframe view="FitH" title="resume" src={resumePDF} />
    </div>
  );
}

export function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setErrorMessage("Must enter a valid email address.");
        return;
      }
    }
    if (e.target.name === "name" && e.target.value.length === 0) {
      setErrorMessage("Must enter a name.");
      return;
    }
    if (e.target.name === "message" && e.target.value.length === 0) {
      setErrorMessage("Must enter a message.");
      return;
    }
  };

  const handleFormSubmit = (e) => {
    if (!validateEmail(email)) {
      setErrorMessage("Must enter a valid email address.");
      return;
    }
    if (name.length === 0) {
      setErrorMessage("Must enter a name.");
      return;
    }
    if (message.length === 0) {
      setErrorMessage("Must enter a message.");
      return;
    }
    alert("I appreciate you contacting me. I'll respond as soon as I can!");

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
    e.preventDefault();
  };

  return (
    <div className="contact-parent">
      <form className="form contact-container">
        <div className="mb-3">
          <label className="form-label">Name </label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="text"
            className="form-control"
            id="nameField"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="email"
            className="form-control"
            id="emailField"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message </label>
          <textarea
            value={message}
            name="message"
            className="form-control"
            onChange={handleInputChange}
            onBlur={handleBlur}
            id="messageField"
            rows="6"
            col="10"
          />
        </div>
        <button
          type="button"
          onClick={handleFormSubmit}
          className="btn btn-secondary"
        >
          Submit
        </button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}
