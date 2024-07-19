// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import logoImage from "./images/logo.png";
import backgroundImage from "./images/backgroundImg.jpg";
import aboutBackground from "./images/aboutBackground.jpg";
import productsBackground from "./images/productsBackground.jpg";
import contactBackground from "./images/contactBackground.jpg";
import emailClose from "./images/emailClose.png";
import goat from "./images/goatProduct.png";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

function App() {
  const [background, setBackground] = useState(backgroundImage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const home = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref, newBackground) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setBackground(newBackground);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const sections = [
      { ref: home, background: backgroundImage },
      { ref: aboutRef, background: aboutBackground },
      { ref: productsRef, background: productsBackground },
      { ref: contactRef, background: contactBackground },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (sec) => sec.ref.current === entry.target
            );
            if (section) {
              setBackground(section.background);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "slider",
      perView: 2,
      focusAt: "center",
      breakpoints: {
        768: {
          perView: 1,
        },
        576: {
          perView: 1,
          gap: 10,
          peek: { before: 50, after: 50 },
        },
      },
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <header className="App-header">
        <nav>
          <div className="logo">
            <button
              style={{ fontFamily: "Abril Fatface" }}
              className="logo-button"
              onClick={() => handleScroll(home, backgroundImage)}
            >
              <img src={logoImage} alt="Logo" className="logo-image" />
              TERRA GRANDE FARM
            </button>
          </div>
          <button
            className={`menu-toggle ${isMenuOpen ? "close" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "☷" : "☰"}
          </button>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <button
                onClick={() => handleScroll(aboutRef, aboutBackground)}
                style={{ fontFamily: "Abril Fatface", textAlign: "center" }}
              >
                {" "}
                ABOUT US
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll(productsRef, productsBackground)}
                style={{ fontFamily: "Abril Fatface", textAlign: "center" }}
              >
                {" "}
                PRODUCTS
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll(contactRef, contactBackground)}
                style={{ fontFamily: "Abril Fatface", textAlign: "center" }}
              >
                {" "}
                CONTACT US
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: "0", margin: "0" }}>
        <section
          ref={home}
          className="content-section"
          style={{ alignContent: "center" }}
        >
          <div className="pageText">
            <p>TERRA GRANDE FARM</p>
            <h1>
              A 10-hectare Regenerative Goat Farm breeding top-quality upgraded
              and Purebred Anglo-Nubians.
            </h1>
          </div>
        </section>

        <section ref={aboutRef} className="content-section">
          <div className="pageText">
              <p>About Us</p>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem ipsum dolor sit amet, consecteturadipiscing elit.
              </h1>
            </div>
        </section>

        <section ref={productsRef} className="content-section">
          <br/>
          <p className="productsText">Products</p>

          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <div className="productBox">
                    <div className="prodImgContainer">
                      <div className="prodImg">
                        <a>
                          <img src={goat} alt="product1" />
                          <div className="overlay">
                            <p
                              className="overlay-text"
                              style={{ fontSize: "3rem" }}
                            >
                              Product 1{" "}
                            </p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="textMView">
                    <p style={{ fontSize: "1.2rem" }}>Product 1 </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </li>

                <li className="glide__slide">
                  <div className="productBox">
                    <div className="prodImgContainer">
                      <div className="prodImg">
                        <a>
                          <img src={logoImage} alt="product2" />
                          <div className="overlay">
                            <p
                              className="overlay-text"
                              style={{ fontSize: "3rem" }}
                            >
                              Product 2{" "}
                            </p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="textMView">
                    <p style={{ fontSize: "1.2rem" }}>Product 2 </p>
                    <p style={{ fontSize: "1rem" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </li>

                <li className="glide__slide">
                  <div className="productBox">
                    <div className="prodImgContainer">
                      <div className="prodImg">
                        <a>
                          <img src={background} alt="product3" />
                          <div className="overlay">
                            <p
                              className="overlay-text"
                              style={{ fontSize: "3rem" }}
                            >
                              Product 3{" "}
                            </p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="textMView">
                    <p style={{ fontSize: "1.2rem" }}>Product 3 </p>
                    <p style={{ fontSize: "1rem" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </li>

                <li className="glide__slide">
                  <div className="productBox">
                    <div className="prodImgContainer">
                      <div className="prodImg">
                        <a>
                          <img src={backgroundImage} alt="product4" />
                          <div className="overlay">
                            <p
                              className="overlay-text"
                              style={{ fontSize: "3rem" }}
                            >
                              Product 4{" "}
                            </p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="textMView">
                    <p style={{ fontSize: "1.2rem" }}>Product 4 </p>
                    <p style={{ fontSize: "1rem" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
              <button
                style={{ outline: "none" }}
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                ◄
              </button>
              <button
                style={{ outline: "none" }}
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                ►
              </button>
            </div>
          </div>
        </section>

        <section ref={contactRef} className="content-section">
          <div className="contactSize">
            <div className="pageText"> 

              <p>Contact Us</p>
              <div className="contactContainer">
                <div>  {/*className="contactSpacing"*/}
                  <a href="mailto:businessEmail">
                    <lord-icon
                      src="https://cdn.lordicon.com/aycieyht.json"
                      trigger="hover"
                      style={{
                        width: "100%",
                        height: "60px",
                        backgroundColor: "white",
                        borderRadius: "50px",
                      }}
                    ></lord-icon>
                  </a>
                </div>

                <div> {/*className="contactSpacing"*/}
                  <a href="messengerlink">
                    <lord-icon
                      src="https://cdn.lordicon.com/shlffxcb.json"
                      trigger="hover"
                      style={{
                        width: "100%",
                        height: "60px",
                        backgroundColor: "white",
                        borderRadius: "50px",
                      }}
                    ></lord-icon>
                  </a>
                </div>

                <div> {/*className="contactSpacing"*/}
                  <a>
                    <lord-icon
                      src="https://cdn.lordicon.com/cywksamr.json"
                      trigger="hover"
                      style={{
                        width: "100%",
                        height: "60px",
                        backgroundColor: "white",
                        borderRadius: "50px",
                      }}
                    ></lord-icon>
                  </a>
                </div>
              </div>
            </div>    
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
