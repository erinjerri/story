import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/socialProfile"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io"
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from "./style"

const SocialLinks = [
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/erinjerri",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/erinjerri/",
    tooltip: "LinkedIn",
  },
]

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>About Erin Pangilinan</h2>
        <p>
          Stealth biotech x XR x AI entrepreneur, lifelong artist, software engineer (coding since age 8) and computational designer hybrid, internationally renowned published author, educator, and expert in XR, scholar-activist.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>My Story</h2>
        <p>
        Stealth Project: I am creating new approaches to real-time 3D data and machine learning visualization tools used in spatial computing to advance biotech and healthtech starting with on neurodegenerative brain disease, particularly Alzheimer’s Disease.
        </p>
        <p>
        <h2>Fellowships</h2>
        *Alley Founder Program - housed at Verizon Ventures, Palo Alto - (2019)
        </p>    <p>
        *University of San Francisco (USF), Data Institute, Deep Learning Program (2017-2018)
        </p>
        *Oculus Launch Pad (2018)
        <p></p><p></p>
        <h2>Specialities</h2>
        <p>Data Science, AI, Augmented Reality, Virtual Reality, Computational Life Sciences.
        </p><p>
        I speak elementary: Tagalog, French.
        </p> <p>
        I write and read: HTML, CSS, JS, Objective Swift, Python, C#, C++, LAMP (Linux, MySQL, PHP).
        </p> <p>
        Tools of choice: XCode, Unity, Unreal Engine, Adobe (Photoshop, InDesign, Illustrator, XD), Sketch, Maya.
        </p> <p>
        <h2>More about my latest book</h2>
        I conceptualized the O’Reilly Media book anthology: Creating Augmented and Virtual Realities: Theory and Practice for Next-Generation of Spatial Computing, to be translated into Chinese (December 2019), Korean (February 2020) and Japanese (2020). All book sales go toward diversity and inclusion education programs to my 501(c)(3) non-profit ARVR Academy, focused on serving women and underrepresented communities.
        </p> <p>
        <h2>Scholar Activism</h2>
        About my open-source contributions to community: I co-founded, scaled, and serve on the board of 2 diversity and inclusion tech 501(c)(3) non-profit organizations focused on education, professional development and innovation, Filipino Americans in STEAM (Science Tech Engineering Arts and Math (FASTER, President) and ARVR Academy (Board Member).
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
