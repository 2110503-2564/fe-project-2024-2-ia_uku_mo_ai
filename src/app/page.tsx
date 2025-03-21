import Banner from "@/components/Banner"
import DetailSection from "@/components/DetailSection";

export default function HomePage() {
  return (
    <main className="pt-12">
      <Banner/>
      <DetailSection/>
      <section className="text-center mt-5 text-gray-800">
        <h2 className="text-3xl font-bold">Welcome to Our Platform</h2>
        <p className="text-base leading-7 max-w-2xl mx-auto mt-2">
          Discover a world of possibilities with our cutting-edge solutions. We are here to help you achieve your goals with ease and efficiency.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Fintech</h3>
            <p>
              Revolutionize the financial industry with innovative tools and secure solutions tailored for modern banking, investments, and payments.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Software Development</h3>
            <p>
              Build robust, scalable, and user-friendly applications with our expertise in the latest technologies and development practices.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Artist</h3>
            <p>
              Unleash your creativity with tools and platforms designed to bring your artistic visions to life, whether in digital or traditional mediums.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Scientist</h3>
            <p>
              Empower your research and discoveries with advanced data analysis, visualization, and collaboration tools.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Engineering</h3>
            <p>
              Design and innovate with precision using state-of-the-art engineering solutions that streamline workflows and enhance productivity.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Medical</h3>
            <p>
              Enhance patient care and streamline healthcare processes with innovative medical technologies and data-driven solutions.
            </p>
          </div>
        </div>
      </section>
      <footer className="text-center mt-10 text-gray-600 text-sm p-4 pb-8">
        Sponsored by IA_UKU_MO_AI
      </footer>
    </main>
  );
}
