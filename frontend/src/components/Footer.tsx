import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#F7F8F0] py-12 px-10 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="flex items-center gap-2">
          <Link to={'/'}><img src='/logo.svg' /></Link>
        </div>

        <div>
          <h4 className="font-semibold">Product</h4>
          <ul className="text-sm mt-2 space-y-4 text-gray-600">
            <Link to={'/tax'}><li>Tax Comparison</li></Link>
            <Link to={'/schemes'}><li>Scheme Finder</li></Link>
            <Link to={'/chat'}><li>AI Assistant</li></Link>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Resources</h4>
          <ul className="text-sm mt-2 space-y-2 text-gray-600">
            <Link to={'/'}><li>About Us</li></Link>
            <Link to={'/'}><li>Contact</li></Link>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm mt-10 text-gray-500">
        © {new Date().getFullYear()} ArthSetu. All rights reserved.
      </p>
    </footer>
  )
}
