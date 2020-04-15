import React, { useState } from "react";
import { Flex } from "@rebass/grid";
import { Button } from "rebass";
import Modal from "react-modal";
import SpeakerModal from "./SpeakerModal";

const truncate = content =>
  content
    .split(" ")
    .slice(0, 25)
    .join(" ") + "...";

function Speaker({ Image, name, talk, twitter, company, bio }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      onClick={x => setOpen(true)}
      style={{
        width: 480,
        minWidth: 300,
        minHeight: 280,
        margin: "1rem",
        backgroundColor: "#fff",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        boxShadow: "6px 9px 3px rgba(0 ,0,0,0.4)"
      }}
    >
      <Modal
        isOpen={isOpen}
        style={{
          overlay: { background: "rgba(51, 51, 51, 0.71)", overflow: "scroll" },
          content: {
            background: "none",
            border: "none",
            margin: 0,
            padding: 0,
            overflow: "visible"
          }
        }}
        ariaHideApp={false}
      >
        <SpeakerModal
          name={name}
          talk={talk}
          setOpen={setOpen}
          twitter={twitter}
          Image={Image}
          company={company}
          bio={bio}
        />
      </Modal>

      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={{ padding: "0.5rem", flexWrap: "wrap" }}
      >
        <div style={{ margin: "0.5rem", flex: 2 }}>
          <div style={{ width: "100%" }}>
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

            <h3 style={{ textAlign: "center" }}>{name}</h3>
            <a
              href={`https://twitter.com/${twitter}`}
              title={`Go to ${name}'s Twitter`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>

        <div style={{ width: "250px", margin: "0.5rem" }}>
          <h3 style={{ fontSize: "1rem" }}>{talk.title}</h3>

          {company && <h4 style={{ fontSize: ".9rem" }}>Company: {company}</h4>}
          <p style={{ fontSize: "1rem", height: "200px" }}>
            {truncate(talk.description)}
          </p>
          <Button
            onClick={e => {
              setOpen(true);
            }}
          >
            Read more
          </Button>
        </div>
      </Flex>
    </div>
  );
}
export default Speaker;
