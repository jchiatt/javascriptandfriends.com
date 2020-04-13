import React from 'react';

export default function Schedule({ day }) {
  if ( day === "sponsors-one") {
    return (
      <table>
        <thead>
          <tr>
            <th>Sponsor</th>
            <th>Time</th>
            <th>Zoom Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AWS</td>
            <td><time>9:00am - 9:30am (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>1:00pm - 2:30pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>5:30pm - 6:00pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td>Cloudinary</td>
            <td><time>9:00am - 9:30am (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>1:00pm - 2:30pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>5:30pm - 6:00pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td>Mississippi Coding Academies</td>
            <td><time>9:00am - 9:30am (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>1:00pm - 2:30pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>5:30pm - 6:00pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td>The Bean Path</td>
            <td><time>9:00am - 9:30am (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>1:00pm - 2:30pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>5:30pm - 6:00pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
        </tbody>
      </table>
    )
  }
  if ( day === "sponsors-two") {
    return (
      <table>
        <thead>
          <tr>
            <th>Sponsor</th>
            <th>Time</th>
            <th>Zoom Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AWS</td>
            <td><time>9:00am - 9:30am (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>1:00pm - 2:00pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td>Cloudinary</td>
            <td><time>9:00am - 9:30am (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>1:00pm - 2:30pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td>Mississippi Coding Academies</td>
            <td><time>9:00am - 9:30am (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>1:00pm - 2:30pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td>The Bean Path</td>
            <td><time>9:00am - 9:30am (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td></td>
            <td><time>1:00pm - 2:30pm (US/Central)</time></td>
            <td>Coming soon</td>
          </tr>
        </tbody>
      </table>
    )
  }
  if ( day === "one" ) {
    return (
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Speaker</th>
            <th>Zoom Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><time>9:00am</time></td>
            <td>Stream Starts</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>9:15am</time></td>
            <td>Welcome & Announcements</td>
            <td>Emcee</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>9:30am</time></td>
            <td>Keynote: I'm Techie and I Know It</td>
            <td>Nashlie Sephus</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>10:00am</time></td>
            <td>ES8, ES9, ES10+… Let’s explore JavaScript’s exciting new features</td>
            <td>Tyler Clark</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>10:30am</time></td>
            <td>Static generated sites === great performance. What are you waiting for?</td>
            <td>Debbie O'Brien</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>11:00am</time></td>
            <td>Break</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>11:15am</time></td>
            <td>Building Your Own Design System with CSS Variables</td>
            <td>Scott Tolinski</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>11:45am</time></td>
            <td>Modern JavaScript for Modern Browsers</td>
            <td>Sia Karamalegos</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>12:15pm</time></td>
            <td>Overview: Mississippi Coding Academies</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>12:25pm</time></td>
            <td>Break, Start Q&A's</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>1:00pm</time></td>
            <td>Lunch (with Virtual Lunch Tables)</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>2:30pm</time></td>
            <td>Component Reusability at scale with StorybookJS</td>
            <td>Michael Liendo</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>3:00pm</time></td>
            <td>Create Dynamic Web Apps With Serverless and the Jamstack</td>
            <td>Jason Lengstorf</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>3:30pm</time></td>
            <td>Adventures of Machine Learning in JavaScript</td>
            <td>Gant Laborde</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>4:00pm</time></td>
            <td>Break</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>4:15pm</time></td>
            <td>Twitter Driven Development, Redux</td>
            <td>Justin Samuels</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>4:45pm</time></td>
            <td>I Can't See: Low Vision A11y & Users</td>
            <td>Chris DeMars</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>5:15pm</time></td>
            <td>Day 1 - Closing Remarks, Start Q&A's</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
        </tbody>
      </table>
    )
  }
  if ( day === "two"  ) {
    return (
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Speaker</th>
            <th>Zoom Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><time>9:00am</time></td>
            <td>Stream Starts</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>9:15am</time></td>
            <td>Welcome & Announcements</td>
            <td>Emcee</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>9:30am</time></td>
            <td>Which Database? How to Choose the Best Place for your JSON Documents</td>
            <td>Suphatra Rufo</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>10:00am</time></td>
            <td>Testing Complex RxJS Async Code Using Marble Diagrams</td>
            <td>Jay Phelps</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>10:30am</time></td>
            <td>Svelte and the Great Space Elevator</td>
            <td>Shawn Wang</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>11:00am</time></td>
            <td>Break</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>11:15am</time></td>
            <td>Progressive Enhancement in React</td>
            <td>Kayla Sween</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>11:45am</time></td>
            <td>Building a Full Stack CMS for the Modern Age</td>
            <td>Nader Dabit</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>12:15pm</time></td>
            <td>Break, Start Q&A's</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>1:00pm</time></td>
            <td>Lunch (with Virtual Lunch Tables)</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>2:00pm</time></td>
            <td>Handling Data with React Query</td>
            <td>Domitrius Clark</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>2:30pm</time></td>
            <td>Canvas: The Final Escape Hatch</td>
            <td>Ken Wheeler</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>3:00pm</time></td>
            <td>How to Supercharge Teams with Carefully Crafted Conventions</td>
            <td>Chris Ball</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>3:30pm</time></td>
            <td>Break</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>3:45pm</time></td>
            <td>Chasing Whales of the Command Line: The What, How, and Why of Containers 🐳</td>
            <td>Brian Holt</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>4:15pm</time></td>
            <td>Thar Be Dragons: Rebuilding Native UIs on the Web</td>
            <td>Chance Strickland</td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>4:45pm</time></td>
            <td>Zoom Chatbots</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
          <tr>
            <td><time>5:15pm</time></td>
            <td>Day 2 — Closing Remarks, Giveaways</td>
            <td></td>
            <td>Coming soon</td>
          </tr>
        </tbody>
      </table>
    )
  }
  return null;
}