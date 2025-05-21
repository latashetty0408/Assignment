const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-6 relative h-full">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          {/* Opening quote mark */}
          <div className="text-gray-200 text-6xl font-serif absolute top-2 right-8">"</div>

          {/* Testimonial text */}
          <p className="text-gray-800 mb-4 relative z-10 text-left">{testimonial.quote}</p>

          {/* Closing quote mark */}
          <div className="text-gray-200 text-6xl font-serif absolute bottom-2 right-8">"</div>

          {/* Name and title */}
          <div className="text-left">
            <h4 className="font-bold text-lg">{testimonial.name}</h4>
            <p className="text-gray-600">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
