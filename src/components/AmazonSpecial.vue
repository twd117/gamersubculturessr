<template>
   <div class="cxcard">
      <img class="cxcover-icon" alt="" src="https://m.media-amazon.com/images/I/8187G8kxoBL._SL1500_.jpg" />

      <div class="cxcontent">
        <div class="cxnamecategorydescription">
          <div class="cxname">Metroid Prime Remastered
</div>
          <div class="cxbadges">
            <div class="cxbadge">
              <div class="cxbadge-master">
                <div class="cxbadge1">Action</div>
              </div>
            </div>
            <div class="cxbadge">
              <div class="cxbadge-master">
                <div class="cxbadge1">Nintendo</div>
              </div>
            </div>
            <div class="cxbadge">
              <div class="cxbadge-master">
                <div class="cxbadge1">Adventure</div>
              </div>
            </div>
            <div class="cxbadge">
              <div class="cxbadge-master">
                <div class="cxbadge1">Deals</div>
              </div>
            </div>
            <div class="cxbadge">
              <div class="cxbadge-master">
                <div class="cxbadge1">FPS</div>
              </div>
            </div>
          </div>
          <div class="cxdescription">
            Intergalactic bounty hunter Samus Aran receives a distress signal from a wrecked frigate in orbit around planet Tallon IV. Upon investigation, the frigate reveals itself to be a Space Pirate research vessel home to terrifying genetic experiments using the mysterious Phazon substance
          </div>
          <h4><i>Price:</i> $38</h4>

        </div>

        <div class="cxbutton-1">

          <div class="cxbase-button-1">
           <span class="material-symbols-outlined">
visibility
</span>

            <div class="cxtext"><b>Check on Amazon</b></div>
          </div>
        </div>
      </div>
    </div>
    
    

  </template>
  
  <script>
import { defineComponent } from 'vue';

  export default defineComponent( {
    name: "AmazonSpecial",
    mounted(){
    }
}
  )
  </script>
  
  <style>


.cxcover-icon {
  border-radius: 2px;
  max-width: 100%;
  min-width:200px;
  overflow: hidden;
  height: 222px;
  object-fit: center;
  width: 100px;
  height:auto;
}
.cxbadge1,
.cxcover-icon,
.cxname {
  position: relative;
}
.cxname {
  line-height: 24px;
  font-weight: 600;
  text-align: center;
}
.cxbadge1 {
  line-height: 16px;
  font-weight: 500;
}
.cxbadge,
.cxbadge-master,
.cxbadges {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.cxbadge-master {
  border-radius: var(--br-7xs);
  border: 1px solid var(--neutral-700);
  padding: var(--padding-11xs) var(--padding-5xs);
  align-items: center;
}
.cxbadge,
.cxbadges {
  align-items: flex-start;
}
.cxbadges {
  align-self: stretch;
  flex-wrap: wrap;
  gap: var(--gap-9xs);
  font-size: var(--text-xs-medium-size);
  color: var(--neutral-200);
}
.cxdescription {
  align-self: stretch;
  position: relative;
  font-size: var(--text-s-medium-size);
  line-height: 18px;
  opacity: 0.5;
}
.cxnamecategorydescription {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.cxvuesaxlinearcard-pos-icon {
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
}
.cxtext {
  position: relative;
  line-height: 20px;
  font-weight: 500;
}
.cxbase-button-1,
.cxbutton-1 {
  align-self: stretch;
  border-radius: var(--br-5xs);
  flex-direction: row;
}
.cxbase-button-1 {
  background-color: var(--primary-500);
  overflow: hidden;
  display: flex;
  padding: var(--padding-9xs) 16px var(--padding-9xs) 12px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
  width: 90%;
}
.cxbutton-1 {
  display: flex;
    justify-content: center;
  width: 100%;
  height: 40px;
  font-size: var(--text-s-medium-size);
  color: var(--color);
}
.cxbutton-1 {

  align-self:  center;
}
.cxcard,
.cxcontent {
  display: flex;
  
  justify-content:space-between;
}
.cxcontent {
  flex: 1;
  flex-direction: column;
  gap: 32px;
  min-width: 200px;
}
.cxcard {
  position: relative;
  border-radius: var(--br-base);
  background: #232323;
  box-shadow: 0 40px 64px -32px rgba(15, 15, 15, 0.1);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(252, 252, 253, 0.12);
  box-sizing: border-box;
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
  min-width: 240px;
  text-align: left;
  font-size: 20px;
  color: var(--bg);
  font-family: var(--text-s-medium);

  align-self: center;
}
body {
  margin: 0;
  line-height: normal;
  
}

:root {
  /* fonts */
  --text-s-medium: Inter;

  /* font sizes */
  --text-s-medium-size: 14px;
  --text-xs-medium-size: 12px;

  /* Colors */
  --bg: #fcfcfd;
  --primary-500: #3479e9;
  --color: #fff;
  --neutral-700: #3f3f46;
  --neutral-200: #e4e4e7;

  /* Gaps */
  --gap-9xs: 4px;

  /* Paddings */
  --padding-9xs: 4px;
  --padding-11xs: 2px;
  --padding-5xs: 8px;

  /* border radiuses */
  --br-base: 16px;
  --br-5xs: 8px;
  --br-7xs: 6px;
}

  
  </style>