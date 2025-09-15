export default function HomePage() {
  return (
    <div className="bg-[#f7f3e9] font-inter">
      {/* Navigation Bar */}
      <nav className="bg-[#4a2c2a] text-white p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Amazing Coffee</a>
          <div className="hidden md:flex space-x-6 font-semibold">
            <a href="#about" className="hover:text-[#967d68] transition-colors">About</a>
            <a href="#products" className="hover:text-[#967d68] transition-colors">Products</a>
            <a href="#blog" className="hover:text-[#967d68] transition-colors">Blog</a>
            <a href="#contact" className="hover:text-[#967d68] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative text-center text-white p-6 sm:p-12 bg-[#4a2c2a]">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Elevate Your Coffee Experience
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover the finest specialty coffee from around the world.
        </p>
        <a
          href="#products"
          className="bg-white text-[#4a2c2a] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Explore Now
        </a>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-[#4a2c2a]">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Amazing Specialty Coffee, we believe every bean tells a story.
              From meticulously selecting the finest Arabica beans grown in
              Vietnam&apos;s highlands to the precise roasting process, every
              step is a labor of love.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/600x400/967d68/FFFFFF?text=About+Us"
              alt="About Us"
              className="rounded-xl shadow-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main id="products" className="max-w-screen-xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://placehold.co/600x400/967d68/FFFFFF?text=Coffee+Beans"
              alt="Coffee Beans"
              className="w-full h-[250px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Premium Whole Beans</h3>
              <p className="text-gray-600">
                Carefully selected beans sourced from the best farms around the globe.
              </p>
            </div>
          </div>
          {/* Product 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://placehold.co/600x400/4a2c2a/FFFFFF?text=Ground+Coffee"
              alt="Ground Coffee"
              className="w-full h-[250px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Freshly Ground Coffee</h3>
              <p className="text-gray-600">
                Enjoy the rich flavor instantly with our perfectly ground coffee.
              </p>
            </div>
          </div>
          {/* Product 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://placehold.co/600x400/7a5b4c/FFFFFF?text=Coffee+Accessories"
              alt="Coffee Accessories"
              className="w-full h-[250px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Coffee Accessories</h3>
              <p className="text-gray-600">
                Everything you need to brew the perfect cup at home.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">News & Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://placehold.co/600x400/f0e3d2/4a2c2a?text=Roasting+Coffee"
                alt="Roasting Coffee"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  The Art of Roasting Specialty Coffee
                </h4>
                <p className="text-sm text-gray-600">
                  Discover the secrets to achieving the purest flavor profiles.
                </p>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://placehold.co/600x400/d9c0a9/4a2c2a?text=Health+Benefits"
                alt="Health Benefits"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Unexpected Health Benefits of Coffee
                </h4>
                <p className="text-sm text-gray-600">
                  It&apos;s not just delicious—coffee also offers great health perks.
                </p>
              </div>
            </div>
            {/* Blog Post 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://placehold.co/600x400/b8a69a/4a2c2a?text=Brewing+Guide"
                alt="Brewing Guide"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  A Simple Guide to Brewing the Perfect Cup
                </h4>
                <p className="text-sm text-gray-600">
                  Step-by-step instructions for a perfect brew at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#4a2c2a]">Contact Us</h2>
          <form className="bg-white rounded-2xl shadow-lg p-8 max-w-lg mx-auto">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#967d68]"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#967d68]"
              />
            </div>
            <div className="mb-6">
              <textarea
                rows={4}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#967d68]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#4a2c2a] text-white px-6 py-3 rounded-lg shadow hover:bg-[#3b2321] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4a2c2a] text-white p-8 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <p className="text-lg">&copy; 2024 Amazing Specialty Coffee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
