const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="flex-shrink-0 text-orange-500 w-12 h-12">
        <img src={imageSrc} alt={title} className="w-full h-full object-contain" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
