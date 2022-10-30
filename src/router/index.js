import Home from "../views/Home.vue";
import DetailPage from "../views/DetailPage.vue";
import SciencesDetailPage from "../views/ScienceDetailPage.vue";
import NewsDetailPage from "../views/NewsDetailPage.vue"; 
const routes = [
  
  {
    path: "/",
    name: "Home",
    component: Home,
  },
 
 
  {
    path: "/tech/:title/:id",
    name: "news",
    component: NewsDetailPage,
    props: true
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
  {
    path: "/:category",
    name: "category",
    component: Home,
    props: true
  },
  
];



export default routes;
