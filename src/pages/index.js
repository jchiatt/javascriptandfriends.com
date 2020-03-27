import React from "react";
import Layout from "../components/layout";
import theme from "../themes";
import { ThemeProvider } from "styled-components";
import MainBanner from "../components/MainBanner";
import Alternate from "../components/Alternate";
import { Link as ButtonLink } from "../components/Button";
import { GatsbyLink } from "../components/Link";
import { Flex } from "@rebass/grid";
import Heading from "../components/Heading";
import Schedule from "../components/Schedule";
import Speaker from "../components/Speaker";
import Text from "../components/Text";
import speakerData from "../speakerData";
import { Link } from "../components/Button";
import styled from "styled-components";
import "../components/root.css";

const TextWrapper = styled.div`
  max-width: 1024px;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <MainBanner>
        <Flex flexDirection={["column", "row"]} alignItems="center">
          <ButtonLink
            href="https://ti.to/magnoliajs/magnoliajs2020"
            alignSelf={["center", "flex-start"]}
            mr={[0, 40]}
            mb={[20, 0]}
            target="_blank"
          >
            Get your ticket!
          </ButtonLink>
          <GatsbyLink to="speakers" color="white">
            See speakers
          </GatsbyLink>
        </Flex>
      </MainBanner>
      <article
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {speakerData.map(speaker => {
          return (
            <Speaker
              key={speaker.name}
              name={speaker.name}
              Image={speaker.Image}
              talk={{
                title: speaker.talk.title,
                description: speaker.talk.description
              }}
              twitter={speaker.twitter}
              company={speaker.company}
              bio={speaker.bio}
            />
          );
        })}
      </article>
      {/* <Text pt={10} pb={30} textAlign="center">
        <Link href="/speakers">See all speakers</Link>
      </Text> */}
      {/* <Alternate pb={100}>
        <Heading color="mainBackground" size={2} textAlign="center">
          Speakers
        </Heading>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          style={{ padding: "2rem", width: "" }}
        >
          <Speaker
            name="Jay Phelps"
            Image={JayPhelpsImage}
            talk={{
              title: "The WebAssembly Revolution Has Begun",
              description: "WebAssembly (aka wasm) is a new, standardized compilation target for the web, shipping in all modern browsers. But since it's so low level it can be difficult to see how it will revolutionize the next generation of web apps–and definitely not just games and C++. This is a game changer for all web developers. In this talk Jay will reveal what it is, how you can use it today, and the incredible opportunities it will unlock in the years to come."
            }}
            twitter="_jayphelps"
            bio="Reactive programming nut and compiler enthusiast. Previously a Senior Software Engineer at Netflix. Lover of all things open source, his contributions span numerous ecosystems and active in the community as a Google Developer Expert for Web Technologies and W3C WebAssembly Community Group member. He previously volunteered as an RxJS core team member, and is the author of core-decorators, git-blame-someone-else, and co-author of redux-observable."
          />
        </Flex>
        
      </Alternate> */}
      {/* <Alternate pb={100} style={{overflowX: 'scroll'}}>
        <Heading color="mainBackground" size={2}>
          Schedule - April 15 (Workshop Day)
        </Heading>
        <Text pt={10} pb={30}>Workshops run concurrently and their durations/end times will be determined by the instructors.</Text>
        <Schedule day="workshop" />
        <Heading color="alternateHeading" size={2}>
          Schedule - April 16 (Conference Day)
        </Heading>
        <Schedule day="conference" />
      </Alternate> */}
      <Alternate pb={100}>
        <Heading color="alternateHeading" size={2}>
          Interested in sponsoring?
        </Heading>
        <TextWrapper>
          <Text pt={10} pb={30}>
            MagnoliaJS is Mississippi's{" "}
            <strong>only developer conference</strong>. Our mission is to foster
            growth and opportunities for developers in the Southeast and be the
            launching point for greater things for the tech in Mississippi.
          </Text>
          <Text pt={10} pb={30}>
            We are aiming to bring together around 500 web developers and
            friends to learn new skills and concepts and to network and develop
            new relationships.
          </Text>
          <Text pb={40}>
            Here's your chance to contribute to that mission! We're looking for
            the best companies to partner with us and help to make the
            second-annual MagnoliaJS conference a success.
          </Text>
        </TextWrapper>
        <Link
          borderColor="alternateHeading"
          backgroundColor="rgba(0,0,0,0)"
          color="alternateHeading"
          href="/sponsor"
        >
          Learn More
        </Link>
      </Alternate>
    </Layout>
  </ThemeProvider>
);

export default Root;
