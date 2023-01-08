import React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import '../Styles/App.scss';
import '../Styles/NavbarIcons.scss';
import { Brush, Home, ShoppingCart } from '@material-ui/icons';
import { DryCleaning } from '@mui/icons-material';

export default function NavbarIcons(props: {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { setPage } = props;
  return (
    <div className="NavbarIcons">
      <div className="navIcons">
        <div onClick={() => setPage('home')}>
          <Home />
        </div>
        <div onClick={() => setPage('routine')}>
          <AccessAlarmIcon />
        </div>
        <div onClick={() => setPage('shopping')}>
          <ShoppingCart />
        </div>
        <div onClick={() => setPage('craft')}>
          <Brush />
        </div>
        <div onClick={() => setPage('maintenance')}>
          <DryCleaning />
        </div>
      </div>
    </div>
  );
}
