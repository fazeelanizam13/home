import { Link } from "react-router-dom"

export default function Anchor ({ href, customStyles, children, className }) {
  return (
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