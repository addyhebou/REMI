import React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import '../Styles/App.scss';
import '../Styles/NavbarIcons.scss';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';

export default function NavbarIcons() {
  return (
    <div className="NavbarIcons">
      <div className="navIcons">
        <Link to="/routine">
          <AccessAlarmIcon />
        </Link>
        <Link to="/shoppingList">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
}
