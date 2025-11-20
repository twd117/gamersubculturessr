<script setup>
import moment from 'moment';
import { ref, computed } from 'vue';

const datenow =   (t)=>{  

  const myTimestamp = 1678886400000; // Example: March 15, 2023 12:00:00 PM UTC

// Create a Moment object from the timestamp
const myMoment = moment(t.seconds * 1000 );

// Get the relative time string
const relativeTime = myMoment.fromNow();

console.log(relativeTime); // Example output: "2 years ago" (depending on current time)

// You can also chain the operations
const chainedRelativeTime = moment(myTimestamp).fromNow();
//console.log(t.seconds  );
   return relativeTime;
    }  ;

defineProps({
  stories: Array
})
</script>

<template>
  <aside class="top-stories">
    <h2 class="heading">Latest Entertainment News</h2>
    <ul>
    
       <li v-for="(story, i) in stories" :key="i">
        <router-link
    :to="{ name: 'Sciences', params: { id: story.id, title: story.title  } }"
  >  <span class="time">{{ datenow(story.date) }}</span>
        <p class="title">{{ story.title }}</p>  </router-link>
      </li>     

    </ul>
  </aside>
</template>

<style scoped>

/* Material Design inspired styling */

.top-stories {


  
  
  font-style: normal;  background-color: var(--md-sys-color-surface, #FFFFFF);
  border-radius: 12px; /* Slightly larger radius for a more modern look */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Softer, more pronounced shadow */
  padding: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.3s ease-in-out;
}

.top-stories:hover {
    box-shadow: 0 6px 12px rgba(0,0,0,0.15); /* More pronounced shadow on hover */
}

.heading {
  font-size: 1.5rem; /* Following Material type scale */
  font-weight: 500;
  color: var(--md-sys-color-primary,#FF7A30); /* Using primary color for headings */
  margin-bottom: 16px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {

   
  border-top: 1px solid var(--md-sys-color-outline, #E0E0E0);
  padding: 12px 0;
  transition: background-color 0.3s;
}

li:first-child {
  border-top: none;
}

li:hover {
  background-color: var(--md-sys-color-surface-variant, #F5F5F5);
}

a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.time {
  font-size: 0.875rem; /* Following Material type scale */
  color: var(--md-sys-color-on-surface-variant, #757575);
}

.title {


  font-family: 'Roboto', sans-serif;
   font-size:16px;
  margin: 4px 0 0;
  font-size: 1rem; /* Following Material type scale */
  font-weight: 500; /* Medium weight for titles */
  color: var(--md-sys-color-on-surface, #000000);
}
</style>
