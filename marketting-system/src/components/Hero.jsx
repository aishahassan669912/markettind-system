const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://contact1inc.com/wp-content/uploads/2023/06/AdobeStock_580215848.jpeg')",
      }}
    >
      <div className="bg-white bg-opacity-80 container mx-auto px-6 text-center py-10 rounded-lg">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">
          All-in-One Marketing System to Grow Your Business
        </h1>
        <p className="text-xl text-gray-700 mb-6">
           Simplify your campaigns, automate your outreach,
            and drive better results with a powerful marketing platform designed for efficiency and growth.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
