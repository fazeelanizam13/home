export default function Anchor ({ href, customStyles, children, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ ...customStyles }}
      className={className}
    >
      {children}
    </a>
  )
}