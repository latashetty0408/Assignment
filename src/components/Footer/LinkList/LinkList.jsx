const LoremLinks = () => {
  // Create 7 Lorem Ipsum links as shown in the design
  const links = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    text: "Lorem Ipsum",
    url: "#",
  }))

  return (
    <ul className="footer-links">
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  )
}

export default LoremLinks
