import styling from "./about.module.scss";

export default function About() {
  return (
    <main className={styling.aboutMain}>
      <h1>About the Developers</h1>
      <section className={styling.aboutSection}>
        <div className={styling.firstMemberDiv}>
          <h2>AGATA JANISZEWSKA</h2>
          <img src="agata-placeholder.jpg" />
          <p>INFO GOES HERE</p>
          <ul>
            <li>I DID THIS</li>
            <li>AND THIS</li>
            <li>AND THIS</li>
            <li>AND THIS</li>
            <li>AND THIS</li>
          </ul>
          <div className={styling.linkDiv}>
            <img src="github-mark.svg" />
            <a target="_blank" href="https://github.com/jani-agata">
              Agata's GitHub
            </a>
          </div>
        </div>
        <div className={styling.secondMemberDiv}>
          <h2>ANTON KOLLER</h2>
          <img src="anton-placeholder.jpg" />
          <p>INFO GOES HERE</p>
          <ul>
            <li>I DID THIS</li>
            <li>AND THIS</li>
            <li>AND THIS</li>
            <li>AND THIS</li>
            <li>AND THIS</li>
          </ul>
          <div className={styling.linkDiv}>
            <img src="github-mark.svg" />
            <a target="_blank" href="https://github.com/LoremakerEgg">
              Anton's GitHub
            </a>
          </div>
        </div>
        <div className={styling.thirdMemberDiv}>
          <h2>EMMA LINDAHL</h2>
          <img src="emma-placeholder.jpg" />
          <p>INFO GOES HERE</p>
          <ul>
            <li>I DID THIS</li>
            <li>AND THIS</li>
            <li>AND THIS</li>
            <li>AND THIS</li>
            <li>AND THIS</li>
          </ul>
          <div className={styling.linkDiv}>
            <img src="github-mark.svg" />
            <a target="_blank" href="https://github.com/EmmaLindahl">
              Emma's GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
