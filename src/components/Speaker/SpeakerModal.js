import React from "react";
import { Flex } from "@rebass/grid";
import { Box, Card, Button } from "rebass";

const SpeakerModal = ({
  name,
  talk,
  setOpen,
  twitter,
  Image,
  company,
  bio
}) => (
  <Box m="auto" width={[1, 0.9, 0.8]}>
    <Card
      borderRadius={12}
      p={[2, 4, 6]}
      bg="white"
      boxShadow="0 0 16px rgba(0, 0, 0, .25)"
    >
      <div
        style={{
          borderRadius: "100%",
          overflow: "hidden",
          width: "125px",
          height: "125px",
          margin: "10px auto",
          boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"
        }}
      >
        <img src={Image} alt={name} />
      </div>
      <h1 style={{ textAlign: "center" }}>{name}</h1>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={{ margin: "10px", padding: "0.5rem", flexWrap: "wrap" }}
      >
        <a
          href={`https://twitter.com/${twitter}`}
          title={`Go to ${name}'s Twitter`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </Flex>

      <h4 style={{ fontSize: ".9rem" }}>Company: {company}</h4>
      <h3 style={{ fontSize: "1rem" }}>{talk.title}</h3>
      <p style={{ fontSize: "1rem" }}>{talk.description}</p>
      {bio && (
        <>
          <h4 style={{ fontSize: ".9rem" }}>Bio</h4>
          <p style={{ fontSize: "1rem" }}>{bio}</p>
        </>
      )}
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={{ padding: "0.5rem", flexWrap: "wrap" }}
      >
        <Button
          style={{ background: "#BF5272" }}
          onClick={e => {
            e.stopPropagation();
            setOpen(false);
          }}
        >
          Close Modal
        </Button>
      </Flex>
    </Card>
  </Box>
);

export default SpeakerModal;
