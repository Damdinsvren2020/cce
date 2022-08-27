import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Social = (props) => {
  return (
    <div>
      <iframe
        src={
          "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcce.mongolia%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        }
        width="100%"
        height="500px"
        style={{
          boxShadow: "1px 1px 4px 0px rgba(0,0,0,0.35)",
          overflow: "hidden",
        }}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <div style={{ boxShadow: "1px 1px 4px 0px rgba(0,0,0,0.35)" }}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cce_mongolia"
          options={{ height: 350 }}
        />
      </div>
    </div>
  );
};

export default Social;
