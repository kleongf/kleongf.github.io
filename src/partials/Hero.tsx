import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi, I'm <GradientText>Kevin Fong</GradientText> 👋
        </>
      }
      description={
        <>
          I’m a junior at Palo Alto High School interested in chemistry,
          engineering, and computer science. I participate in cross country and
          track, and I’m an avid chess player, pianist, and programmer.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        // we're gonna have linkedin, github, discord
        // TODO: change the hrefs
        <>
          <a href="https://github.com/kleongf/">
            <HeroSocial
              src="/assets/images/githublogo-removebg-preview.png"
              alt="Github icon"
            />
          </a>
          <a href="https://discordapp.com/users/753769782880370769">
            <HeroSocial
              src="/assets/images/discordlogo-removebg-preview.png"
              alt="Discord icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/kevin-fong-722115329/">
            <HeroSocial
              src="/assets/images/linkedinlogo-removebg-preview.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="mailto:kf53307@pausd.us">
            <HeroSocial
              src="/assets/images/gmaillogo-removebg-preview.png"
              alt="Gmail icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
