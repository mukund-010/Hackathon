import React from "react";
import TricycleEatsApp from './tricycle-eats-app';
import "./index.css";

function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(
      "header",
      { className: "header" },
      React.createElement("h1", null, "TriCycleEats"),
      React.createElement(
        "nav",
        null,
        React.createElement(
          "ul",
          { className: "nav-links" },
          React.createElement("li", null, "HOME"),
          React.createElement("li", null, "MAIN"),
          React.createElement("li", null, "ABOUT US"),
          React.createElement("li", null, "MY PROFILE")
        )
      )
    ),
    React.createElement(
      "main",
      { className: "main-content" },
      React.createElement(
        "div",
        { className: "intro-section" },
        React.createElement("img", {
          src: "https://via.placeholder.com/300x400", // Replace with actual image URL
          alt: "Plant",
          className: "intro-image",
        }),
        React.createElement("h2", null, "Personalized Nutrition Just for You"),
        React.createElement(
          "p",
          null,
          "Healthy meals, made simple. Track your nutrition with AI-powered recommendations."
        ),
        React.createElement(
          "button",
          { className: "cta-button" },
          "GET STARTED WITH US!"
        )
      ),
      React.createElement(
        "div",
        { className: "features-section" },
        ["Recipes", "Health Insights", "Blog Posts"].map((feature, index) =>
          React.createElement(
            "div",
            { key: index, className: "feature-card" },
            React.createElement("h3", null, feature),
            React.createElement(
              "p",
              null,
              feature === "Recipes"
                ? "Get personalized, delicious meal ideas that match your health goals and preferences."
                : feature === "Health Insights"
                ? "Track your nutrition goals with daily tips and personalized insights."
                : "Explore expert tips and trends for a healthier lifestyle."
            ),
            React.createElement("button", { className: "feature-button" }, "HERE!")
          )
        )
      ),
      React.createElement(
        "div",
        { className: "testimonials-section" },
        [
          {
            text:
              '"TriCycle Eats makes meal planning so easy! The personalized recipes fit my dietary needs perfectly, and the health tips keep me on track."',
            author: "- Aliya, 25",
          },
          {
            text:
              '"Great app for personalized nutrition! The meal suggestions are spot on, and I love how simple it is to track my progress."',
            author: "- Rahul, 28",
          },
        ].map((testimonial, index) =>
          React.createElement(
            "div",
            { key: index, className: "testimonial-card" },
            React.createElement("p", null, testimonial.text),
            React.createElement("span", null, testimonial.author)
          )
        )
      ),
      React.createElement(
        "footer",
        { className: "footer" },
        React.createElement(
          "ul",
          { className: "footer-links" },
          ["Privacy Policy", "Terms and Conditions", "Contact"].map((link, index) =>
            React.createElement("li", { key: index }, link)
          )
        ),
        React.createElement(
          "div",
          { className: "social-icons" },
          ["Instagram", "LinkedIn", "YouTube"].map((platform, index) =>
            React.createElement(
              "a",
              {
                key: index,
                href: "#",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              platform
            )
          )
        )
      )
    )
  );
}

export default App;
