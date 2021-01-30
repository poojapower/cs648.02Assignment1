
const imageContent = document.getElementById('image');

const imageComponent = React.createElement(
  "div",
  null,
  React.createElement(
    "header",
    null,
    "Pooja Rajendra Pawar"
  ),
  React.createElement("img", { alt: "react logo", src: "profile.png" }),
  React.createElement(
    "p",
    null,
    "I am Pooja Pawar, I am currently pursuing masters in Computer Science from San Diego State University. I wish to be a Data Science Engineer in a reputed firm.",
    React.createElement("br", null),
    "I am a dedicated, patient, and persistent person. I am a very positive person and like to work hard for my goals.",
    React.createElement("br", null),
    "I have received my undergraduation degree from Mumbai University with courses such as Data Structure and Algorithm, Object Oriented Programming Methodology, Database etc.",
    React.createElement("br", null),
    "I have worked on multiple academic projects like Online Food Delivery System, Twitter Sentiment Analysis of Airlines etc.",
    React.createElement("br", null),
    "I am working as a Data Science Engineer Intern at Digital Infuion. I am working on the ROBERTA model for predicting tenure for medical studies.",
    React.createElement("br", null),
    "I have also co-authored a paper for developing a smart agent for Project Development. This paper will be published soon in Vancouver, Canada.",
    React.createElement("br", null),
    "I have a company experience of 5 years before this which involved application development, web development framework, database development, cloud computing etc.",
    
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "button",
      null,
      " ",
      React.createElement(
        "a",
        { href: "https://github.com/poojapower/cs648.02Assignment1", target: "_blank" },
        "View GITHUB"
      )
    )
  )
);
ReactDOM.render(imageComponent, imageContent);