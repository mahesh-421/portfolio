import netflix from '../assets/projects/netflixClone.gif';
import youtube from '../assets/projects/youtubeClone.gif';
import colab from '../assets/projects/colab.gif';

const projectsData = [
  {
    id: 1,
    img: colab,
    name: 'CoLab',
    discription:
      'It is realtime chatApp/Codding application with upcoming audio/video call features',
    url: 'https://colab.maheshdubey.com',
  },

  {
    id: 2,
    img: netflix,
    name: 'NETFLIX UI CLONE',
    discription:
      "While making this project explored firebase, form validation on fronend and Youtube's iframe",
    url: '/netflixuiclone',
  },

  {
    id: 3,
    img: youtube,
    name: 'YOUTUBE UI CLONE',
    discription:
      "In this project I have used Youtube's API's and react redux for state management",
    url: '/youtubeclone',
  },
];
export default projectsData;
