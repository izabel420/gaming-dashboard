import React from "react";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="team-name">Synthwave Gamers</h2>

        <img
          src="https://preview.redd.it/who-is-the-doll-from-this-meme-v0-at9f8t2c217b1.jpg?width=640&crop=smart&auto=webp&s=2cbf6318ccacc086dcc6cfe47bc35d52aa7797bd"
          alt="Profile"
          className="profile-pic"
        />

        <p className="real-name">Isabelle Wenceslao</p>
        <h3 className="ign">Main IGN: @Izabel</h3>
        <p className="quote">✨ Baby, i'm the real punk rock ✨</p>
      </aside>

      <main className="main-content">
        {/* Dashboard */}
        <section className="gaming-dashboard">
          <Card type="title-card" title="Dashboard" />
        </section>

        {/* Lists */}
        <section className="gaming-dashboard-list">
          <Card
            type="list-card"
            title="Milestones"
            items={[
              "Top 500 in osu (366pp)",
              "Marvel Rivals Silver III",
              "AR 50 in Genshin Impact",
            ]}
          />

          <Card
            type="list-card"
            title={
              <span>
                Special
                <br />
                Mention
              </span>
            }
            items={[
              "Elden Lord",
              "Cities Founded in Civ6: 7",
              "Street Cred: 42 in CyberPunk",
            ]}
          />
        </section>

        {/* Games Title */}
        <section className="milestone-title">
          <Card type="title-card" title="Other Games" />
        </section>

        {/* Milestone Cards */}
        <section className="milestones">
          <Card type="milestone-card" title="Marvel's Spider-man">
            <p>Released: 2018</p>
            <p>Progress: Finished</p>
          </Card>

          <Card type="milestone-card" title="Detroit Become Human">
            <p>Released: 2018</p>
            <p>Progress: Finished</p>
          </Card>

          <Card type="milestone-card" title="Hitman">
            <p>Released: 2019</p>
            <p>Progress: Finished</p>
          </Card>

          <Card type="milestone-card" title="Tony Hawk's Pro-skater">
            <p>Released: 2001</p>
            <p>Progress: Level 19</p>
          </Card>

          <Card type="milestone-card" title="Grand Theft Auto">
            <p>Released: 2013</p>
            <p>Progress: Finished</p>
          </Card>

          <Card type="milestone-card" title="Sims 4">
            <p>Released: 2014</p>
            <p>Status: Rich</p>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default App;
