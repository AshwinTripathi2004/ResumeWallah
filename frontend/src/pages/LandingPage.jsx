import { useState, useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // add this import
gsap.registerPlugin(ScrollTrigger, TextPlugin);
import { TextPlugin } from "gsap/TextPlugin";
import { useNavigate } from "react-router-dom";
import Head from '../assets/head.png'
import HeadArrow from '../assets/head-arrow.webp'
import CheckResume from '../assets/check-resume.png'
import CheckArrow from '../assets/check-arrow.webp'
import Professional from '../assets/professional.png'
import ProfessionalArrow from '../assets/professional-arrow.webp'
import Slide1 from '../assets/slide-1.png'
import Slide2 from '../assets/slide-2.png'
import { ArrowRight, LayoutTemplate, Zap, Download, Menu, X } from 'lucide-react';
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { UserContext } from "../context/userContext";
import { ProfileInfoCard } from "../components/Cards";
import { landingPageStyles } from "../assets/dummystyle";
import { CheckCircle } from "lucide-react";


const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const craftRef = useRef(null);
  const professionalRef = useRef(null);
  const aiRef = useRef(null);
  const descriptionRef = useRef(null);
  const taglineRef = useRef(null);
  const imageContainerRef = useRef(null);


  useEffect(() => {
    // Animate CRAFT first (left)
    gsap.from(craftRef.current, {
      scrollTrigger: {
        trigger: craftRef.current,
        start: "top 85%",
        toggleActions: "play reset play reset",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    // Animate AI RESUMES second (bottom)
    gsap.from(aiRef.current, {
      scrollTrigger: {
        trigger: aiRef.current,
        start: "top 85%",
        toggleActions: "play reset play reset",
      },
      y: 50,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      delay: 0.6,
    });

    // Animate PROFESSIONAL third (right)
    gsap.from(professionalRef.current, {
      scrollTrigger: {
        trigger: professionalRef.current,
        start: "top 85%",
        toggleActions: "play reset play reset",
      },
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 1.2,
    });

    gsap.from(descriptionRef.current, {
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 90%",
        toggleActions: "play reset play reset",
      },
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 1.8, // after other elements
    });

    gsap.from(taglineRef.current, {
      scrollTrigger: {
        trigger: taglineRef.current,
        start: "top 90%",
        toggleActions: "play reset play reset",
      },
      scale: 0.3,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.1,
    });

    gsap.fromTo(
      imageContainerRef.current,
      {

        y: 50,
        scale: 0.95,
      },
      {

        y: 0,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: 0.8,
        },
      }
    );

    gsap.to(imageContainerRef.current, {
      opacity: 0.5,  // Don’t go to 0 to keep it slightly visible
      y: -20,
      scale: 0.96,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top 45%",
        end: "top 5%",
        scrub: 0.8,
      },
    });


  }, []);

  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    // TOP: Slide from Top
    gsap.fromTo(
      topRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: topRef.current,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // MIDDLE: Zoom in
    gsap.fromTo(
      middleRef.current,
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: middleRef.current,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // BOTTOM: Slide from Bottom
    gsap.fromTo(
      bottomRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const chars = middleRef.current.querySelectorAll("span");

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: middleRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

  }, []);

  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animate Image (First)
    gsap.fromTo(
      imageRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate Text (After delay)
    gsap.fromTo(
      textRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  const linesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      linesRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25, // space between each line
        duration: 1.6, // slower animation
        ease: "power2.out", // smoother effect
        scrollTrigger: {
          trigger: linesRef.current[0],
          start: "top 100%",
          end: "bottom 0%",
          toggleActions: "play reverse play reverse", // scroll up + down
        },
      }
    );
  }, []);

  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const contentWidth = content.scrollWidth;
    const containerWidth = container.offsetWidth;

    gsap.fromTo(
      content,
      { x: 0 },
      {
        x: -(contentWidth - containerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${contentWidth - containerWidth}`,
          scrub: 1,
          pin: true,
        },
      }
    );
  }, []);


  const svgRef = useRef(null);

  useEffect(() => {
    const texts = gsap.utils.toArray(svgRef.current.querySelectorAll("text"));

    texts.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, text: "" },
        {
          opacity: 1,
          y: 0,
          text: el.textContent,
          duration: el.textContent.length * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "top 20%",
            scrub: true, // smooth scroll animation
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  const linesRefs = useRef([]);
  const imageRefs = useRef(null);

  useEffect(() => {
    linesRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          delay: index * 0.2,
          duration: 0.8, // ⬅️ slightly longer for smoother feel
          ease: "power4.out", // ⬅️ smoother easing
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
            scrub: false, // ⬅️ no jumping – keeps animation smooth
          },
        }
      );

    });

    if (imageRefs.current) {
      gsap.fromTo(
        imageRefs.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRefs.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

    }
  }, []);


  const linesRefss = useRef([]);
  const imageRefss = useRef(null);

  useEffect(() => {
    linesRefss.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          delay: index * 0.2,
          duration: 0.8, // ⬅️ slightly longer for smoother feel
          ease: "power4.out", // ⬅️ smoother easing
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
            scrub: false, // ⬅️ no jumping – keeps animation smooth
          },
        }
      );

    });

    if (imageRefss.current) {
      gsap.fromTo(
        imageRefss.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRefss.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

    }
  }, []);



  return (
    <div className={landingPageStyles.container}>
      {/* Header */}
      <header className={`${landingPageStyles.header} bg-gray-300/20`}>
        <div className={landingPageStyles.headerContainer}>
          <div className={landingPageStyles.logoContainer}>
            <img
              src="/logo.svg"
              alt="Resume wallah"
              className="h-12 sm:h-14"
            />

          </div>

          {/* Mobile menu button */}
          <button
            className={landingPageStyles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ?
              <X size={24} className={landingPageStyles.mobileMenuIcon} /> :
              <Menu size={24} className={landingPageStyles.mobileMenuIcon} />
            }
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className={landingPageStyles.desktopAuthButton}
                onClick={() => setOpenAuthModal(true)}
              >
                <div className={landingPageStyles.desktopAuthButtonOverlay}></div>
                <span className={landingPageStyles.desktopAuthButtonText}>Get Started</span>
              </button>
            )}
          </div>
        </div>


        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={landingPageStyles.mobileMenu}>
            <div className={landingPageStyles.mobileMenuContainer}>
              {user ? (
                <div className={landingPageStyles.mobileUserInfo}>
                  <div className={landingPageStyles.mobileUserWelcome}>
                    Welcome back
                  </div>
                  <button
                    className={landingPageStyles.mobileDashboardButton}
                    onClick={() => {
                      navigate("/dashboard");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Go to Dashboard
                  </button>
                </div>
              ) : (
                <button
                  className={landingPageStyles.mobileAuthButton}
                  onClick={() => {
                    setOpenAuthModal(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className={landingPageStyles.main}>
        {/* Hero Section */}
        <section className={landingPageStyles.heroSection}>
          <div className={landingPageStyles.heroGrid}>
            {/* Left Content */}
            <div className={landingPageStyles.heroLeft}>
              <div ref={taglineRef} className={landingPageStyles.tagline}>
                Professional Resume Builder
              </div>
              <h1 className={landingPageStyles.heading}>
                <span ref={craftRef} className="animate-craft">
                  Cr<span className="bounce-a">a</span>ft
                </span>{" "}
                <span
                  ref={professionalRef}
                  className={`${landingPageStyles.headingGradient} animate-professional`}
                >
                  Professional
                </span>
                <br />
                <span ref={aiRef} className="animate-ai">AI Resumes</span>
              </h1>


              <p
                ref={descriptionRef}
                className={landingPageStyles.description}
              >
                Create job-winning resumes with expertly designed templates.
                ATS-friendly, recruiter-approved, and tailored to
                your career goals.
              </p>

              <div className={landingPageStyles.ctaButtons}>
                <button

                  className={landingPageStyles.primaryButton}
                  onClick={handleCTA}
                >
                  <div className={landingPageStyles.primaryButtonOverlay}></div>
                  <span className={landingPageStyles.primaryButtonContent}>
                    Start Building
                    <ArrowRight size={18} className={landingPageStyles.primaryButtonIcon} />
                  </span>
                </button>

                <button onClick={handleCTA} className={landingPageStyles.secondaryButton}>
                  View Templates
                </button>
              </div>

              {/* Stats */}
              <div className={landingPageStyles.statsContainer}>
                {[
                  { value: '50K+', label: 'Resumes Created', gradient: 'from-violet-600 to-fuchsia-600' },
                  { value: '4.9★', label: 'User Rating', gradient: 'from-orange-500 to-red-500' },
                  { value: '5 Min', label: 'Build Time', gradient: 'from-emerald-500 to-teal-500' }
                ].map((stat, idx) => (
                  <div key={idx} className={landingPageStyles.statItem}>
                    <div className={`${landingPageStyles.statNumber} ${stat.gradient}`}>{stat.value}</div>
                    <div className={landingPageStyles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - SVG Illustration */}
            <div className={landingPageStyles.heroIllustration}>
              <div className={landingPageStyles.heroIllustrationBg}></div>
              <div ref={imageContainerRef} className={landingPageStyles.heroIllustrationContainer}>
                <svg
                  viewBox="0 0 400 500"
                  className={landingPageStyles.svgContainer}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background */}
                  <defs>
                    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                    <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#f8fafc" />
                    </linearGradient>
                  </defs>

                  {/* SVG elements */}
                  <rect x="50" y="50" width="300" height="400" rx="20" className={landingPageStyles.svgRect} />
                  <circle cx="120" cy="120" r="25" className={landingPageStyles.svgCircle} />
                  <rect x="160" y="105" width="120" height="8" rx="4" className={landingPageStyles.svgRectPrimary} />
                  <rect x="160" y="120" width="80" height="6" rx="3" className={landingPageStyles.svgRectSecondary} />
                  <rect x="70" y="170" width="260" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                  <rect x="70" y="185" width="200" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                  <rect x="70" y="200" width="240" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                  <rect x="70" y="230" width="60" height="6" rx="3" className={landingPageStyles.svgRectPrimary} />
                  <rect x="70" y="250" width="40" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
                  <rect x="120" y="250" width="50" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
                  <rect x="180" y="250" width="45" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
                  <rect x="70" y="290" width="80" height="6" rx="3" className={landingPageStyles.svgRectSecondary} />
                  <rect x="70" y="310" width="180" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                  <rect x="70" y="325" width="150" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                  <rect x="70" y="340" width="200" height="4" rx="2" className={landingPageStyles.svgRectLight} />

                  {/* Animated elements */}
                  <circle cx="320" cy="100" r="15" className={landingPageStyles.svgAnimatedCircle}>
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-10; 0,0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <rect x="30" y="300" width="12" height="12" rx="6" className={landingPageStyles.svgAnimatedRect}>
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 5,0; 0,0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <polygon points="360,200 370,220 350,220" className={landingPageStyles.svgAnimatedPolygon}>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 360 210; 360 360 210; 0 360 210"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </polygon>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Scroll Section */}

        <section className={landingPageStyles.heroSection}>
          <div
            ref={topRef}
            className="text-[40px] text-center sm:text-[64px] md:text-[100px] lg:text-[120px] xl:text-[100px] font-black whitespace-nowrap leading-none"
          >
            Check your resume
          </div>
          <div
            ref={middleRef}
            className="text-[40px] pb-5 text-center sm:text-[64px] md:text-[100px] lg:text-[120px] xl:text-[100px] whitespace-nowrap leading-none"
          >
            {"grammatical".split("").map((char, index) => (
              <span
                key={index}
                className={`inline-block opacity-0 ${char === "i" ? "text-pink-600 flip-i font-black" : "text-outline"
                  }`}
              >
                {char}
              </span>
            ))}
          </div>



          <div className={`${landingPageStyles.heroGrid} pt-4`} >

            {/* ✅ Text Section Second */}
            <div className={landingPageStyles.heroLeft}>
              <p className={`${landingPageStyles.description} mb-3`}>
                <b ref={(el) => (linesRef.current[0] = el)}>
                  A built-in content checker tool helping you stay on top of grammar
                  errors and clichés:
                </b>
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3" ref={(el) => (linesRef.current[1] = el)}>
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <p className="text-gray-800 text-md">Wording and readability analysis</p>
                </div>
                <div className="flex items-center gap-3" ref={(el) => (linesRef.current[2] = el)}>
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <p className="text-gray-800 text-md">Eliminate typos and grammatical errors</p>
                </div>
                <div className="flex items-center gap-3" ref={(el) => (linesRef.current[3] = el)}>
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <p className="text-gray-800 text-md">
                    Content suggestions based on your job and experience
                  </p>
                </div>

                <div className="flex justify-end" ref={(el) => (linesRef.current[4] = el)}>
                  <img src={CheckArrow} alt="Check Arrow" className="hidden sm:block w-[400px]" />
                </div>
              </div>
            </div>

            {/* ✅ Image Section First */}
            <div className={landingPageStyles.herohead} ref={imageRef}>
              <div className={landingPageStyles.heroheadBg}></div>
              <div className={landingPageStyles.heroheadContainer}>
                <img src={CheckResume} alt="Check Resume" />
              </div>
            </div>


          </div>



          <div
            ref={bottomRef}
            className="text-[40px] pt-5 text-center sm:text-[64px] md:text-[100px] lg:text-[120px] xl:text-[100px] font-black whitespace-nowrap leading-none"
          >
            <span className={landingPageStyles.headingGradient}>
              punctuation errors
            </span>
          </div>
        </section>

        <div className="bg-gradient-to-b from-[#f8dfdf21] via-white to-[#d2bee51f]">
          <section className={`${landingPageStyles.heroSection} pt-15 md:pt-15`}>
            <div className={landingPageStyles.heroGrid}>
              {/* Left Image */}
              <div className={landingPageStyles.herohead} ref={imageRefs}>
                <div className={landingPageStyles.heroheadBg}></div>
                <div className={landingPageStyles.heroheadContainer}>
                  <img src={Head} alt="Resume Tailoring" />
                </div>
              </div>

              {/* Right Text */}
              <div className={landingPageStyles.heroLeft}>
                <h1
                  className="text-4xl font-black mb-3 leading-[45px] font-bold head-product-h1"
                  ref={(el) => (linesRefs.current[0] = el)}
                >
                  Resume tailoring based on the <br />
                  <span className={landingPageStyles.headingGradient}>job you’re</span>{" "}
                  applying for
                </h1>

                <p
                  className={`${landingPageStyles.description} mb-3`}
                  ref={(el) => (linesRefs.current[1] = el)}
                >
                  <b>
                    Quickly ensure that your resume covers key skills and experiences by
                    pasting the job ad you’re applying for:
                  </b>
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3" ref={(el) => (linesRefs.current[2] = el)}>
                    <CheckCircle className="text-green-500 h-6 w-6" />
                    <p className="text-gray-800 text-md">Skills and experience section analysis</p>
                  </div>

                  <div className="flex items-center gap-3" ref={(el) => (linesRefs.current[3] = el)}>
                    <CheckCircle className="text-green-500 h-6 w-6" />
                    <p className="text-gray-800 text-md">
                      Actionable checklist of what else to add to your resume
                    </p>
                  </div>

                  <div className="flex items-center gap-3" ref={(el) => (linesRefs.current[4] = el)}>
                    <CheckCircle className="text-green-500 h-6 w-6" />
                    <p className="text-gray-800 text-md">
                      Instant comparison between your resume and the job posting
                    </p>
                  </div>

                  <div className="flex justify-end" ref={(el) => (linesRefs.current[5] = el)}>
                    <img src={HeadArrow} alt="Arrow" className="hidden sm:block w-[400px]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>


        {/* Professional Section */}
        <section className={landingPageStyles.heroSection}>
          <div className={landingPageStyles.heroGrid}>
            {/* Left Content */}
            <div className={landingPageStyles.heroLeft}>
              <h1 className="text-4xl font-black mb-3 leading-[45px] font-bold profess-h1"> 20+ Professionally designed  <br /> <span className={landingPageStyles.headingGradient} ref={(el) => (linesRefss.current[0] = el)}
              >resume sections </span>
              </h1>
              <p className={`${landingPageStyles.description} mb-3`} ref={(el) => (linesRefss.current[1] = el)}>
                <b>A built-in content checker tool helping you stay on top of grammar errors and clichés :</b>
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3  " ref={(el) => (linesRefss.current[2] = el)}>
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <p className="text-gray-800 text-md">Wording and readability analysis</p>
                </div>

                <div className="flex items-center gap-3 " ref={(el) => (linesRefss.current[3] = el)}>
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <p className="text-gray-800 text-md">Eliminate typos and grammatical errors</p>
                </div>

                <div className="flex items-center gap-3 " ref={(el) => (linesRefss.current[4] = el)}>
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <p className="text-gray-800 text-md"> Content suggestions based on your job and experience</p>
                </div>
                <div className="flex justify-end" ref={(el) => (linesRefss.current[5] = el)}>
                  <img
                    src={ProfessionalArrow}
                    alt="Head Arrow"
                    className="hidden sm:block w-[500px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Content - SVG Illustration */}
            <div className={landingPageStyles.herohead} ref={imageRefss}>
              <div className={landingPageStyles.heroheadBg}></div>
              <div className={landingPageStyles.heroheadContainer}>
                <img src={Professional} alt="" />
              </div>
            </div>
          </div >
        </section>



        {/* Head of product Section */}
        < div
          ref={containerRef}
          className="h-screen overflow-hidden w-full bg-gradient-to-b from-[#f8dfdf21] via-white to-[#d2bee51f] "
        >
          <div
            ref={contentRef}
            className="flex gap-20 w-max px-10 items-start mt-[100px] mb-[50px]"
          >
            {/* Section 1 */}
            <section className="flex min-w-[90vw]  items-center gap-12">
              {/* Image Section */}
              <div className={landingPageStyles.herohead}>
                <div className={landingPageStyles.heroheadBg}></div>
                <div className={landingPageStyles.heroheadContainer}>
                  <img src={Slide1} alt="Head" />
                </div>
              </div>

              {/* Text Section */}
              <div className="max-w-[600px]">
                <h1 className="text-4xl font-black mb-3 leading-[45px] font-bold">
                  Your Smart Resume Building <br />
                  <span className={landingPageStyles.headingGradient}>
                    Assistant
                  </span>
                </h1>
                <p className={`${landingPageStyles.description} mb-3`}>
                  <b>
                     is an AI-powered web application I built to simplify and speed up the resume creation process.:
                  </b>
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 h-6 w-6" />
                    <p className="text-gray-800 text-md">
                      Automatically adjusts your resume based on job description you’re applying for.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 h-6 w-6" />
                    <p className="text-gray-800 text-md">
                      Spot and fix grammar issues, clichés, and readability problems instantly.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 h-6 w-6" />
                    <p className="text-gray-800 text-md">
                      Choose from a library of industry-specific, ATS-optimized templates.
                    </p>
                  </div>



                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="flex min-w-[80vw]  items-center gap-12">
              {/* Image Section */}
              <div className={landingPageStyles.herohead}>
                <div className={landingPageStyles.heroheadBg}></div>
                <div className={landingPageStyles.heroheadContainer}>
                  <img src={Slide2} alt="Professional" />
                </div>
              </div>

              {/* Text Section */}
              <div className="max-w-[700px]">
                <h1 className="text-4xl font-black mb-3 leading-[45px] font-bold">
                  20+ Professionally designed <br />
                  <span className={landingPageStyles.headingGradient}>
                    resume sections
                  </span>
                </h1>
                <p className={`${landingPageStyles.description} mb-3`}>
                  <b>
                    A built-in content checker tool helping you stay on top of grammar
                    errors and clichés:
                  </b>
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 h-6 w-6" />
                    <p className="text-gray-800 text-md">
                      Wording and readability analysis
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 h-6 w-6" />
                    <p className="text-gray-800 text-md">
                      Eliminate typos and grammatical errors
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 h-6 w-6" />
                    <p className="text-gray-800 text-md">
                      Content suggestions based on your job and experience
                    </p>
                  </div>

                </div>
              </div>


            </section>
          </div>
        </div >


        {/* Features Section */}
        < section className={landingPageStyles.featuresSection} >
          <div className={landingPageStyles.featuresContainer}>
            <div className={`${landingPageStyles.featuresHeader} `}>

              <div className="w-full flex justify-center ">
                <svg
                  ref={svgRef}
                  viewBox="0 0 240 80"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full "
                >
                  <defs>
                    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7c3aed" />   {/* violet-600 */}
                      <stop offset="50%" stopColor="#d946ef" />  {/* fuchsia-600 */}
                      <stop offset="100%" stopColor="#f97316" /> {/* orange-500 */}
                    </linearGradient>
                  </defs>
                  <style>
                    {`
                    .small {
                    font: italic 13px sans-serif;
              
                   }
               .heavy {
              font: bold 30px sans-serif;
            }
             .Rrrrr {
             font: italic 30px serif;
             fill: url(#textGradient); /* Apply gradient */
            }
          `}
                  </style>

                  <text x="10" y="35" className="small">Why</text>
                  <text x="40" y="35" className="heavy">Choose</text>
                  <text x="65" y="53" className="Rrrrr ">ResumeWallah</text>
                </svg>
              </div>

              <p className={`${landingPageStyles.featuresDescription} why-choose-p`}>
                Everything you need to create a professional resume that stands out
              </p>
            </div>

            <div className={landingPageStyles.featuresGrid}>
              {[
                {
                  icon: <Zap className={landingPageStyles.featureIcon} />,
                  title: "Lightning Fast",
                  description: "Create professional resumes in under 5 minutes with our streamlined process",
                  gradient: landingPageStyles.featureIconViolet,
                  bg: landingPageStyles.featureCardViolet
                },
                {
                  icon: <LayoutTemplate className={landingPageStyles.featureIcon} />,
                  title: "Pro Templates",
                  description: "Choose from dozens of recruiter-approved, industry-specific templates",
                  gradient: landingPageStyles.featureIconFuchsia,
                  bg: landingPageStyles.featureCardFuchsia
                },
                {
                  icon: <Download className={landingPageStyles.featureIcon} />,
                  title: "Instant Export",
                  description: "Download high-quality PDFs instantly with perfect formatting",
                  gradient: landingPageStyles.featureIconOrange,
                  bg: landingPageStyles.featureCardOrange
                }
              ].map((feature, index) => (
                <div key={index} className={landingPageStyles.featureCard}>
                  <div className={landingPageStyles.featureCardHover}></div>
                  <div className={`${landingPageStyles.featureCardContent} ${feature.bg}`}>
                    <div className={`${landingPageStyles.featureIconContainer} ${feature.gradient}`}>
                      {feature.icon}
                    </div>
                    <h3 className={landingPageStyles.featureTitle}>{feature.title}</h3>
                    <p className={landingPageStyles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* CTA Section */}
        < section className={landingPageStyles.ctaSection} >
          <div className={landingPageStyles.ctaContainer}>
            <div className={landingPageStyles.ctaCard}>
              <div className={landingPageStyles.ctaCardBg}></div>
              <div className={landingPageStyles.ctaCardContent}>
                <h2 className={landingPageStyles.ctaTitle}>
                  Ready to Build Your <span className={landingPageStyles.ctaTitleGradient}>Standout Resume?</span>
                </h2>
                <p className={landingPageStyles.ctaDescription}>
                  Join thousands of professionals who landed their dream jobs with our platform
                </p>
                <button
                  className={landingPageStyles.ctaButton}
                  onClick={handleCTA}
                >
                  <div className={landingPageStyles.ctaButtonOverlay}></div>
                  <span className={landingPageStyles.ctaButtonText}>Start Building Now</span>
                </button>
              </div>
            </div>
          </div>
        </section >
      </main >

      {/* Footer */}
      < footer className={landingPageStyles.footer} >
        <div className={landingPageStyles.footerContainer}>
          <p className={landingPageStyles.footerText}>
            Crafted with <span className={landingPageStyles.footerHeart}>❤️</span> by{' '}
            <a href="https://www.linkedin.com/in/ashwini-tripathi-81a092278/" target="_blank" className={landingPageStyles.footerLink}>
              Ashwini
            </a>
          </p>
        </div>
      </footer >

      {/* Modal */}
      < Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal >
    </div >
  );
};

export default LandingPage;