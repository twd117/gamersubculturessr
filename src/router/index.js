import Home from "../views/Home.vue";
import DetailPage from "../views/DetailPage.vue";
import SciencesDetailPage from "../views/ScienceDetailPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/articles/:title/:id",
    name: "Article",
    component: DetailPage,
    props: true
  }, 
  {
    path: "/entertainment/:title/:id",
    name: "Sciences",
    component: SciencesDetailPage,
    props: true
  },
];



export default routes;
