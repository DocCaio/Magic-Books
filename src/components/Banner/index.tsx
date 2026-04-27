import banner from "../../assets/Banner.png";

const Banner = () => {
  return (
    <section 
      className="w-full overflow-hidden" 
      aria-labelledby="banner-title"
    >
      <figure className="relative">
        <img 
          src={banner} 
          alt="Banner sobre os livros vendidos na loja online" 
          className="w-full h-auto object-cover"
          loading="lazy" 
        />    
      </figure>
    </section>
  )
}

export default Banner;