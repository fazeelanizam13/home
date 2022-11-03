import { useEffect } from "react"
import horizon from '../images/horizon.svg'
import ig from "../images/ig.png"
import li from "../images/li.png"
import blog from "../images/blog.png"
import gh from "../images/gh.png"

import { stars } from '../helpers'

export default function Home() {
  // sky
  useEffect(stars, [])

  return (
    <>
      <div id="sky">
        <div className="star"></div>
        <div className="content">
          <div className="icons">
            <a href="https://gist.github.com/fazeelanizam13" target="_blank" title="gists/github"><img src={gh} alt="" /></a>
            <a href="https://not-a-tech-blog.web.app/" target="_blank" title="blog"><img src={blog} alt="" /></a>
            <a href="https://www.linkedin.com/in/fazeelanizam/" target="_blank" title="linkedin"><img src={li} alt="" /></a>
            <a href="https://www.instagram.com/fazeelanizam13/" target="_blank" title="instagram"><img src={ig} alt="" /></a>
          </div>
        </div>
        <img id="horizon" src={horizon} alt="horizon" />
      </div>
    </>
  )
}

