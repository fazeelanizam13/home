import { useEffect, useState } from "react"
import horizon from '../images/horizon.svg'
import coffee from '../images/vectors/coffee.svg'
import flowers from '../images/vectors/flowers.svg'

import hermosaBrandingPreview from '../images/mockups/hermosa/hermosa-branding-preview.png'
import shirtsPreview from '../images/shirts/shirts-header.jpg'

import teaSwatch from '../images/vectors/tea/swatch.png'
import orangeSwatch from '../images/vectors/orange/swatch.png'
import gesturesSwatch from '../images/vectors/gestures/1swatch.png'

import { stars } from '../helpers'

import { Anchor, Footer, Fade } from "."

const openTab = (e, id) => {
  let i, tabs, tabContent;

  // content under tabs. hide them all
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // tabs. remove the active from all
  tabs = document.getElementsByClassName("tab");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  // id = id of the content under clicked tab
  // display it
  document.getElementById(id).style.display = "flex";

  // put active class to clicked tab
  e.currentTarget.className += " active";
}

const Tab = ({ label, tabContentID, defaultTab }) => (
  <span className="tab" id={defaultTab && "default"} onClick={e => openTab(e, tabContentID)}>
    {label}
  </span>
)

const Project = ({ vector, title, content, customStyles, setVisibleProject }) => (
  // onClick works with 'vector' only if 'setVisibleProject' is present
  // else it can be link if wrapped around an Anchor
  <div className="project" style={{ ...customStyles }} onClick={() => {
    if (setVisibleProject) {
      setVisibleProject(vector)
      document.getElementsByTagName('html')[0].classList.add('project-open')
    }
  }}>
    <div className="title">
      <p>{title}</p>
    </div>

    {
      content &&
      <div className="content">
        <p>{content}</p>
      </div>
    }
  </div>
)

