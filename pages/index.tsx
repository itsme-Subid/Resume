import Head from "next/head";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import profile from "../public/profile.jpg";

const animateBefore = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(100vh);
    }
`;
const animateAfter = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100vh);
    }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  & .top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    & img {
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      box-shadow: 0 -0.25rem 0.5rem rgba(var(--dark-color), 0.25);
    }
    & h1 {
      color: rgb(var(--dark-color));
      text-shadow: 0 0.1rem 0.25rem rgba(var(--dark-color), 0.25);
    }
    & h2 {
      color: rgb(var(--primary-color));
      font-weight: 600;
      font-size: 1.5rem;
      text-shadow: 0 0.1rem 0.25rem rgba(var(--primary-color), 0.25);
    }
    & p {
      color: rgb(var(--dark-color), 0.75);
    }
    &::before {
      content: "";
      position: absolute;
      top: -20rem;
      left: -10rem;
      width: 40rem;
      height: 40rem;
      border-radius: 50%;
      background: radial-gradient(
        rgba(var(--primary-color), 0.175),
        transparent,
        transparent
      );
      animation: ${animateBefore} 15s infinite;
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -20rem;
      right: -10rem;
      width: 40rem;
      height: 40rem;
      border-radius: 50%;
      background: radial-gradient(
        rgba(var(--secondary-color), 0.175),
        transparent,
        transparent
      );
      animation: ${animateAfter} 15s infinite;
      z-index: -1;
    }
  }
  & .body-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    & aside {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 20rem;
      gap: 0.5rem;
      & > div {
        width: 100%;
      }
      & h2 {
        position: relative;
        color: rgb(var(--secondary-color));
        text-shadow: 0 0.1rem 0.25rem rgba(var(--secondary-color), 0.25);
        font-weight: 600;
        font-size: 1.25rem;
        width: 100%;
        padding: 0.5rem;
        border-radius: 0.5rem;
        margin-bottom: 0.25rem;
        &:hover {
          background-color: rgb(var(--secondary-color), 0.1);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0.5rem;
          width: 2rem;
          height: 0.25rem;
          background-color: rgb(var(--secondary-color));
          border-radius: 0.5rem;
        }
      }
      & ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        & li {
          list-style: none;
          cursor: pointer;
          font-weight: 500;
          color: rgb(var(--dark-color), 0.75);
          padding: 0.5rem;
          border-radius: 0.5rem;
          &:hover {
            background-color: rgb(var(--primary-color), 0.1);
          }
        }
      }
    }
    & > .others {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > div {
        width: 100%;
      }
      & h2 {
        position: relative;
        color: rgb(var(--secondary-color));
        text-shadow: 0 0.1rem 0.25rem rgba(var(--secondary-color), 0.25);
        font-weight: 600;
        font-size: 1.25rem;
        width: 100%;
        padding: 0.5rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        &:hover {
          background-color: rgb(var(--secondary-color), 0.1);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0.5rem;
          width: 3rem;
          height: 0.25rem;
          background-color: rgb(var(--secondary-color));
          border-radius: 0.5rem;
        }
      }
      & ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        & li {
          list-style: none;
          cursor: pointer;
          font-weight: 500;
          color: rgb(var(--dark-color), 0.75);
          & a {
            display: flex;
            align-items: center;
            & h3 {
              padding: 0.5rem;
              border-radius: 0.5rem;
              &:hover {
                background-color: rgb(var(--primary-color), 0.1);
              }
            }
          }
          & .description {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.5rem;
            cursor: auto;
            & .skills-used {
              display: flex;
              gap: 0.5rem;
              & span {
                color: rgb(var(--dark-color), 0.75);
                font-size: 0.75rem;
                font-weight: bold;
                padding: 0.5rem 1rem;
                border: 1px solid rgb(var(--primary-color));
                border-radius: 2rem;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                &:hover {
                  background: rgb(var(--primary-color));
                }
              }
            }
          }
        }
      }
      & .education {
      }
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>SUBID DAS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="top container">
          <Image src={profile} width={200} height={200} alt="" />
          <div className="dev">
            <h1>SUBID DAS</h1>
            <h2>Full-Stack Web Developer</h2>
            <p>
              I{"'"}m a Full-Stack Developer specializing in the MERN Stack with
              typescript, with a particular focus on Frontend development. I
              {"'"}m an enthusiastic and passionate self-taught learner, always
              striving to learn and apply new technologies. I have the drive and
              ambition to succeed and is not afraid of hard work and dedication.
            </p>
          </div>
        </div>
        <div className="body-content container">
          <aside>
            <div className="contact">
              <h2>Contact</h2>
              <ul>
                <li>
                  <a href="mailto:itsmesubid@gmail.com">itsmesubid@gmail.com</a>
                </li>
                <li>
                  <a href="tele:+918902175210">+91 890 217 5210</a>
                </li>
                <li>Kolkata, West Bengal, India</li>
                <li>
                  <a href="https://github.com/itsme-Subid">
                    github.com/itsme-Subid
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/itsme-subid">
                    linkedin.com/in/itsme-subid
                  </a>
                </li>
              </ul>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              <ul>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Styled-Components</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div className="languages">
              <h2>Languages</h2>
              <ul>
                <li>Typescript</li>
                <li>Javascript</li>
                <li>C/C++</li>
              </ul>
            </div>
          </aside>
          <div className="others">
            <div className="projects">
              <h2>Projects</h2>
              <ul>
                <li>
                  <a href="https://github.com/WebInRush/WebInRush">
                    <h3>WebInRush</h3> <span>(12/2022 - Present)</span>
                  </a>
                  <div className="description">
                    <p>
                      Developed and launched a full-stack web application called
                      WebInRush using React.js, TypeScript, Styled-Components,
                      Node.js, Express.js, and MySQL. The platform allows users
                      to sign up and place orders for custom websites, and
                      handle all the functionality related to it.
                    </p>
                    <div className="skills-used">
                      {[
                        "React.js",
                        "TypeScript",
                        "Styled-Components",
                        "Node.js",
                        "Express.js",
                        "MySQL",
                      ].map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </li>
                <li>
                  <a href="https://nextacademy.vercel.app/">
                    <h3>Next Academy</h3> <span>(12/2022 - 01/2023)</span>
                  </a>
                  <div className="description">
                    <p>
                      Created and designed a responsive front-end web
                      application for Next Academy using Next.js, TypeScript and
                      Styled-Components. The platform displays various web
                      development, web design, and digital marketing courses,
                      offering a visually appealing and user-friendly browsing
                      experience.
                    </p>
                    <div className="skills-used">
                      {["Next.js", "TypeScript", "Styled-Components"].map(
                        (skill) => (
                          <span key={skill}>{skill}</span>
                        )
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <a href="https://movie108.vercel.app/">
                    <h3>Movie108</h3> <span>(10/2022 - 11/2022)</span>
                  </a>
                  <div className="description">
                    <p>
                      Developed and implemented a full-stack web application
                      using React.js, Styled-Components, Node.js, Express.js,
                      and MongoDB. The platform, called Movie108, allows users
                      to sign up, add their reviews and ratings for movies, and
                      view reviews of any movie on the site.
                    </p>
                    <div className="skills-used">
                      {[
                        "React.js",
                        "Styled-Components",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                      ].map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="education">
              <h2>Education</h2>
              <ul className="education-list">
                <li>
                  <a href="">
                    {" "}
                    <h3>Surendranath Vidyaniketan</h3> <span>12th Boards</span>{" "}
                    <span>(09/2021 - Present)</span>
                  </a>
                  <div className="description">
                    <p>
                      It{"'"}s a Government school in Kolkata, India. It is
                      affiliated to the West Bengal Council of Higher Secondary
                      Education.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
