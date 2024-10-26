import React from 'react'
import "./Home.scss"

function Home() {
  return (
    <>

      <div className="parent hero">

        <div className="container hero-cont">
          <h1>
            Lorem ipsum dolor sit, adipisicing.
          </h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi necessitatibus odio repellendus sapiente quibusdam et, eveniet numquam libero! Consectetur, cumque.</p>


          <button className="btn">
            Click here
          </button>
        </div>
      </div>
      {/* section 2 starts here */}
      <div className="imgbox-wrapper parent">
        <div className="container imgbox-cont">
          <div className="imgbox glass glow">
            <div className="img-screen bg-img-cover">

            </div>

          </div>
        </div>
      </div>
      {/* section 3 starts here */}

      <div className="twocol parent">
        <div className="container twocol-cont">

          <div className="left">
            <h2>Lorem ipsum dolor sit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non deleniti natus laudantium soluta quaerat cupiditate, eius quas totam consequatur?</p>
            <button className='btn'>Click Here</button>
          </div>
          <div className="right">

            <div className="img-box glass">
              <div className="img bg-img-cover">

              </div>

            </div>
          </div>

        </div>
      </div>



      {/* bento box */}

      <div className="bento-parent parent">
        <div className="container bento-cont">
          <h2>
            Lorem ipsum dolor sit.
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda perspiciatis quod harum aspernatur reprehenderit, neque ad nisi aliquam eius fugit!</p>

          <div className="bento">
            <div className="line">
              <div className="left">

              </div>
              <div className="right">

              </div>
            </div>
            <div className="line">
              <div className="left">

              </div>
              <div className="right">

              </div>
            </div>
            <div className="line">
              <div className="left">

              </div>
              <div className="right">

              </div>
            </div>
            <div className="line">
              <div className="left">

              </div>
              <div className="right">

              </div>
            </div>
          </div>
        </div>
      </div>




      {/* testimonials section */}
      <div className="testimonials parent">
        <div className="container testimonial-cont">
          <div className="left">
            <h2>Lorem ipsum dolor sit.</h2>
            
          </div>
        </div>
      </div>




    </>
  )
}

export default Home
