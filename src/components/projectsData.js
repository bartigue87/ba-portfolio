import falafel from "../images/falafel.png";
import natParks from "../images/nat-parks.png";
import farm from "../images/farm.png";
import moveieSeat from "../images/movieseat.png";
import pacman from "../images/pacman.png";
import ranJokes from "../images/ranjokes.png";
import slapjack from "../images/slapjack.png";
import aec from "../images/aec.png";
import sync from "../images/sync.png";
import retail from "../images/retail.png";

const images = [
  falafel,
  natParks,
  farm,
  moveieSeat,
  pacman,
  ranJokes,
  slapjack,
  aec,
  sync,
  retail,
];

const image = images.map((image) => {
  return <img src={image} alt="" className="project-image" />;
});
console.log(image);
const projects = [
  {
    image: image[9],
    title: "Verizon Connected Retail 'Sim'",
    languages: "HTML/CSS/JavaScript",
    description:
      "Simulation built for Verizon showcasing their 'Connected Retail' product. Embedded on their website.",
    isActive: false,
    link: "https://www.verizon.com/business/solutions/industry/retail/",
  },
  {
    image: image[7],
    title: "Adobe Experience Cloud 'Sim'",
    languages: "HTML/CSS/JavaScript",
    description:
      "Simulation built for Adobe showcasing their 'Adobe Experience Cloud' product. Embedded on their website.",
    isActive: false,
    link: "https://business.adobe.com/resources/personalization-at-scale-interactive-tour/thank-you.html?faas_unique_submission_id=092D4D24-1857-1562-A7CD-0BBB96609D2A",
  },
  {
    image: image[8],
    title: "Poly Sync 'Sim'",
    languages: "HTML/CSS/JavaScript",
    description:
      "Simulation built for Poly showcasing their 'Sync' product. Embedded on their website.",
    isActive: false,
    link: "https://www.poly.com/us/en/products/phones/sync",
  },
  {
    image: image[0],
    title: "The Green Falafel",
    languages: "React",
    description:
      "Collaborative website for the food truck based in Salt Lake City, Utah: The Green Falafel.",
    isActive: false,
    link: "http://www.thegreenfalafel.surge.sh/",
  },
  {
    image: image[1],
    title: "National Park Checklist",
    languages: "React",
    description:
      "Personal journal documenting my visits to the National Parks in the USA",
    isActive: false,
    link: "",
  },
  {
    image: image[2],
    title: "Farm to Table",
    languages: "React/Node.js/Express",
    description:
      "Collaborative full stack website where farmers offer produce boxes. Also has a recipe finder that pulls from an api.",
    isActive: false,
    link: "https://farm2table.herokuapp.com/",
  },
  {
    image: image[6],
    title: "Slapjack",
    languages: "HTML/CSS/JavaScript",
    description: "Slapjack card game",
    isActive: false,
    link: "http://slapjackgame.surge.sh",
  },
  {
    image: image[3],
    title: "Movie Seat Booking",
    languages: "HTML/CSS/JavaSript",
    description:
      "Movie seat selector UI like you see on movie theater websites.",
    isActive: false,
    link: "http://movie-seat.surge.sh",
  },
  {
    image: image[4],
    title: "Pacman",
    languages: "HTML/CSS/JavaSript",
    description: "Classic Pacman game",
    isActive: false,
    link: "http://pacmangame.surge.sh",
  },
  {
    image: image[5],
    title: "Random Joke Generator",
    languages: "HTML/CSS/JavaSript",
    description:
      "What the title implies, get a random joke with the press of a button! Utilizes fetch and async/await.",
    isActive: false,
    link: "",
  },
];

export default projects;
