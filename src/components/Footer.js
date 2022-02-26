import { Anchor } from "."

export default function Footer() {
  return (
    <div className="footer">
      <p>
        {/* <span>
            <Anchor href="https://fazeelanizam13.github.io/blog/">Developer Diaries</Anchor>
          </span>
          <span>|</span> */}
        <span>
          <Anchor href="https://www.linkedin.com/in/fazeelanizam/">LinkedIn</Anchor>
        </span>
        <span>|</span>
        <span>
          <Anchor href="https://github.com/fazeelanizam13">GitHub</Anchor>
        </span>
        <span>|</span>
        <span>
          <Anchor href="https://www.instagram.com/fazeelanizam13/">Instagram</Anchor>
        </span>
      </p>

      <p><span>&copy; 2022 Fazeela Nizam</span></p>
    </div>
  )
}