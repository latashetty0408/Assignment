const ExploreLinks = () => {
  const links = [
    { id: 1, text: "About Us", url: "#" },
    { id: 2, text: "Services", url: "#" },
    { id: 3, text: "Blogs", url: "#" },
    { id: 4, text: "Contact Us", url: "#" },
    { id: 5, text: "Privacy Policy", url: "#" },
    { id: 6, text: "Terms & Condition", url: "#" },
  ]

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

export default ExploreLinks
