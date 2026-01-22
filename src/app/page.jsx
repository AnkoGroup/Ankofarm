import Image from "next/image";
import anko_farm_logo from '../../public/Final removed bg logo 2.png'
import coming_soon from '../../public/ankofarm_coming_soon.png'
export default function Home() {
  return (
    <main className="hero">
      <Image className="hero-image" placeholder="blur" src={coming_soon} alt="coming soon" style={{objectFit: 'cover', position: 'absolute', width: '100%', height: '100%'}}/>
      <div className="overlay" />


      <section className="content">

      <div className="mt-15 mb:mt-7">
      <Image className="title" src={anko_farm_logo} sizes="100vw" alt="coming soon"/>
      <p className="description">
      We are cultivating something new. Our smart farming platform is
      launching soon to bring innovation, precision, and sustainability to
      modern agriculture.
      </p>
      </div>
      <span className="badge text-lg mt-[19rem] md:text-3xl lg:text-5xl px-[.8rem] py-[.5rem] md:px-[1.6rem] md:py-[2rem]">Coming Soon</span>
      </section>


      <footer className="footer">
      © 2026 Anko Farm. All rights reserved.
      </footer>
      </main>
);
}
