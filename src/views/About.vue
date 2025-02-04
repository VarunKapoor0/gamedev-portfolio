<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Varun Kapoor</strong>, a current computer science grad student with about 4 years of experience as a software developer in the automotive inustry.<br/>
        I also have a strong focus on game development, pursued during my Masters of Science course here at University of Southern Calfifornia.
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">stuff</router-link>, on <router-link to="/other-projects">other stuff</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a summer internship</strong> as a game developer. You can reach me at <a href="mailto:varunkap@usc.edu">varunkap@usc.edu</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.jpeg" alt="Avatar of Varun" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>