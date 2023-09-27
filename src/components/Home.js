import { useEffect } from "react"
import horizon from '../images/horizon.svg'
import be from "../images/be.png"
import li from "../images/li.png"
import blog from "../images/blog.png"
import gh from "../images/gh.png"
import ReactGA from 'react-ga';

import { stars, useEventTracker } from '../helpers'

export default function Home() {
  const eventTracker = useEventTracker()

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  // sky
  useEffect(stars, [])

  return (
    <>
      <div id="sky">
        <div className="star"></div>
        <div className="content">
          <div className="icons">
            <a onClick={() => eventTracker('click', 'github')} href="https://gist.github.com/fazeelanizam13" target="_blank" rel="noreferrer" title="gists/github"><img src={gh} alt="" /></a>
            <a onClick={() => eventTracker('click', 'blog')} href="https://not-a-tech-blog.web.app/" target="_blank" rel="noreferrer" title="blog"><img src={blog} alt="" /></a>
            <a onClick={() => eventTracker('click', 'linkedin')} href="https://www.linkedin.com/in/fazeelanizam/" target="_blank" rel="noreferrer" title="linkedin"><img src={li} alt="" /></a>
            <a onClick={() => eventTracker('click', 'behance')} href="https://www.behance.net/fazeelanizam" target="_blank" rel="noreferrer" title="behance"><img src={be} alt="" /></a>
          </div>
        </div>
        <img id="horizon" src={horizon} alt="horizon" />
      </div>
    </>
  )
}

