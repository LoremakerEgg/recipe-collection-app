import styling from "./about.module.scss";

export default function About() {
  return (
    <section className={styling.aboutSection}>
      <div className={styling.memberDiv}>
        <h2 className={styling.name}>AGATA JANISZEWSKA</h2>
        <img src="agata-placeholder.jpg" />
        <p className={styling.textsection}>
          Agata is highly organized, with a strong background in --JobTitle!!.
          She excels at keeping projects on track and ensuring that all team
          members are working together effectively. With a focus on back-end
          development, she can help ensure that your website or app is both
          efficient and user-friendly.
        </p>
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
        <p className={styling.textsection}>
          Anton is a tech expert with a passion for back-end development. With a
          wealth of knowledge and experience, he can help optimize your website
          or app's performance and security. Whether you need help with database
          design, server configuration, or anything in between, Anton is the
          person to turn to.
        </p>
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
        <p className={styling.textsection}>
          Emma is an experienced animator with a keen interest in dynamic CSS
          and micro animations. She brings a creative eye to web development and
          can help bring your designs to life with fluid, eye-catching
          animations.
        </p>
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
