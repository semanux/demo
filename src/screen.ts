// Screens of the app.
export interface Link {
  x: number,
  y: number,
  width: number,
  height: number,
  link: string,
}

export interface Screen {
  src: string,
  height: number,
  links: Array<Link>,
}

// Map from links to screens.
const screens: Record<string, Screen> = {
  "home": {
    src: "/tagesschau-home.jpg",
    height: 5100,
    links: [
      { x: 604, y: 0, width: 266, height: 140, link: "menu", },
      { x: 0, y: 0, width: 600, height: 280, link: "home", },
      { x: 180, y: 136, width: 230, height: 110, link: "ukraine", },
      { x: 395, y: 136, width: 210, height: 110, link: "coronavirus", },
      { x: 605, y: 136, width: 266, height: 110, link: "germany", },
      { x: 0, y: 242, width: 870, height: 1850, link: "croatia", },
      { x: 0, y: 2138, width: 870, height: 1477, link: "russia", },
    ],
  },
  "menu": {
    src: "/tagesschau-menu.jpg",
    height: 2175,
    links: [
      { x: 0, y: 0, width: 870, height: 190, link: "home", },
    ],
  },
  "coronavirus": {
    src: "/tagesschau-coronavirus.jpg",
    height: 2661,
    links: [
      { x: 604, y: 0, width: 266, height: 140, link: "menu", },
      { x: 0, y: 0, width: 600, height: 280, link: "home", },
    ],
  },
  "germany": {
    src: "/tagesschau-germany.jpg",
    height: 2661,
    links: [
      { x: 604, y: 0, width: 266, height: 140, link: "menu", },
      { x: 0, y: 0, width: 600, height: 280, link: "home", },
    ],
  },
  "croatia": {
    src: "/tagesschau-croatia.jpg",
    height: 2661,
    links: [
      { x: 604, y: 0, width: 266, height: 140, link: "menu", },
      { x: 0, y: 0, width: 600, height: 280, link: "home", },
    ],
  },
  "russia": {
    src: "/tagesschau-russia.jpg",
    height: 2661,
    links: [
      { x: 604, y: 0, width: 266, height: 140, link: "menu", },
      { x: 0, y: 0, width: 600, height: 280, link: "home", },
    ],
  },
  "ukraine": {
    src: "/tagesschau-ukraine.jpg",
    height: 2661,
    links: [
      { x: 604, y: 0, width: 266, height: 140, link: "menu", },
      { x: 0, y: 0, width: 600, height: 280, link: "home", },
    ],
  },
}

export default screens;