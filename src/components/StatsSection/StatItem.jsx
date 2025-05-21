const StatItem = ({ number, suffix = "+", description, children }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-2">{children}</div>
      <div className="text-white text-sm max-w-[150px]">{description}</div>
    </div>
  )
}

export default StatItem
