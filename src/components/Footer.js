const CustomLink = ({ href, text }) => (
  <a href={href} target="_blank" rel="noreferrer">{text}</a>
)

export default function Footer() {
  return (
    <div className="footer">
      <p>
        {/* <span>
            <CustomLink href="https://fazeelanizam13.github.io/blog/">Developer Diaries</CustomLink>
          </span>
          <span>|</span> */}
        <span>
          <CustomLink href="https://www.linkedin.com/in/fazeelanizam/" text="LinkedIn" />
        </span>
        <span>|</span>
        <span>
          <CustomLink href="https://github.com/fazeelanizam13" text="GitHub" />
        </span>
        <span>|</span>
        <span>
          <CustomLink href="https://www.instagram.com/fazeelanizam13/" text="Instagram" />
        </span>
      </p>

      <p><span>&copy; 2022 Fazeela Nizam</span></p>
    </div>
  )
}