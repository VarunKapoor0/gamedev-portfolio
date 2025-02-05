<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Varun Kapoor</strong>, a passionate game developer and graphics programmer with a strong foundation in computer science and real-time rendering.
      <br />Currently pursuing my Master’s in Computer Science at the University of Southern California, I specialize in game engine development, physics-based animation, and real-time rendering techniques.
      <br />My technical expertise spans C++, OpenGL, Vulkan, and various game engines like Unity and Unreal. I have worked on optimizing game engine performance, developing custom shaders, and implementing physics-based animation systems.
      <br />My research interests lie in multimedia systems and pipelines for mixed reality, augmented reality and real-time graphics rendering.
      <br />
      <br />Right now I'm trying to find a summer internship. So if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides game development, I'm passionate about long walks, hiking, open-world and indie games and space opera books.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Varun_Kapoor_Resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/Photo_me.jpeg" alt="Photo of Varun" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Course Producer - USC Viterbi School of Engineering</h3>
      <h4>May 2024 - July 2024</h4>

      <div>Designed course syllabus and grading rubrics for game development. Conducted lectures on Unity and C# game development. Reviewed and provided feedback on programming assignments related to interactive media.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>FullStack Developer - Daimler Truck Innovation Center India </h3>
      <h4>November 2021 - August 2022</h4>

      <div>Developed a cost simulation tool using ReactJS for truck fleet owners. Ensured seamless integration of backend and frontend through cross-team collaboration.</div>

      <div class="tech-stack">Even more Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Android Developer - Mercedes-Benz Research and Development India (MBRDI)</h3>
      <h4>August 2019 - October 2021</h4>

      <div>Migrated an enterprise application from Java to Kotlin, improving efficiency. Integrated six new features that enhanced user experience. Optimized UI rendering and memory management, reducing application crashes.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Business Development Intern - TrillBit</h3>
      <h4>April 2018 - June 2018</h4>

      <div>Developed an AR application with ARCore for Unity to visualize discounts and coupons. Integrated the AR application into TrillBit’s existing platform. Structured and submitted information for team coordination.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Trainee - Wipro</h3>
      <h4>April 2017 - May 2017</h4>

      <div>Created a dashboard structure with AngularJS Charts for data visualization. Assisted in developing frontend solutions for internal tools.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Technical</h3>
        <SkillRate name="C++" :rate="5" />
        <SkillRate name="Python" :rate="5" />
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="Java" :rate="5" />
        <SkillRate name="Kotlin" :rate="5" />
        <SkillRate name="Android Development" :rate="5" />
        <SkillRate name="Unity" :rate="5" />
        <SkillRate name="Blender" :rate="5" />
        <SkillRate name="Maya" :rate="4" />
        <SkillRate name="Git" :rate="5" />
        <SkillRate name="Shader Programming" :rate="4" />
        <SkillRate name="ReactJS" :rate="4" />
        <SkillRate name="AngularJS" :rate="4" />
        
      </div>

      <div class="skill-set">
        <h3>Non-technical</h3>
        <SkillRate name="Problem-Solving" :rate="5" />
        <SkillRate name="Leadership" :rate="4" />
        <SkillRate name="Communication" :rate="5" />
        <SkillRate name="Adaptibility" :rate="5" />
        <SkillRate name="Project Management" :rate="4" />
        <SkillRate name="Research and Analysis" :rate="4" />
        
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>University of Southern California - 2024</h3>
      <h4>Master of Science in Computer Science</h4>
      <div>Relevant coursework in game engine development, 3D graphics, and physics-based animation.</div>

      <h3>CHRIST University - 2015</h3>
      <h4>Bachelor of Technology - Computer Science and Engineering</h4>
      <div>Graduated with a 9.3/10 GPA, specializing in software development and engineering principles.</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Advanced proficiency in reading and writing.</div>

      <h3>Hindi</h3>
      <div>Advanced proficiency in reading and writing.</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Long Walks</h3>
        <div>I find it really soothing to go out for long walks, my longest being walking from my residence close to USC, to Marina Del Rey(approximately 16 miles or 25 kilometres).</div>

        <h3>I 🧡 Gaming</h3>
        <div>I love playing first-person shooter games as well as indie games.</div>

        <h3>I 💛 Space Opera</h3>
        <div>Space Opera Science fiction is brilliant for me, the foundation series by Isaac Asimov topping the charts.</div>

        <h3>I 💚 Making Music</h3>
        <div>I've been playing the violin since I was 8 years old. I have my masters degree in hindustani classical music.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>