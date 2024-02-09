import React from 'react'

const Home = () => {
  return (
    <>
      <main>
        <div className="section-hero"></div>
        <div className="container grid grid-cols">
          <div className="hero-content">
            <p>We are the world's largest software company</p>
            <h1>Welcome to the page created by <b><i>Khushil Patel</i></b></h1>

            <div className="btn btn-group">
              <a href="/login"><button className='button'>Login</button></a>
              <a href="/about"><button className='button secondary-button'>Learn more</button></a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/public/Images/hero.jpg " width={700} height={600} alt="" />
          </div>
        </div>
        <div >
          <p className='contentss'>
            Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At Thapa Technical, we specialize in providing innovative IT services and solutions tailored to meet your unique needs.
          </p>
        </div>
      </main>

      <section className='features-section'>
        <div className="div1">
          <h2>10,000+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="div1">
          <h2>500+</h2>
          <p>Developers</p>
        </div>
        <div className="div1">
          <h2>24/7</h2>
          <p>Service</p>
        </div>
      </section>
      <footer>
        <p className='footer1'>copyright &copy; 2023 Patels</p>
      </footer>
    </>
  )
}

export default Home
