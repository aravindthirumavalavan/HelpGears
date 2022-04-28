import React from 'react';
import './About.css';
const About = () => {
     return (
          <div className="about-container">
               <div className="about-left">
                    <h2 className="left-head">Welcome to Help Gears</h2>
                    <p className="about-first">Homelessness is a growing problem all over the world and an increasing number of homeless students don't get their education.
                         When basic needs such as running water, food, and a bed cannot be met, it stands to reason that academic success suffers. By gaining a better understanding of all the obstacles homeless students face, 4
                         administrators and educators are better equipped to be an empathetic voice that advocates for them in the classroom and beyond.</p>
                    <p className="about-second">Between 2008 and 2014, homelessness in public school increased by 90 percent, jumping from 680,000 to more than 1.3 million students.
                         Approximately 35 percent of homeless population is under the age of 24. As of 2017, approximately 14 percent of community college students were homeless, and up to two-thirds don’t have enough food.</p>
                    <p className="about-third">Combined with the critical support of a host of renowned organisations backing our
                         team of qualified professionals, Help Gears is changing the future for homeless students who are needed to be educated.</p>
               </div>
               <div className="about-right">
                    <div className="Support">
                         <h2 className="right-head">How to gear us?</h2>
                         <p className="support-text">From donating money to fund our work,
                              just make some initial amounts to help our students to get good food, clothing and education.
                              Kindly support our programme</p>
                    </div>
                    <div className="Grows">
                         <h2 className="right-head">How your gears grows us?</h2>
                         <p className="Grows-text">We will use everything you give – in cash or kind –
                              to provide much needed care to the Students and their family across the cities in which we are active. This includes Education; buying medications; paying for life saving operations;
                              and equipping our team with the kit they need. </p>
                    </div>
                    <div className="Impact">
                         <h2 className="right-head">The impact your support will have</h2>
                         <p className="Impact-text">By supporting Help Gears your donations will fund an
                              increase in our outreach so we can help more students. By enabling us to deliver this much needed programme,
                              we can ensure that the students will get top most education with free of cost.</p>
                    </div>
               </div>
               
          </div>
     );
};
export default About;