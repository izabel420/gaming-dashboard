import React from "react";
import HeaderCard from "../Components/HeaderCard";

function Home() {
  return (
    <HeaderCard
      name="Isabelle Wenceslao"
      ign="@Izabel"
      pfp="https://i.pravatar.cc/200"
      links={["Discord: izabel", "Twitch: iisxchii", "Twitter: ii.izabel.ii"]}
    />
  );
}

export default Home;
