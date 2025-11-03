/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";



export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen bg-green-100 flex items-center justify-center text-center">
        <Image src="/banner.jpg" fill alt="Banner" className="object-cover" />
        <div className=" relative z-10 bg-black/50 p-10 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            🌽 VegiShop
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            Fresh & Organic Vegetables Delivered To Your Door
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </section>

     <section className="py-16 px-6 bg-white">
  <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
    Featured Products
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    {/* Product 1 */}
    <div className="border rounded-lg shadow hover:shadow-lg p-4 text-center">
      <Image
        src="/newtojpg.jpg"
        alt="Tomatoes"
        width={300}       // fixed width
        height={400}      // adjust height to match natural vertical image
        className="mx-auto rounded-lg"
      />
      <h3 className="mt-4 text-lg font-semibold">Fresh Tomatoes</h3>
      <p className="text-gray-500">₹50 / kg</p>
    </div>

    {/* Product 2 */}
    <div className="border rounded-lg shadow hover:shadow-lg p-4 text-center">
      <Image
        src="/car.jpg"
        alt="Carrots"
        width={300}       
        height={400}      // same aspect ratio as tomato
        className="mx-auto rounded-lg"
      />
      <h3 className="mt-4 text-lg font-semibold">Organic Carrots</h3>
      <p className="text-gray-500">₹40 / kg</p>
    </div>

    {/* Product 3 */}
    <div className="border rounded-lg shadow hover:shadow-lg p-4 text-center">
      <Image
        src="/bro.jpg"
        alt="Broccoli"
        width={300}
        height={400}      // same aspect ratio
        className="mx-auto rounded-lg"
      />
      <h3 className="mt-4 text-lg font-semibold">Broccoli</h3>
      <p className="text-gray-500">₹60 / kg</p>
    </div>

  </div>
</section>


{/* Happy Customers Section */}
<section className="py-16 bg-green-50">
  <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
    🌟 Happy Customers
  </h2>

  <div className="overflow-hidden">
    <div className="flex animate-scroll gap-8">
      {/* Review 1 */}
      <div className="min-w-[300px] bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
        <Image
          src="/car.jpg"
          alt="Carrots"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <p className="mt-4 text-gray-700 italic">
          "The carrots were super fresh and crunchy! 🥕 My kids loved them."
        </p>
        <h4 className="mt-2 font-semibold text-green-700">- Anjali</h4>
      </div>

      {/* Review 2 */}
      <div className="min-w-[300px] bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
        <Image
          src="/bro.jpg"
          alt="Broccoli"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <p className="mt-4 text-gray-700 italic">
          "Best broccoli I’ve ever bought 🌱 Tasted really fresh."
        </p>
        <h4 className="mt-2 font-semibold text-green-700">- Rahul</h4>
      </div>

      {/* Review 3 */}
      <div className="min-w-[300px] bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
        <Image
          src="/newtojpg.jpg"
          alt="Tomatoes"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <p className="mt-4 text-gray-700 italic">
          "Juicy tomatoes 🍅 delivered right to my doorstep!"
        </p>
        <h4 className="mt-2 font-semibold text-green-700">- Meera</h4>
      </div>

      {/* Review 4 */}
      <div className="min-w-[300px] bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
        <Image
          src="/car.jpg"
          alt="Veggies"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <p className="mt-4 text-gray-700 italic">
          "Quick delivery and amazing quality veggies 🌽"
        </p>
        <h4 className="mt-2 font-semibold text-green-700">- Kavya</h4>
      </div>
    </div>
  </div>
</section>


{/* Contact Section */}
<section className="relative py-20 px-6 bg-gradient-to-r from-green-100 via-green-50 to-green-100 relative py-20 px-6 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/banner')" }}>
 
  <h2 className="text-4xl font-extrabold text-center text-green-700 mb-16 tracking-wide">
    🌱 Contact Us
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left: Contact Info Card */}
    <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-green-200 hover:shadow-2xl transition duration-500">
      <h3 className="text-2xl font-semibold mb-4 text-green-700">We’d love to hear from you!</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Have questions about our vegetables or delivery service? 🌽🍅  
        Reach out and we’ll respond as soon as possible.
      </p>

      <div className="space-y-3 text-gray-700">
        <p className="flex items-center gap-2"><span className="font-bold">📧 Email:</span> support@vegishop.com</p>
        <p className="flex items-center gap-2"><span className="font-bold">📞 Phone:</span> +91 98765 43210</p>
        <p className="flex items-center gap-2"><span className="font-bold">📍 Address:</span> Kochi, Kerala, India</p>
      </div>

      <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition duration-300">
        Send a Message
      </button>
    </div>

    {/* Right: Fancy Image Grid */}
<div className="grid grid-cols-2 gap-4">
  {["/bro.jpg", "/car.jpg", "/newtojpg.jpg", "/bro.jpg"].map((src, i) => (
    <div
      key={i}
      className="relative group overflow-hidden rounded-xl shadow-lg h-40 md:h-48"
    >
      <Image
        src={src}
        alt="Veg Image"
        fill
        className="object-cover rounded-xl transform group-hover:scale-110 transition duration-500"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold text-lg transition">
        Fresh & Organic
      </div>
    </div>
  ))}
</div>

  </div>
</section>

{/* Footer */}
<footer className="bg-green-700 text-white py-10 mt-20">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
    <h3 className="text-2xl font-bold flex items-center gap-2">🌽 VegiShop</h3>
    <p className="mt-4 md:mt-0 text-gray-200">© 2025 VegiShop. All Rights Reserved.</p>
    <div className="flex gap-6 mt-4 md:mt-0 text-lg">
      <Link href="#" className="hover:text-gray-300 transition">🌐 Facebook</Link>
      <Link href="#" className="hover:text-gray-300 transition">📸 Instagram</Link>
      <Link href="#" className="hover:text-gray-300 transition">🐦 Twitter</Link>
    </div>
  </div>
</footer>


</main>

  );
}
