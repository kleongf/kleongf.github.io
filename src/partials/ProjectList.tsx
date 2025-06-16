import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Experience</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Piano"
        description="Since I was 6 years old, I’ve been playing the piano. I’ve won some awards, such as 1st place at the Rising Star Piano Competition and 1st prize with Special Honors at the 2018 Frederic Chopin Piano Competition. As of right now, I am involved in the Bach to Bach Project, which brings classical music to communities all over the world."
        link="https://www.backtobachproject.org/ca-palo-alto/"
        img={{
          src: '/assets/images/piano.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Piano</Tags>
            {/* <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags> */}
          </>
        }
      />
      <Project
        name="Chess"
        description="In November 2023, I got my National Master title from the US Chess Federation. Since then, I’ve done private coaching, coached chess camps, and published a Chessable course. "
        link="https://www.chessable.com/everyday-endgames/course/213419/"
        img={{ src: '/assets/images/100gmbest.png', alt: 'Project Fire' }}
        category={
          <>
            {/* <Tags color={ColorTags.VIOLET}>Next.js</Tags> */}
            <Tags color={ColorTags.EMERALD}>Chess</Tags>
            {/* <Tags color={ColorTags.YELLOW}>JavaScript</Tags> */}
          </>
        }
      />
      <Project
        name="Sports"
        description="I joined Paly’s Junior Varsity cross country team in 2022 and won the MVP award in 2023. I joined the Varsity team in 2024 and represented the team at important meets, such as the Woodbridge Invitational and Central Coast Sectionals. I’ve also run track since 2023, and represented Paly every year at DeAnza league trials and finals."
        link="https://www.athletic.net/athlete/21209000/cross-country/"
        img={{ src: '/assets/images/xc.png', alt: 'Project Maps' }}
        category={
          <>
            {/* <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags> */}
            <Tags color={ColorTags.INDIGO}>XC</Tags>
            <Tags color={ColorTags.ROSE}>TF</Tags>
          </>
        }
      />

      <Project
        name="Work and Volunteering"
        description="I really enjoy community service, and have been a volunteer for Bay Area Chess from 2022 to 2024. Since then, I’ve been a private chess coach for talented students across the Bay Area. I’ve also done environmental volunteer work for Save the Bay, Canopy, and renovating Paly’s community garden. Currently, I work a part time job at Fleet Feet Menlo Park."
        link="https://savesfbay.org/"
        img={{ src: '/assets/images/baylands.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Volunteering</Tags>
            <Tags color={ColorTags.SKY}>Work Experience</Tags>
          </>
        }
      />

      <Project
        name="Robotics"
        description="I’m passionate about robotics, and I’m currently the software lead on FTC Team 23641, Cuberobot. We made NorCal regionals and won xxx place at the Michiana premier event, placing our autonomous score at #2 worldwide. Since then, I’ve been working on a Java library called [Cubelib], which makes robot programming easy for all FTC teams. You can view it here."
        link="https://cuberobot.gitbook.io/cubelib/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.RED}>FIRST Robotics</Tags>
            <Tags color={ColorTags.BLUE}>Java</Tags>
          </>
        }
      />

      <Project
        name="Web Developer"
        description="In the summer of 2024, my friend and I created Tutoring on Demand, a website that allows students to tutor others for volunteer hours, anytime, anywhere. It currently has over 100 users at Paly and is being implemented in other schools around the Bay Area. 
"
        link="https://tutoring-on-demand.org/"
        img={{ src: '/assets/images/reactlogo.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.GREEN}>React</Tags>
            <Tags color={ColorTags.ORANGE}>Javascript</Tags>
          </>
        }
      />

      <Project
        name="Paly Python"
        description="Since 2023, I’ve been the president of the Paly Python club. We’ve hosted multiple schoolwide programming competitions, capture the flag competitions, and gone to hackathons as a team. We often discuss AI and machine learning, and here’s one of our projects where I made a GAN to generate images of cats."
        link="https://github.com/kleongf/CatGenerator/"
        img={{ src: '/assets/images/palypython.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.PINK}>Python</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
