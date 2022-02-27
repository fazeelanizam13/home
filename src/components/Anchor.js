import { Link } from "react-router-dom"

export default function Anchor({ href, hrefType, customStyles, children, className }) {
  return (hrefType === 'external') ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ ...customStyles }}
      className={className}
    >
      {children}
    </a>
  ) : (
    <Link
      to={href}
      target="_blank"
      rel="noreferrer"
      style={{ ...customStyles }}
      className={className}
    >
      {children}
    </Link>
  )
}