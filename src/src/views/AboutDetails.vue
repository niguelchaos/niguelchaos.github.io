<template>
  <b-container>
    <name-header></name-header>

    <b-container class="details">
      <b-container class="section-heading">
      <h1>About Me</h1>
      <h6>Commoner of Society</h6>
      <hr id="about-divider" class="divider my-3" />
      </b-container>

      <b-container class="details-item">
        <h4>I Hope You Have Fun Reading This</h4>
        <p class="text-left">
          Born in Macau, my formative years were spent trying to not disappoint my parents, and without a single doubt ultimately failing to do so.
          As a child, I don't think I had high aspirations or dreams - other than spending as much time as possible playing games.
        </p>
        <hr id=about-divider class="divider my-3" />
        <p class="text-left">
          Moving to Sweden in 2014, my experiences have shown me that there is always someone better than you, some things aren't what they seem on the inside, and grades don't really have any meaning.
          I wanted to make games because I didn't want the consequences of my actions to affect the world in the same way software in hospitals and stuff does, 
          but we both know thats wrong because media always influence people. I guess games are as dangerous as malfunctioning hospital software.
        </p>
        <hr id=about-divider class="divider my-3" />
      </b-container>


      <b-container class="details-item">
        <b-row>
          <b-col class="float-left">
            <b-container class="games-list">
              <h4>Games That Make Me Intrigued</h4>
              <p>Updated whenever more come to mind.</p>
              <ul>
                <li><strong>Beat Saber</strong>: My arms dead</li>
                <li><strong>Pistol Whip</strong>: My legs dead</li>
                <li><strong>Superhot VR</strong></li>
                <li><strong>Jubeat</strong>: Pretty fun</li>
                <li><strong>Sound Voltex</strong>: But im trash at it</li>
                <li><strong>Cytus, Deemo</strong>: Was like awesome when it first came out</li>
                <li><strong>Wacca</strong>: The booths actually have a really nice crisp screen</li>
                <li><strong>House of the Dying Sun</strong></li>
                <li><strong>Freespace 2</strong></li>
                <li><strong>Ace Combat Series</strong>: I should really play 4</li>
                <li><strong>Apex Legends, Titanfall 2</strong></li>
                <li><strong>Call of Duty: Modern Warfare</strong> series</li>
                <li><strong>Dishonored</strong> series</li>
                <li><strong>Skyrim</strong></li>
                <li><strong>Horizon Zero Dawn</strong></li>
                <li><strong>Mirror's Edge</strong></li>
                <li><strong>Sekiro: Shadows Die Twice</strong></li>
                <li><strong>Black(PS2)</strong></li>
                <li><strong>Need for Speed Carbon</strong></li>
                <li><strong>Advance Wars</strong></li>
                <li><strong>Fire Emblem</strong> - I abused the life outta save states hehe</li>
                <li><a :href="'https://www.newgrounds.com/portal/view/459232'" target="_blank"><strong>The Battalion Trilogy</strong></a></li>
                <li><a :href="'https://www.newgrounds.com/portal/view/561860'" target="_blank"><strong>Sierra 7(Flash)</strong></a>, <strong>Tactical Assassin(Flash)</strong> series</li>
                <li><strong>Xiao Xiao Collection(<a :href="'https://www.newgrounds.com/portal/view/257184'" target="_blank">4</a>, <a :href="'https://www.newgrounds.com/portal/view/65694'" target="_blank">9</a>)</strong>: Classics. Actually the entire collection.</li>
                <li><a :href="'https://www.shockwave.com/gamelanding/cyborglivestock.jsp'" target="_blank"><strong>Super Cyborg Livestock from Outer Space</strong></a>: Clean presentation, 11/10 story</li>
              </ul>
            </b-container>
            
          </b-col>
        </b-row>
      </b-container>

      <b-container class="details-item">
        <b-row>
          <b-col class="float-left">
            <b-container class="games-list">
              <h4>Important Videos</h4>
              <p>Completely irrelevant to game or software development. However, I consider all to have good storytelling.</p>
              <ul>
                <li><a :href="'https://www.youtube.com/watch?v=gM-_Jt0m6eY'" target="_blank"><strong>Feelin Kinda Panzer</strong></a></li>
                <li><a :href="'https://www.youtube.com/watch?v=JNpd1WjFkUk'" target="_blank"><strong>C H E S S - P A W N - R E Q U I E M</strong></a></li>
                <li><a :href="'https://www.youtube.com/watch?v=1cfKc8U4iwg'" target="_blank"><strong>Nvidia Bread</strong></a></li>
                <li><a :href="'https://www.youtube.com/watch?v=c-rTM9qOasQ'" target="_blank"><strong>Dead Fantasy series</strong></a></li>
                <li><a :href="'https://www.youtube.com/watch?v=4CTSf1QRk9w'" target="_blank"><strong>bottom gear</strong></a></li>
                <li><a :href="'https://www.youtube.com/watch?v=siIE8i48hlg'" target="_blank"><strong>ボーカロイドたちが2コードくり返してﾃｯﾃｰﾃﾚｯﾃｰとか叫ぶだけ</strong></a></li>
              </ul>
            </b-container>
            
          </b-col>
        </b-row>
      </b-container>

      <!-- <b-container class="details-item">
        <skills></skills>
      </b-container> -->



    </b-container>

   </b-container>
</template>

<script>
import NameHeader from '@/components/NameHeader.vue';
import Skills from '@/components/Skills.vue';

export default {
  components: {  NameHeader, Skills },
  mounted() {
    this.scrollToTop()
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0)
    }
  }
}
</script>

<style scoped>


.section-heading {
  padding-bottom: 2rem;
}

#about-divider {
  background:  rgba(223, 226, 255, 0.548)
}

.details {
  display: flex;
  flex-direction: column;

  color:  #dfe2ff;
  padding-bottom: 7rem;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-items: center;
}
.description {
  align-items: left;
  text-align: left;
}
.games-list {
  align-items: left;
  text-align: left;
}
</style>