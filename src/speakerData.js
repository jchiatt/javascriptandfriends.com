import NashlieSephus from "./images/2020-speakers/nashlie-sephus.jpg";
import TejasKumar from "./images/2020-speakers/tejas-kumar.jpg";
import JayPhelps from "./images/2020-speakers/jay-phelps.jpg";
import MichaelLiendo from "./images/2020-speakers/michael-liendo.jpg";
import KaylaSween from "./images/2020-speakers/kayla-sween.jpg";
import TylerClark from "./images/2020-speakers/tyler-clark.png";
import ChrisDemars from "./images/2020-speakers/chris-demars.jpg";
import NaderDabit from "./images/2020-speakers/nader-dabit.jpg";
import JustinSamuels from "./images/2020-speakers/justin-samuels.jpg";
import ChrisBall from "./images/2020-speakers/chris-ball.jpg";

export default [
  {
    name: "Nashlie Sephus (Keynote)",
    bio: `Dr. Nashlie H. Sephus is the Applied Science manager for Amazon’s Artificial Intelligence (AI) initiative focusing on fairness and identifying biases in the technologies. She formerly led the Amazon Visual Search team in Atlanta, which launched visual search for replacement parts on the Amazon Shopping app in June 2018. This technology was a result of former startup Partpic (Atlanta) being acquired by Amazon, for which she was the Chief Technology Officer (CTO). Prior to working at Partpic, she received her Ph.D. from the School of Electrical and Computer Engineering at the Georgia Institute of Technology in 2014 and worked for a year with Exponent technical consulting firm in New York City. Her core research areas were digital signal processing, machine learning, and computer engineering. She received her B.S. in Computer Engineering from Mississippi State University (2007).

    Dr. Sephus is a native of Jackson, Mississippi and a 2003 graduate of Murrah High School/Power Academic and Performing Arts Complex (APAC). She’s had several internships and research experiences worldwide with companies such as IBM, Delphi, University of California at Berkeley, GE Research Center, GE Energy, Miller Transporters, and Kwangwoon University in Seoul, South Korea. Recently, Dr. Sephus became founder and CEO of The Bean Path non-profit organization based in Jackson, MS assisting individuals with technical expertise and guidance. During her leisure time, she enjoys playing tennis, playing the piano, listening to music, bargain hunting, biking, and working on do-it-yourself (DIY) projects at home.`,
    Image: NashlieSephus,
    talk: {
      title: "I'm Techie and I Know It",
      description:
        "A huge population of people are unaware of technologies that could benefit them, too intimidated to use technology, or have no one to show them how to use it. Yet, there are many avenues to break into tech. Through her personal journey of growing up in Mississippi, being CTO of a tech startup (Partpic) acquired by Amazon, and leading tech teams in corporate America, Dr. Nashlie Sephus encourages individuals of various ethnicities, backgrounds, and ages to be confident in embracing technology in their everyday lives. She embodies this message through nonprofit, The Bean Path, and discusses how to get free tech help."
    },
    twitter: "nashlie_s",
    company: " Amazon / The Bean Path"
  },
  {
    name: "Jay Phelps",
    bio: `Jay is a Reactive Programming nut, compiler/language design enthusiast, and previously an engineer at Netflix.

    He has contributed to numerous open source projects and volunteered as part of the W3C WebAssembly Community Group. He was previously on the core team of RxJS, and is the author of git-blame-someone-else.`,
    Image: JayPhelps,
    talk: {
      title: "Testing Complex RxJS Async Code Using Marble Diagrams",
      description: `We work with React often, but its inner workings are a mystery to us. This talk looks at some key mechanisms that make React work under the hood. Specifically: the virtual DOM, Hooks, and Concurrent Mode.

      Testing complex async code can be challenging. But if we're using RxJS, there's a lesser-known feature we can use to make things much easier on us: the TestScheduler. Together, we can deterministically virtualize time using a declarative ASCII marble diagram.
      
      In this talk, we'll first briefly cover what RxJS is, then focus on the various patterns for testing your RxJS code, including using the TestScheduler and the syntax of ASCII marble diagrams.`
    },
    twitter: "_jayphelps",
  },
  {
    name: "Michael Liendo",
    bio:
      "UX Engineer at John Deere. When not teaching frontend concepts, I can be found dabbling in serverless stacks or playing ultimate frisbee. A Dad joke connoisseur who finds bananas appealing.",
    Image: MichaelLiendo,
    talk: {
      title: "Component Reusability at scale with StorybookJS",
      description: `The current state of the web is component-driven. While reusing components across a single project is a great exercise, achieving reusability across a global platform presents its own challenges.

      In this talk we’ll identify some do’s and don’ts for UX and Product teams, and how StorybookJS helped bridge the gap between design and development.`
    },
    twitter: "mtliendo",
    company: "John Deere"
  },
  {
    name: "Kayla Sween",
    bio:
      "Kayla Sween is a front-end developer who is passionate about UX and inclusive web design. She strives to make the web easier to use for everyone. Kayla also is a competitive powerlifter, proud dog mom, and wife.",
    Image: KaylaSween,
    talk: {
      title: "Progressive Enhancement in React",
      description:
        "React may be a JavaScript library, but that doesn’t mean we can’t or shouldn’t use progressive enhancement. Kayla will discuss what progressive enhancement is and how to use it to make your React applications more inclusive, accessible, and maintainable."
    },
    twitter: "_KaylaSween",
  },
  {
    name: "Tyler Clark",
    bio:
      "Begged his way into a junior developer role many years ago and hasn’t looked back since. Tyler has a passion for the web and loves everything about the front-end ecosystem. He is an egghead.io instructor with many online videos on topics that range from JavaScript to SQL.",
    Image: TylerClark,
    talk: {
      title:
        "ES8, ES9, ES10+… Let’s explore JavaScript’s exciting new features",
      description: `JavaScript fatigue is a real thing. Not only are there constantly new tools, libraries, and framework versions, but the language itself is adding new features each year. Within the last five years, JavaScript has seen more additions than it had any of the previous years combined.

      A quick glance at the proposals within the TC39 github shows that there is no end in sight.
      
      It can be daunting to try to keep up.
      
      This talk is designed to help shine a light on some of the recent additions that you might not be aware of, that can be really useful in your everyday code.
      
      Topics include new data structures, new prototype methods on our favorite objects, asynchronous iteration, and new operators.`
    },
    twitter: "iamtylerwclark",
    company: "Auth0"
  },
  {
    name: "Chris DeMars",
    bio:
      "Chris DeMars is a front end developer first, UX architect always, from Detroit, Michigan now living in Denver, Colorado. For his community contributions, he holds awards as a Microsoft MVP in developer technologies and Google Developer Expert in web technologies. He is also an international speaker and former organizer for Vuetroit and former co-organizer of the Ann Arbor Accessibility Group. Chris loves coming up with solutions for enterprise applications, which include modular CSS architectures, performance, and advocating for web accessibility. When he is not working on making the web great and inclusive you can find him writing blog posts, recording episodes of his podcast, Tales From The Script, or watching horror movies.",
    Image: ChrisDemars,
    talk: {
      title: "I Can't See: Low Vision A11y & Users",
      description: `When you think of low vision, what comes to mind? A user that is near sighted? How about far sighted? Maybe partially blind? These are all qualifying cases of poor vision, but low vision is more complicated than the prescription of glasses or contacts.

      According to the World Health Organization, they categorize low vision based on specific levels of visual acuity and field of vision ([W3.org](http://w3.org/), 2016). With that in mind, we as developers can look at different categories of low vision including color vision, visual acuity, contrast sensitivity, etc and make an effort to bake in things like zoom, non-conflicting colors, and re-wrapping of columns in to our code.
      
      My talk will cover what vision accessibility is, different categories of low vision, what the needs of the users are, and what we as developers can do to achieve a great user experience for low vision users.`
    },
    twitter: "saltnburnem",
  },
  {
    name: "Nader Dabit",
    bio:
      "Nader Dabit is a web and mobile developer and a Senior Developer Advocate at AWS specializing in cross platform and cloud enabled application development.",
    Image: NaderDabit,
    talk: {
      title: "Building a Full Stack CMS for the Modern Age",
      description: `The year is 2020. The amount of tooling, technology, and techniques that enable us to build sophisticated, rich, performant web and mobile applications has dramatically increased over the past few years giving us the power to build amazing user experiences in ways just not possible in the past.

      What if we could use this technology to rethink and re-architect some of the staples of the software industry? The technology we are using to solve problems with has evolved greatly, but many times the problems themselves remain constant.
      
      In this talk, I’ll show how we can rebuild tools like Wordpress as well as Ecommerce sites using React, Gatsby, GraphQL and serverless technologies. I’ll walk through the build process, discuss how we can package and deploy the full stack that includes authentication, authorization, signed images, and database tables with just a few commands, giving users the power of wordpress with the elegance of React, Gatsby, and Serverless technology.`
    },
    twitter: "dabit3",
    company: "Amazon Web Services"
  },
  {
    name: "Justin Samuels",
    bio:
      "Justin Samuels is The Founder & CEO of Render-Atlanta, the premier software engineering conference for the eastern United States focused on the intersection of culture & tech. One of Justin's core beliefs is to pour back into the community, to help others reach their goals, and full potential as so many have done for him. Justin takes great pride in navigating, and connecting various tech ecosystems across the world, in the pursuit of assisting the exchange of ideas among individuals, and entities. That's just a fancy way of saying he's a hustler.",
    Image: JustinSamuels,
    talk: {
      title: " Twitter Driven Development, Redux",
      description: `In today's world there is often so much communication regarding the best ideas, and practices for someone to keep their skills current without entering a physical classroom or learning session. Social media gives us the opportunity to learn from one another at a rapid speed without the barriers of transportation, location, or monetary worry. Twitter in particular has a highly-active development community which gives developers the capability to learn, and contribute at a rapid pace aiding in the development of newfound, and updated ideas. After one year of being introduced into the market, TDD has been incorporated into various keynotes, and design paradigms which now gives us quantifiable data to evaluate the impact it had on the software development lifecycle.`
    },
    twitter: "ThugDebugger",
    company: "MailChimp"
  },
  {
    name: "Chris Ball",
    bio:
      "Chris is CTO at Echobind, a full-service agency specializing in React Native, React, and Node. When he's not helping developers grow or creating amazing products for clients, you're likely to find him playing music, cycling, or camping.",
    Image: ChrisBall,
    talk: {
      title: "How to Supercharge Teams with Carefully Crafted Conventions",
      description: `What's the secret to a high performing development team? Conventions that multiply throughput and eliminate decision fatigue. But, there's no one-size-fits-all approach.

      Learn how to carefully craft a set of conventions for your team by using smaller building blocks. Looking at examples used across companies of all sizes, you'll see how these can supercharge your team's workflows and productivity overnight.`
    },
    twitter: "cball_",
    company: "Echobind"
  }
];
