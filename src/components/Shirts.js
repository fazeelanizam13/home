import { Disclaimers, Footer } from "."

import survey1 from "../images/shirts/survey-1.png"
import survey2 from "../images/shirts/survey-2.png"
import surveyResults1 from "../images/shirts/survey-results-1.jpg"
import surveyResults2 from "../images/shirts/survey-results-2.jpg"
import surveyResults3 from "../images/shirts/survey-results-3.jpg"
import kevin from "../images/shirts/kevin.jpg"
import userJourney from "../images/shirts/user-journey-map.png"
import taskFlows from "../images/shirts/task-flows.png"
import sketch1 from "../images/shirts/sketch-1.JPG"
import sketch2 from "../images/shirts/sketch-2.JPG"
import sketch3 from "../images/shirts/sketch-3.JPG"
import signup from "../images/shirts/wireframes/signup-4.svg"
import placeorder1 from "../images/shirts/wireframes/placeorder-1.svg"
import placeorder2 from "../images/shirts/wireframes/placeorder-2.svg"
import placeorder4 from "../images/shirts/wireframes/placeorder-4.svg"
import instructions from "../images/shirts/wireframes/instructions.svg"
import measurements from "../images/shirts/wireframes/measurements.svg"
import tipsmeasure from "../images/shirts/wireframes/tipsmeasure.svg"
import color from "../images/shirts/wireframes/color.svg"
import moodboard from "../images/shirts/moodboard.png"
import base from "../images/shirts/base.png"
import darkGrey from "../images/shirts/dark-grey.png"
import lightGrey from "../images/shirts/light-grey.png"
import white from "../images/shirts/white.png"
import accent from "../images/shirts/accent.png"
import font from "../images/shirts/font-sample.png"
import onboarding from "../images/shirts/onboarding.gif"
import placingOrder from "../images/shirts/placing-order.gif"

import header from '../images/shirts/shirts-header.jpg'

