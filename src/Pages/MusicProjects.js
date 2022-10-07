import React from 'react';
import NavbarIcons from '../Components/NavbarIcons';
const lib = require('../Constants/musicProjects');

export default function MusicProjects() {
  const projects = lib.musicProjects;
  return (
    <div>
      <NavbarIcons />
      <h1>Road to 100+ Projects</h1>
      <ol>
        {Object.keys(projects).map((artist) => {
          return (
            <div>
              <strong>{artist}</strong>
              {projects[artist].map((song) => {
                return <li>{song}</li>;
              })}
            </div>
          );
        })}
      </ol>
    </div>
  );
}