export default function Home() {
  const [visibleProject, setVisibleProject] = useState(null)

  // sky
  useEffect(stars, [])

  // tabs
  useEffect(() => {
    // click on default tab as component loads
    document.getElementById("default").click();
  }, [])

  const vectors = [
    {
      href: '/branding-assets-hermosa',
      title: "brand collateral for 'Hermosa'",
      content: "print and digital branding assets for a clothing label",
      customStyles: { backgroundImage: `url(${hermosaBrandingPreview})` },
    },
    {
      vector: flowers,
      title: <>.manually vectorized <Anchor
        href="https://www.instagram.com/p/CYafZJ2oVN-/"
        customStyles={{ color: "#958ed9" }}>image</Anchor> using Adobe Illustrator</>,
      customStyles: { backgroundImage: `url(${flowers})` }
    },
    {
      // vector: flowers, // no 'vector' as project opens in a new route
      href: '/chamomile-tea-pattern',
      title: "themed repeating surface pattern - chamomile flowers and tea cups",
      customStyles: { backgroundImage: `url(${teaSwatch})` }
    },
    {
      // vector: flowers, // no 'vector' as project opens in a new route
      href: '/blood-orange-pattern',
      title: "themed repeating surface pattern - blood orange slices",
      customStyles: { backgroundImage: `url(${orangeSwatch})` }
    },
    {
      // vector: flowers, // no 'vector' as project opens in a new route
      href: '/gestures-pattern',
      title: "themed repeating surface pattern - hand gestures and violets",
      customStyles: { backgroundImage: `url(${gesturesSwatch})` }
    },
    {
      vector: coffee,
      title: <>manually vectorized <Anchor
        href="https://unsplash.com/photos/RCfalHrnFAs?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
        customStyles={{ color: "#e6aa66" }}>image</Anchor> using Adobe Illustrator</>,
      customStyles: { backgroundImage: `url(${coffee})` }
    },
  ]

  const mockups = [
    // {
    //   href: '/branding-assets-hermosa',
    //   title: "brand collateral for 'Hermosa'",
    //   content: "print and digital branding assets for a clothing label",
    //   customStyles: { backgroundImage: `url(${hermosaBrandingPreview})` },
    // }
  ]

  const codingProjects = [
    // {
    //   href: "https://fazeelanizam13.github.io/how-to-FLEX/",
    //   customStyles: { backgroundColor: "#4a0c55" },
    //   title: "How to FLEX",
    //   content: "A learning tool for CSS Flexbox layout built with HTML, CSS and jQuery."
    // },
    // {
    //   href: "https://fazeelanizam13.github.io/swatch/",
    //   customStyles: { backgroundColor: '#884163' },
    //   title: "Swatch",
    //   content: "An app built with ReactJS which generates harmonious color palettes with user's choice of base and accent colors."
    // },
    {
      href: "https://fazeelanizam13.github.io/hanzi-guide/",
      customStyles: { 
        backgroundImage: 'url("https://fazeelanizam13.github.io/hanzi-guide/static/media/lantern.96202190.svg")',
        backgroundPosition: 'top right' 
      },
      title: "han-zi guide",
      content: "a ReactJS app which displays basic information about a given Chinese character"
    },
    {
      href: "https://fazeelanizam13.github.io/mozilla-rusl/",
      customStyles: { 
        backgroundImage: 'url("https://fazeelanizam13.github.io/mozilla-rusl/img/above-fold-pic.jpg")',
        backgroundPosition: 'center bottom' 
      },
      title: "offcial homepage: Mozilla Campus Club - RUSL",
      content: "developed as an entry for the single-page web design hackathon conducted by the Mozilla Campus Club of Rajarata University of Sri Lanka."
    },
    // {
    //   href: "https://fazeelanizam13.github.io/notes-app/",
    //   customStyles: { backgroundColor: "#8c1837" },
    //   title: "Notes",
    //   content: "A note taking app which imitates database functionality through local storage, written using React Hooks."
    // }
  ]

  return (
    <>
      <div id="sky">
        <div className="star"></div>
        <img id="horizon" src={horizon} alt="horizon" />
      </div>

      <div className="below-fold">
        <div className="work">
          <div className="tabs">
            {/* <Tab label="vectors 〰️➰" tabContentID="one" /> */}
            <Tab label="mockups 📱 and vector illustrations 〰️➰" tabContentID="two" defaultTab />
            {/* <Tab label="unexpected inspiration 🎨" tabContentID="three" /> */}
            <Tab label="code ⌨️" tabContentID="four" />
          </div>

          <div className="tab-content-wrapper">
            {/* <div className="tab-content" id="one">
              {
                mockups.map(({ href, title, content, customStyles }) => <Anchor
                  href={href}
                  customStyles={customStyles}
                  className="project-link"
                  key={href}
                >
                  <Project title={title} content={content} />
                </Anchor>)
              }
            </div> */}

            <div className="tab-content" id="two">
              {
                vectors.map(vector => {
                  // if there's 'href' wrap in Anchor
                  if (vector.href) {
                    return (
                      <Anchor
                        href={vector.href}
                        customStyles={vector.customStyles}
                        className="project-link"
                        key={vector.href}
                      >
                        <Project title={vector.title} content={vector.content} />
                      </Anchor>
                    )
                  } else {
                    // else return clickable thumbnail
                    return <Project {...vector} setVisibleProject={setVisibleProject} />
                  }
                })
              }
            </div>

            {/* <div className="tab-content" id="three">
              <Anchor href="/dressmaking-workshop-app" customStyles={{ backgroundImage: `url(${shirtsPreview})`, backgroundPosition: 'bottom' }}>
                <Project
                  title="Mobile App for a Fashion Atelier - Case Study"
                  content="Mobile UI prototype for an app that lets customers place orders for tailor-made dressshirts."
                />
              </Anchor>
            </div> */}

            <div className="tab-content" id="four">
              {
                codingProjects.map(({ href, customStyles, title, content }) => (
                  <Anchor href={href} customStyles={customStyles} key={href}>
                    <Project title={title} content={content} />
                  </Anchor>
                ))
              }
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <ProjectPage visibleProject={visibleProject} setVisibleProject={setVisibleProject} />
    </>
  )
}

const ProjectPage = ({ visibleProject, setVisibleProject }) => (
  <Fade show={visibleProject}>
    <div style={{ position: 'relative', zIndex: 2 }}>
      <div className="projectCloseButton" onClick={() => {
        setVisibleProject(null)
        document.getElementsByTagName('html')[0].classList.remove('project-open')
      }}></div>

      <div style={{
        backgroundColor: '#060606',
        backgroundImage: `url(${visibleProject})`,
        width: '100vw',
        height: '101vh',
        position: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
      }}></div>
    </div>
  </Fade>
)

