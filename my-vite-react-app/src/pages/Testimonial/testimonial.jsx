import React from 'react'
import "./testimonial.scss"

function testimonial() {
  return (
   
    <main class="testimonial-grid">
    <article class="testimonial grid-col-span-2 flow bg-primary-400 quote text-neutral-100">
      <div class="flex">
        <div>
          <img  src="/images/blacky.jpg" alt="daniel clifford"></img>
        </div>
        <div>
          <h2 class="name">Daniel Clifford</h2>
          <p class="position">Patient</p>
        </div>
      </div>
      <p>
      "I recently had the privilege of becoming a patient at Dr. Sarah Mitchell's clinic, and the experience exceeded all my expectations. 
      </p>
      <p>
      Clinical Therapy is a true embodiment of patient-centered care. 
      During my first appointment, Dr. Russell took the time to listen attentively to my concerns, 
      displaying a genuine interest in my overall well-being. His thorough and empathetic approach made me feel heard and understood, 
      something I value immensely in a healthcare provider.
      </p>
    </article>
    <article class="testimonial flow bg-secondary-400 text-neutral-100">
      <div class="flex">
        <div>
          <img src="./images/lucy.jpg" alt="Jonathan Walters"/>
        </div>
        <div>
          <h2 class="name">Jonathan Walters</h2>
          <p class="position">Patient</p>
        </div>
      </div>
      <p>
      The clinic itself is well-equipped with modern facilities, 
      </p>
      <p>
      The clinic itself is well-equipped with modern facilities, 
      creating a sense of confidence in the quality of care. The efficiency of the staff, 
      coupled with Dr. Russell's expertise, ensured a smooth and timely visit. 
      
      </p>
    </article>
    <article class="testimonial flow bg-neutral-100 text-secondary-400">
      <div class="flex">
        <div>
          <img src="././images/slut.jpg" alt="Jeanette Harmon"/>
        </div>
        <div>
          <h2 class="name">Jeanette Harmon</h2>
          <p class="position">Patient</p>
        </div>
      </div>
      <p>
        An overall wonderful and rewarding experience</p>
      <p>
        “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
        while doing something I love. ”
      </p>
    </article>
    <article class="testimonial grid-col-span-2 flow bg-secondary-500 text-neutral-100">
      <div class="flex">
        <div>
          <img class="border-primary-400" src="./images/image-patrick.jpg" alt="Patrick Abrams"/>
        </div>
        <div>
          <h2 class="name">Patrick Abrams</h2>
          <p class="position">Patient</p>
        </div>
      </div>
      <p>
        Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
        learning from their experiences was easy.
      </p>
      <p>
        “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
        gave me the confidence necessary to be able to go out in the world and present myself as a capable
        junior developer. The standard is above the rest. You will get the personal attention you need from
        an incredible community of smart and amazing people. ”
      </p>
    </article>
    <article class="testimonial flow bg-neutral-100 text-secondary-400">
      <div class="flex">
        <div>
          <img src="./img/blacky.jpg" alt="Kira Whittle"/>
        </div>
        <div>
          <h2 class="name">Kira Whittle</h2>
          <p class="position">Patient</p>
        </div>
      </div>
      <p>
        Such a life-changing experience. Highly recommended!
      </p>
      <p>
        “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
        professionals who can help me learn programming step by step. I was encouraged to enroll by a former
        student of theirs who can only say wonderful things about the program. The entire curriculum and staff
        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
        100% recommend! ”
      </p>
    </article>
  </main>
   
  )
}

export default testimonial