export default function Home() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${header})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: '40vh',
        position: 'relative',
        width: '100vw',
        color: 'white'
      }}>
        <h1 style={{
          position: 'absolute',
          bottom: 0,
          marginLeft: '2rem',
        }}>mobile ui/ux case study – dressmaking workshop app</h1>
      </div>

      <div className="case">
        <div id="overview">
          <h2>Overview</h2>

          <h3>Inspiration</h3>

          <div className="text-content">
            <p>
              It is through personal experience that I’ve realized, that only those clothes that are custom-made for you would make you feel the most confident. As someone of a less than average height, ready-to-wear clothes never fit me right until I learned to make those dresses myself to my own measurements.
            </p>

            <p>
              But not everyone might wish to, or have the patience or time to do it, and in fact, they shouldn’t have to. There are professionals who are there to do the job for you, and it’s very common for Sri Lankan parents to have a dressmaker make the uniforms for their school-going kids. And it is the same case with formal attire, party and wedding dresses, if not more so.
            </p>
          </div>

          <h3>The Problem</h3>

          <div className="text-content">
            <p>
              But then, MUST you visit your dressmaker each time you want something new made for you? What if there was a way you could just measure yourself at home and let them know the details along with what kind of dress you want?<br />
              After all, we now order everything from art-supplies to pizza from home through mobile apps, so what if your dressmaker had an app to connect with you as well!?!
            </p>

            <p>
              This is how I got inspired to design for a mobile app, that would enable a customer to order a clothing item to be custom-made for them, without visiting the dressmaker as per the traditional way.
            </p>

            <p>
              But to start off, I first had to know what people’s experiences were from their point of view, and their attitude toward the idea of remote interaction between the two parties involved–the dressmaker and their customer–in our case.
            </p>
          </div>
        </div>

        <div>
          <h2>User Research</h2>

          <h3>Research Methods</h3>

          <div className="text-content">
            <p>
              For this, I prepared a Google Form to survey the customers and used scheduled phone calls and personal interviews with tailor-shop owners. The goal was to get to know the standpoint of these potential users of the application, about the prospect of such an app.
            </p>

            <div className="img-content survey">
              <img src={survey1} alt="Google Form Screenshot 1" />

              <img src={survey2} alt="Google Form Screenshot 2" />
            </div>
          </div>

          <div className="text-content">
            <p>
              Out of the questions on the Google Form, most of the importance can be placed on the questions that ask users their mindset on the traditional procedure of personally visiting a workshop and my alternative suggestion of using a mobile application instead. In order to not overwhelm the subject, I made it a point to use only multiple-choice questions but used one paragraph-type question to provide their opinion on remote-interaction with a dressmaker.
            </p>

            <div className="img-content results">
              <img src={surveyResults1} alt="Survery Results Depicted in Pie Charts 1" />

              <img src={surveyResults2} alt="Survery Results Depicted in Pie Charts 2" />

              <img src={surveyResults3} alt="Survery Results Depicted in Pie Charts 3" />
            </div>
          </div>

          <div className="text-content">
            <p>
              The results of the survey collectively meant that the customers didn’t really mind visiting a tailor’s workshop, and despite that fact they seemed to happily welcome the option of a mobile interface to serve the exact same purpose. This really helped me get further motivated to start giving my idea life.
            </p>
          </div>

          <div className="text-content">
            <p>
              When interviewing dressmakers, I focused more on their stance on the mobile app. Following are some direct quotes from tailor shop owners that I interviewed:
            </p>

            <div className="text-content">
              <ul>
                <li>“I doubt most customers know how to take measurements properly. Some of them you can’t take yourself even if you know how to. You are going to need someone’s help.”</li>

                <li>“Everything needs some time to get used to, and I think it would be true to this one too. I wouldn’t oppose to the idea.”</li>

                <li>“It would be a safer bet if they still can contact us in case they come up with any issues, which I suppose is going to be many.”</li>

                <li>“I hope there are very clear instructions and descriptions to specific terminology. They would mostly have no idea about any of it.”</li>
              </ul>
            </div>
          </div>

          <h3>Personas</h3>

          <div className="text-content">
            <p>
              At this step of the procedure, I decided to narrow down the scope of this project into one that would take orders for tailor-made dress-shirts. I did this by creating a male persona that could manifest as a character, the data I gathered, and yet helped me design the product with a target group of male users in my mind.
            </p>

            <p>
              In addition, creating personas helps focus on the users' needs without getting distracted by new ideas that would pop up in my head later during the design process.
            </p>

            <div className="text-content" id="persona">
              <div className="text-content kevin">
                <div className="img-content">
                  <img src={kevin} alt="Kevin Lee Facing the Camera" />
                </div>

                <ul>
                  <li><strong>Name:</strong> Kevin Lee</li>

                  <li><strong>Age:</strong> 29</li>

                  <li><strong>Profession:</strong> Secondary School Teacher</li>
                </ul>
              </div>

              <div className="text-content">
                <ul>
                  <li><strong>About:</strong>
                    <ul>
                      <li>
                        Kevin lives with his spouse and two dogs in an apartment in the suburbs. As a school teacher, his typical wardrobe consists of dress shirts and slacks, and he almost always has his clothes tailor-made for him by his dressmaker. His work hours fall between 7 AM and 2 PM unless he happens to have after-school duties which would usually extend the usual time span until around 6 PM. This leaves him enough time for outside visits only during the weekend, but he explains that he would rather wish to spend this time at home with his family.
                      </li>
                    </ul>
                  </li>

                  <li><strong>Habits:</strong>
                    <ul>
                      <li>Likes to add new items to his closet as often as once a month.</li>
                      <li>Prefers custom-made clothes to ready-to-wear clothes in stores for the optimal fit.</li>
                      <li>Usually utilizes remote ways of interaction when it comes to tasks like shopping and paying his bills.</li>
                    </ul>
                  </li>

                  <li><strong>Pain Points:</strong>
                    <ul>
                      <li>Has to set a minimum of two hours for the task of visiting the dressmaker.</li>
                      <li>Doesn’t appreciate it in cases where there happens to be a line that he has to wait idle in.</li>
                    </ul>
                  </li>

                  <li><strong>Goals:</strong>
                    <ul>
                      <li>Save as much time he can so that he can focus more on his profession and spend more time at home with his family.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h3>User Journey</h3>

          <div className="text-content">
            <p>
              As the next step I created the usual process my persona goes through once they decide on getting new clothes. This was really helpful to me to create the user experience that aligns as much with the traditional procedure as possible, eliminating the pain points the typical user journey consists of.
            </p>
          </div>

          <div className="img-content journey">
            <img src={userJourney} alt="User Journey Map" />
          </div>
        </div>

        <div id="info">
          <h2>Information Architecture</h2>

          <h3>Task Flows</h3>

          <div className="text-content">
            <p>
              By now I had a vague idea about the tasks the app should help the user achieve, and before moving onto user interfaces, I first broke the basic processes down to smaller steps.
            </p>
          </div>

          <div className="img-content flow">
            <img src={taskFlows} alt="Task Flows for Basic Processes" />
          </div>

          <h3>Sketches</h3>

          <div className="text-content">
            <p>
              Some of the sketches I did follows and they show the beginning of my solution taking shape. Sketching on paper before going for high-fidelity wireframes is beneficial in such a way that it requires minimal tools and I can iterate my ideas considerably quicker.
            </p>
          </div>

          <div className="img-content sketch">
            <img src={sketch1} alt="Low Fidelity Sketch 1" />

            <img src={sketch2} alt="Low Fidelity Sketch 2" />

            <img src={sketch3} alt="Low Fidelity Sketch 3" />
          </div>

          <h3>Wireframes</h3>

          <div className="text-content">
            <p>
              Wireframing helped me focus more on the functionality, setting visual appeal aside for later.
            </p>
          </div>

          <div className="img-content wire">
            <img src={signup} alt="Wireframe 1" />

            <img src={placeorder1} alt="Wireframe 2" />

            <img src={placeorder2} alt="Wireframe 3" />

            <img src={placeorder4} alt="Wireframe 4" />

            <img src={instructions} alt="Wireframe 5" />

            <img src={measurements} alt="Wireframe 6" />

            <img src={tipsmeasure} alt="Wireframe 7" />

            <img src={color} alt="Wireframe 8" />
          </div>

          <div className="text-content" style={{ fontSize: '.8rem' }}>
            <p>
              Note: Content for the section of this app where it instructs users on how to measure themselves and how to choose material and fit of the shirt they want has been taken from the following sources, and doesn't belong to me:
            </p>

            <ul>
              <li>https://propercloth.com/reference/dress-shirt-body-measurements</li>
              <li>https://sewguide.com/best-fabrics-for-shirts</li>
              <li>https://propercloth.com/reference/based-on-body-measurements-selecting-a-type-of-fit</li>
            </ul>
          </div>
        </div>

        <div id="visual">
          <h2>Visual Research</h2>

          <h3>Mood Board</h3>

          <div className="text-content">
            <p>
              I wanted the app to reflect stability, depth and loyalty due to the fact that users are paying for something in advance, but they are not seeing in real what it would look like except for the fabric/color swatches offered for selection on the app. The visuals must incite feelings of trust in user on the workshop owner, and user must not feel uncertain about the outcome of using the app to place an order without visiting the workshop in person.<br />
              As a color that symbolizes integrity, confidence and seriousness, the color of sky and the oceans, blue was my first choice as the base color.
            </p>

            <p>
              And also taking the nature of the process of making a shirt in account, I thought it would be informative to keep in mind such details like sharp and seamless edges, luxurious textures and ornate patterns.
            </p>
          </div>

          <div className="img-content mood">
            <img src={moodboard} alt="Moodboard for Inspiration" />
          </div>

          <h3>Color Palette</h3>

          <div className="text-content">
            <p>
              I used a dark, deep blue as the base color and a muted, dusty yellow as the accent for the color palette. And I thought there would be white spaces and solid blue surfaces in equal amounts.
            </p>
          </div>

          <div className="img-content colors">
            <img src={base} alt="Base Blue" />

            <img src={darkGrey} alt="Dark Grey" />

            <img src={lightGrey} alt="Light Grey" />

            <img src={white} alt="White" />

            <img src={accent} alt="Accent Yellow" />
          </div>

          <h3>Typography</h3>

          <div className="text-content">
            <p>
              Abel is a free Google Font designed by MadType, which is a modern interpretation of the condensed flat-sided sans serif.<br />
              It’s a mono-weight, but still for simplicity’s sake, I didn’t use any other font and decided to use properties like size and alignment to convey a typographic hierarchy.
            </p>
          </div>

          <div className="img-content font" style={{ margin: 'auto' }}>
            <img src={font} alt="Abel Font Sample" />
          </div>

          <h3>Micro-Interactions and Animations</h3>

          <div className="text-content">
            <p>
              It is common for processes that consist of several steps that the user has to go through, to use a ‘progress bar.’ This mechanism is used to give user a sense of advancement.<br />
              And in this app, I had used a block of dark blue that serves as an alternative to the traditional progress bar, by covering the screen gradually during tasks that involve steps, and eventually becomes a background fill by covering the whole screen.<br />
              For an example, what follows are the processes of onboarding a new user and placing an order respectively:
            </p>
          </div>

          <div className="img-content gif">
            <img src={onboarding} alt="Sign Up Procedure as an Animated GIF" />

            <img src={placingOrder} alt="Procedure of Placing an Order as an Animated GIF" />
          </div>
        </div>

        <div id="prototype">
          <h2>Prototype</h2>

          <div className="text-content">
            <p>
              Please click <a href="https://projects.invisionapp.com/prototype/Dressmaking-Workshop-Mobile-App-ck4bj0sl00066n401y19m1v0l" target="_blank" rel="noreferrer" className="mainlinks">here</a> to view the prototype created using InVision App.
            </p>
          </div>
        </div>

        <div id="conclusion">
          <h2>Conclusion</h2>

          <h3>What I Learned</h3>

          <div className="text-content">
            <p>
              I think the stage in the whole procedure that I learned the most from is user research. Mainly because it was my first time doing research to gather data for a targeted purpose, and then the research I had to do on my own before preparing a better questionnaire for them, to obtain the most relevant data that I could make use of, to make decisions.
            </p>

            <p>
              And I realized that it takes way more care and consideration when developing a product specifically for someone else rather than for yourself, which is mostly what used to be the case for me before I set out to work on this project. I had to pay serious attention to their needs and concerns, as much as I had to use what I knew to be ‘best’ or ‘optimal’ in the design process.
            </p>
          </div>

          <h3>Next Steps</h3>

          <div className="text-content">
            <p>
              Like I said earlier, I narrowed the scope I initially had in my mind down by excluding all other consumers, and only focusing on the needs of a small niche of users, that is, adult males. But this app can be expanded to deal with receiving orders not just for dress shirts, but for all sorts of clothes, thus, involving more extensive research and subsequently, possibly different design decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-wrapper" style={{
        backgroundImage: `url(${header})`,
        backgroundPosition: 'bottom',
      }}>
        <Disclaimers
          usage="for project thumbnail, header and footer"
          photographers={[
            {
              href: "https://unsplash.com/@jonathanborba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
              name: "Jonathan Borba"
            }
          ]}
        />
        <Footer />
      </div>
    </>
  )
}
  