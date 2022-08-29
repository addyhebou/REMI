import React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HomeIcon from '@mui/icons-material/Home';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import MoneyIcon from '@mui/icons-material/Money';
import '../Styles/App.scss';
import '../Styles/NavbarIcons.scss';
import { Link } from 'react-router-dom';

export default function NavbarIcons() {
  return (
    <div className="NavbarIcons">
      <div class="navIcons"></div>
      <div class="navTitle">
        <h1>R.E.M.I</h1>
      </div>
      <div class="navIcons">
        <Link exact to="/">
          <div>
            <HomeIcon />
          </div>
        </Link>
        <Link to="/weeklyList">
          <div>
            <FactCheckIcon />
          </div>
        </Link>
        <Link to="/routine">
          <div>
            <AccessAlarmIcon />
          </div>
        </Link>
        <Link to="/productivity">
          <div>
            <PedalBikeIcon />
          </div>
        </Link>
        <Link to="/projects">
          <div>
            <MoneyIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}
