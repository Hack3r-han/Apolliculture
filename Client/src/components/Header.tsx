import headerImage from '../assets/images/Header.jpg'

const Header = () => {
  return (
      <section id="about" className="py-0">
    <div className="mb-5">
      <img src={headerImage} alt="Header" className="w-full h-auto" />
      <h1 className="text-center text-3xl font-bold mt-10">DISCOVER WHY WE'RE THE BEES KNEES</h1>
      <p className="text-center my-10">
        Welcome to Apolliculture. Inspired by the radiant legacy of the Greek God Apollo, we cultivate a vibrant culture for bee enthusiasts, blending sustainability with divine craftsmanship. Discover our sun-kissed collection of bee-inspired treasures, from pure, artisan honey to beeswax candles.
      </p>
    </div>
      </section>
  );
};

export default Header;