import { Building2, User } from "lucide-react"

const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-lg overflow-hidden border border-orange-500 h-full flex flex-col">
      <div className="relative">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LfjAE2xM9gyRRctGaMHmPrcSxc3UDm.png"
          alt="Blog post"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-white py-1 px-3 rounded-tr-lg">
          <span className="text-orange-500 font-bold">{blog.date}</span>
        </div>
      </div>
      <div className="p-5 bg-[#0a0b2e] text-white flex-grow flex flex-col">
        <div className="flex items-center text-sm mb-3 text-gray-300">
          <div className="flex items-center mr-4">
            <Building2 size={16} className="mr-1 text-gray-400" />
            <span>{blog.category}</span>
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-1 text-gray-400" />
            <span>{blog.author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
        <p className="text-sm text-gray-300 mb-4 flex-grow">{blog.excerpt}</p>
        <a href="#" className="text-orange-500 hover:underline mt-auto">
          Read more
        </a>
      </div>
    </div>
  )
}

export default BlogCard
