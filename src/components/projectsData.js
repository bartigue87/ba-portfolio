import falafel from "../images/falafel.png";
import natParks from "../images/nat-parks.png";
import farm from "../images/farm.png";
import moveieSeat from "../images/movieseat.png";
import pacman from "../images/pacman.png";
import ranJokes from "../images/ranjokes.png";
import slapjack from "../images/slapjack.png";

const images = [
  falafel,
  natParks,
  farm,
  moveieSeat,
  pacman,
  ranJokes,
  slapjack,
];

const image = images.map((image) => {
  return <img src={image} alt="" className="project-image" />;
});

const projects = [
  {
    image: image[0],
    title: "The Green Falafel",
    languages: "React",
    description:
      "Website for the food truck based in Salt Lake City, Utah: The Green Falafel",
    isActive: false,
  },
  {
    image: image[1],
    title: "National Park Checklist",
    languages: "React",
    description:
      "Personal journal documenting my visits to the National Parks in the USA",
    isActive: false,
  },
  {
    image: image[2],
    title: "Farm to Table",
    languages: "React/Node.js/Express",
    description:
      "Collaborative full stack website where farmers offer produce boxes. Also has a recipe finder that pulls from an api.",
    isActive: false,
  },
  {
    image: image[6],
    title: "Slapjack",
    languages: "HTML/CSS/JavaScript",
    description: "Slapjack card game",
    isActive: false,
  },
  {
    image: image[3],
    title: "Movie Seat Booking",
    languages: "HTML/CSS/JavaSript",
    description:
      "Movie seat selector UI like you see on movie theater websites.",
    isActive: false,
  },
  {
    image: image[4],
    title: "Pacman",
    languages: "HTML/CSS/JavaSript",
    description: "Classic Pacman game",
    isActive: false,
  },
  {
    image: image[5],
    title: "Random Joke Generator",
    languages: "HTML/CSS/JavaSript",
    description:
      "What the title implies, get a random joke with the press of a button! Utilizes fetch and async/await.",
    isActive: false,
  },
];

export default projects;
