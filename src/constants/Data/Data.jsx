import { MainImages, TagImages } from "../../assets/images/Image";
import { blue, brown, dark, green, light, pink } from "../../styles/Theme.style";

export const TagsData = [
  {
    id: 1,
    name: "Select Theme",
    bgc: "#5F896E",
    image: MainImages.paintimg,
  },
  { id: 2, name: "Add Tags", bgc: "#5F896E", image: MainImages.tagimg },

];

export const SelectionColors = [
  { id: 1, name: light },
  { id: 2, name: dark },
  { id: 3, name: brown },
  { id: 4, name: green },
  { id: 5, name: pink },
  { id: 6, name: blue },
];
export const TagsImageList = [
  {
    id: 1,
    name: "tag1",
    image: TagImages.tag1,
  },
  {
    id: 2,
    name: "tag2",
    image: TagImages.tag2,
  },
  {
    id: 3,
    name: "tag3",
    image: TagImages.tag3,
  },
  {
    id: 4,
    name: "tag4",
    image: TagImages.tag4,
  },
  {
    id: 5,
    name: "tag5",
    image: TagImages.tag5,
  }, {
    id: 6,
    name: "tag6",
    image: TagImages.tag6,
  },
];

export const divStyles = {
  boxShadow: "1px 2px 9px #F4AAB9",
  margin: "4em",
  padding: "1em",
};

export const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '820px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`
};