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
/****************card******/
a {
  text-decoration: none;
  color: #3498db;
}
a:hover {
  color: #2980b9;
}

/**
 * Helpers
 */

/**
 * Card Styles
 */

.card {
  padding: 12px;
  background-color: #fff;
  margin-bottom: 1.6rem;
}

.card__padding {
  padding: 1rem;
}

.card__image {
  margin-top: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  min-height: 100px;
}
.card__image img {
  width: 100%;
  max-width: 100%;
}

.card__content {
  position: relative;
}

/* card meta */
.card__meta time {
  font-size: 1.5rem;
  color: #bbb;
  margin-left: 0.8rem;
}

/* card article */
.card__article{
  display: flex;
    flex-direction: column;
}
.card__article a {
  text-decoration: none;
  text-align: left;

  transition: all 0.5s ease;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  line-height: 32px;
  color: #424242;

  letter-spacing: 0.28px;
}
.card__article a:hover {
  color: #2980b9;
}
.card-text {
  text-align: justify;
  font-family: Roboto;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
  margin-top: 4px;
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
 /** width: 28%;*/ 
 width: 31%;
  min-width: 237px;
  margin: 6px;
}

.lk-tag {
  display: flex;
  font-size: 0.875rem;
  font-weight: 400;
  font-style: normal;
  color: #5f6368;
  font-family: "Roboto Mono", monospace;
  margin-left: 0.8rem;
  margin-bottom: 1rem;
}

.lk-tag url {
  text-transform: none;
}

.material-icons {
  margin-right: 6px;
}

.card-shadow:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
@media screen and (max-width: 750px) {
     .child{
      width: 44%;
     }
}
@media screen and (max-width: 499px) {
     .child{
      width: 100%;
     }
}

</style>