<template>
  <b-container fluid id="about" class="about-section overflow-auto" >
    <section data-aos="fade-in" data-aos-duration="200">
      <header class="masthead">
        <div class="about-container" >
          <b-row class="about-row" >
            <b-col class="about-col" lg="8" md="10">
                <h1 class="text-white font-weight-bold">About Me</h1>
                <hr id=about-divider class="divider my-3" />
            </b-col>
            <b-col id=about-details class="about-details" lg="8" md="10">
                <p class="font-weight-light">{{about.text1}}</p>
                <p class="font-weight-light">{{about.text2}}</p>
            </b-col>
          </b-row>
          <section class="edu-section">
            <b-row class="edu-row">
              <b-col class="edu-col">
                <b-card id="education-card" class="education-card overflow-hidden shadow-sm">
                  <b-card-body class="edu-cardbody">
                    <h2 class="education-title font-weight-bold">Education</h2>
                    
                    <b-container class="edu-entry" v-for="edu in education" :key="edu.id">
                      <b-row>
                        <b-col lg="9">
                          <b-card-title class="edu-title">{{edu.location}}</b-card-title>
                          <b-card-text class="edu-degree font-weight-bolder">{{edu.degree}}</b-card-text>
                          <b-card-text class="edu-text">{{edu.text}}</b-card-text>
                        </b-col>
                        <b-col lg="3">
                          <b-card-text class="edu-date">{{edu.date}}</b-card-text>
                        </b-col>
                      </b-row>
                      <hr id=dark-divider class="divider my-4" />
                    </b-container>

                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </section>
        </div>
      </header>
    </section>
  </b-container>
</template>

<script>
export default {
  components: {},
  name: 'about-section',
  data() {
    return {
      about: {
        text1: 'I am a Master\'s student in Game Design and Technology at Gothenburg University, with a Bachelor\'s in Software Engineering and Management. I am currently looking for opportunities to deepen my knowledge of Game Development.',
        text2: 'Oh, and rhythm games. Those are nice.'
      },
      education: [
        { location: 'University of Gothenburg', degree: 'Master\'s Programme in Game Design and Technology', date: '2020 - now', text: 'Slight Headache.' },
        { location: 'University of Gothenburg', degree: 'Bachelor\'s Programme in Software Engineering and Management', date: '2017 - 2020', text: 'Moderate Pain.' },
        { location: 'Hvitfeldtska Gymnasiet', degree: 'International Baccalaureate', date: '2014 - 2017', text: 'Pain.' }
      ]
    }
  }
}
</script>

<style scoped>
.about-section{
  display: block;
  background-color: #2d3142;
  text-align: center;
  align-items: center;
  align-self: center;
}
.about-col {
  font-size: 3.2rem;
}
.about-row {
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 8em;
  padding-bottom: 8em;
  padding-right: 2rem;
  padding-left: 2rem;
}
.about-details {
  color:  #dfe2ff;
  font-size: 1.2rem;
}
.edu-section {
  align-items: center;
  padding-right: 20%;
  padding-left: 20%;
  padding-bottom: 5%;
}
#education-card {
   background: transparent;
   border-color: #96a5eb;
   background-color: #e4e6ff;
}
.education-title {
  text-align: left;
  padding: 1.5%;
}
.edu-entry {
  padding-bottom: 2%;
  text-align: left;
}
.edu-date {
  text-align: right;
}
@media (max-width: 430px) {
  .edu-section {
    padding-right: 2%;
    padding-left: 2%;
    padding-bottom: 20%;
  }
  .education-title {
    text-align: center;
    padding-bottom: 20%;
  }
  .edu-entry {
    padding-bottom: 20%;
    text-align: center;
  }
  .edu-degree {
    text-align: left;
  }
  .edu-date {
    text-align: center;
  }
}

#about-divider {
  background:  #dfe2ff;
}
</style>
      