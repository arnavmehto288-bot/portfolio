import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning (Python)",
    tools: "Python, Scikit-Learn, Pandas, Data Preprocessing",
    image: "/images/customer_churn.png",
  },
  {
    title: "House Price Prediction",
    category: "Regression Model (Python)",
    tools: "Python, Regression, NumPy, Feature Engineering",
    image: "/images/house_price.png",
  },
  {
    title: "Movie Recommendation System",
    category: "Recommendation Engine (Python)",
    tools: "Python, Cosine Similarity, TF-IDF, Content Filtering",
    image: "/images/movie_recommendation.png",
  },
  {
    title: "Credit Card Fraud Detection",
    category: "Anomaly Detection (Python)",
    tools: "Python, Classification, Model Tuning, Imbalanced Datasets",
    image: "/images/credit_fraud.png",
  },
  {
    title: "Sentiment Analysis (NLP)",
    category: "Natural Language Processing (Python)",
    tools: "Python, NLP, NLTK, Sentiment Classification",
    image: "/images/sentiment_analysis.png",
  },
];

const Work = () => {
  useGSAP(() => {
    const getTranslateX = () => {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return 0;
      const container = document.querySelector(".work-container");
      if (!container) return 0;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parent = box[0].parentElement;
      if (!parent) return 0;
      const parentWidth = parent.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2 || 0;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    };

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`, // Use actual scroll width dynamically
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true, // Recalculate positions on refresh
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(), // Dynamically update translation
      ease: "none",
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
