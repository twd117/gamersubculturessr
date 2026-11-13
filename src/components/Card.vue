<template>
 
    <div class="card-shadow child card radius shadowDepth1">
       <router-link v-if="store.isGame"
    :to="{ name: 'Article', params: { id: this.id, title: this.title  } }"
  >
      <div class="card__image border-tlr-radius">
        <img :src="img[0].downloadURL" alt="image" class="border-tlr-radius" />
      </div>
             
      <div class="card__content card__padding">
        <article class="card__article">
          <a href="#">{{ title }}</a>

          <p class="card-text">
            {{ sub }}
          </p>
        </article>
      </div>

      <div class="lk-tag url">
        <i class="material-icons">open_in_new</i> {{ tag }}
      </div>
     </router-link>
     <router-link v-else-if="store.isScifi"
    :to="{ name: 'smlc', params: { id: this.id, title: this.title  } }"
  >
      <div class="card__image border-tlr-radius">
        <img :src="img[0].downloadURL" alt="image" class="border-tlr-radius" />
      </div>
             
      <div class="card__content card__padding">
        <article class="card__article">
          <a href="#">{{ title }}</a>

          <p class="card-text">
            {{ sub }}
          </p>
        </article>
      </div>

      <div class="lk-tag url">
        <i class="material-icons">open_in_new</i> {{ tag }}
      </div>
     </router-link>
     <router-link v-else-if="store.isNews"
    :to="{ name: 'news', params: { id: this.id, title: this.title  } }"
  >
      <div class="card__image border-tlr-radius">
        <img :src="img[0].downloadURL" alt="image" class="border-tlr-radius" />
      </div>
             
      <div class="card__content card__padding">
        <article class="card__article">
          <a href="#">{{ title }}</a>

          <p class="card-text">
            {{ sub }}
          </p>
        </article>
      </div>

      <div class="lk-tag url">
        <i class="material-icons">open_in_new</i> {{ tag }}
      </div>
     </router-link>
         <router-link v-else
    :to="{ name: 'Sciences', params: { id: this.id, title: this.title } }"
  >
      <div class="card__image border-tlr-radius">
        <img :src="img[0].downloadURL" alt="image" class="border-tlr-radius" />
      </div>

      <div class="card__content card__padding">
        <article class="card__article">
          <a href="#">{{ title }}</a>

          <p class="card-text">
            {{ sub }}
          </p>
        </article>
      </div>

      <div class="lk-tag url">
        <i class="material-icons">open_in_new</i> {{ tag }}
      </div>
     </router-link>
    </div>

</template>

<script>
import { useNavStore } from "../store/useNavStore.js"

export default {
  setup(){
    const store = useNavStore();
   


    return { store }
  },
  name: "Card",
  props: [
    "id",
    "title",
    "sub",
    "img",
    "tag",
    "dev",
    "analyse",
    "story",
    "video",
    "platform",
    "rating",
    "imgurl"
  ],
};
</script>
<style>
/**************** Material Design Card (matching SearchView) ******/
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  color: inherit;
}

.card {
  padding: 0;
  background-color: #ffffff;
  margin-bottom: 0;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.card > a {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.card__padding {
  padding: 18px 20px 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card__image {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  margin: 0;
  min-height: unset;
  background-color: #f1f3f4;
  overflow: hidden;
  border-radius: 0;
}

.card__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 0;
  transition: transform 0.3s ease;
}

.card:hover .card__image img {
  transform: scale(1.03);
}

.card__content {
  position: relative;
}

/* card meta */
.card__meta time {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 0.8rem;
}

/* card article */
.card__article {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
}

.card__article a {
  text-decoration: none;
  text-align: left;
  transition: color 0.2s ease;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: normal;
  margin: 0 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card:hover .card__article a,
.card__article a:hover {
  color: #FF7A30;
}

.card-text {
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

/* card action */
.card__action {
  overflow: hidden;
  padding-right: 1.6rem;
  padding-left: 1.6rem;
  padding-bottom: 1.6rem;
}

.card__author img,
.card__author-content {
  display: inline-block;
  vertical-align: middle;
}

.child {
  width: 100%;
  min-width: 0;
  margin: 0;
}

.lk-tag {
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  color: rgba(0, 0, 0, 0.65);
  margin: auto 20px 16px;
  padding-top: 12px;
  border-top: 1px solid #f1f3f4;
}

.lk-tag::after {
  content: 'Read Article \2192';
  margin-left: auto;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #FF7A30;
  transition: transform 0.2s ease;
}

.card:hover .lk-tag::after {
  transform: translateX(3px);
}

.lk-tag url {
  text-transform: none;
}

.material-icons {
  margin-right: 6px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}

.card-shadow:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

@media screen and (max-width: 750px) {
  .child {
    width: 100%;
  }
}
@media screen and (max-width: 499px) {
  .child {
    width: 100%;
  }
}
</style>