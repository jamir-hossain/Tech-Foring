import React from 'react';

const FooterAccordion = () => {
   return (
      <div className="accordion d-block d-md-none" id="accordionExample">
         <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  COMPANY
               </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                  <ul>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  POPULAR LINKS
               </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                  <ul>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  RESOURCES
               </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                  <ul>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  LEGAL
               </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                  <ul>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                     <li>Lorem ipsum dolor</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FooterAccordion;