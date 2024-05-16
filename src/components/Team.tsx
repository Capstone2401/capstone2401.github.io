import GithubIcon from "./Icons/Github";
import LinkedinIcon from "./Icons/LinkedIn";
import MailIcon from "./Icons/Mail";
import PersonalIcon from "./Icons/Personal";

interface IconLinks {
  github: string;
  personal: string;
  linkedIn: string;
  mail: string;
}

function ProfileIcons({
  linkedIn,
  personal,
  github,
  mail,
}: IconLinks): JSX.Element {
  return (
    <div className="flex flex-1 gap-5 my-2">
      <a href={linkedIn} target="_blank">
        <LinkedinIcon />
      </a>
      <a href={personal} target="_blank">
        <PersonalIcon />
      </a>
      <a href={github} target="_blank">
        <GithubIcon />
      </a>
      <a href={mail} target="_blank">
        <MailIcon />
      </a>
    </div>
  );
}

export function Team(): JSX.Element {
  return (
    <div id="team">
      <h1 className="text-center pt-12 italic font-semibold">The Team</h1>
      <div className="flex flex-1 justify-center gap-20 flex-wrap pt-12 pb-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col items-center">
          <img
            src={require("/static/img/gianni.jpeg").default}
            width={300}
            className="rounded-lg mb-2"
          />
          <p>Gianni Barber</p>
          <ProfileIcons
            linkedIn="https://linkedin.com/in/giannibarber"
            personal="https://giannibarber.com"
            github="https://github.com/giannibarber"
            mail="mailto:giannibarber@proton.me"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={require("/static/img/profile-upscaled.png").default}
            width={300}
            className="rounded-lg mb-2"
          />
          <p>Brandon Corey</p>
          <ProfileIcons
            linkedIn="https://linkedin.com/in/brandonmcorey"
            personal="https://brandoncorey.dev"
            github="https://github.com/brandoncorey"
            mail="mailto:bcorey3660@gmail.com"
          />
        </div>{" "}
        <div className="flex flex-col items-center">
          <img
            src={require("/static/img/allison.jpg").default}
            width={300}
            className="rounded-lg mb-2"
          />
          <p>Allison Embrey</p>
          <ProfileIcons
            linkedIn="https://www.linkedin.com/in/allisonembrey"
            personal="#"
            github="https://github.com/AlliLearns"
            mail="mailto:alliembrey@pm.me"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={require("/static/img/tyler.jpeg").default}
            width={300}
            className="rounded-lg mb-2"
          />
          <p>Tyler Wenzel</p>
          <ProfileIcons
            linkedIn="https://linkedin.com/in/tylerwenzel"
            personal="https://tylerwenzel.dev"
            github="https://github.com/tyler-wenzel"
            mail="mailto:wenzeltyler9@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}
