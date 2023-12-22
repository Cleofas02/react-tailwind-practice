import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

function Btn() {
  return (
    <div className="flex flex-row gap-6	 w-full mt-5 justify-center">
      <div className="flex flex-col 	 justify-center items-center">
        <button className="border-solid border-2 border-slate-50 w-28 rounded bg-slate-100 text-gray-700 font-semibold font ">
          <FontAwesomeIcon className="mr-2 text-base" icon={faEnvelope} />
          Email
        </button>
      </div>
      <div className="flex flex-row  justify-center items-center">
        <button className="border-solid border-2 border-link w-28 rounded bg-link text-slate-100 font-semibold font">
          <FontAwesomeIcon className="mr-2 text-base" icon={faLinkedin} />
          LinkIn
        </button>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <>
      <div className="flex flex-col ">
        <h1 className="mr-10 font-bold text-base text-slate-100 mt-5">About</h1>
        <p className="w-60 text-sm text-slate-100 ">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="flex flex-col ">
        <h1 className="mr-10 font-bold text-base text-slate-100 mt-5">
          Interest
        </h1>
        <p className="w-60 text-sm text-slate-100 mb-5">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className=" flex justify-center items-center gap-6 bg-dragon border-solid border border-dragon rounded-b-xl h-16 w-full">
        <FontAwesomeIcon
          className="text-2xl"
          icon={faSquareTwitter}
          style={{ color: "#918e9b" }}
        />
        <FontAwesomeIcon
          className="text-2xl"
          icon={faSquareFacebook}
          style={{ color: "#918e9b" }}
        />
        <FontAwesomeIcon
          className="text-2xl"
          icon={faSquareInstagram}
          style={{ color: "#918e9b" }}
        />
        <FontAwesomeIcon
          className="text-2xl"
          icon={faSquareGithub}
          style={{ color: "#918e9b" }}
        />
      </div>
    </>
  );
}

function ProfileId() {
  return (
    <div className="bg-bg h-screen flex justify-center p-6">
      <div className="flex flex-col items-center w-70 font">
        <img src="/Rectangle 90.png" alt="woman_picture" />
        <div className="flex flex-col items-center justify-center w-full		 bg-content-bg">
          <h1 className="text-2xl font-bold text-slate-100 font 	mt-3 tracking-wide				 ">
            Laura Smith
          </h1>
          <p className="text-sub-name text-xs	leading-normal tracking-wider font	">
            Frontend Developer
          </p>
          <a href="#" className="text-sml text-slate-100 leading-normal">
            laurasmith.website
          </a>
          <Btn />
          <Contents />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProfileId;
