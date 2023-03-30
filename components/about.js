import styling from "./about.module.scss";

export default function About() {
  return (
    <section className={styling.aboutSection}>
      <div className={styling.memberDiv}>
        <h2 className={styling.name}>AGATA JANISZEWSKA</h2>
        <img src="agata-placeholder.jpg" />
        <p>INFO GOES HERE</p>
        <ul>
          <li>I DID THIS</li>
          <li>AND THIS</li>
          <li>AND THIS</li>
          <li>AND THIS</li>
          <li>AND THIS</li>
        </ul>
        <div className={styling.githubContainer}>
          <img src="github-mark.svg" height="40px" width="40px" />
          <a
            className={styling.link}
            target="_blank"
            href="https://github.com/jani-agata"
          >
            Agata's GitHub
          </a>
        </div>
      </div>
      <div className={styling.memberDiv}>
        <h2 className={styling.name}>ANTON KOLLER</h2>
        <img src="agata-placeholder.jpg" />
        <p>INFO GOES HERE</p>
        <ul>
          <li>I DID THIS</li>
          <li>AND THIS</li>
          <li>AND THIS</li>
          <li>AND THIS</li>
          <li>AND THIS</li>
        </ul>
        <div className={styling.githubContainer}>
          <img src="github-mark.svg" height="40px" width="40px" />
          <a
            className={styling.link}
            target="_blank"
            href="https://github.com/LoremakerEgg"
          >
            Anton's GitHub
          </a>
        </div>
      </div>
      <div className={styling.memberDiv}>
        <h2 className={styling.name}>EMMA LINDAHL</h2>
        <img src="agata-placeholder.jpg" />
        <p>INFO GOES HERE</p>
        <ul>
          <li>I DID THIS</li>
          <li>AND THIS</li>
          <li>AND THIS</li>
          <li>AND THIS</li>
          <li>AND THIS</li>
        </ul>
        <div className={styling.githubContainer}>
          <img src="github-mark.svg" height="40px" width="40px" />
          <a
            className={styling.link}
            target="_blank"
            href="https://github.com/EmmaLindahl"
          >
            Emma's GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
