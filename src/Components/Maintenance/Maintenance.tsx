import React from 'react';
import { maintenanceList } from '../../Constants/maintenanceList';
import '../../Styles/Maintenance.scss';

export default function Maintenance() {
  return (
    <div>
      Maintenance
      <ul className="MaintenanceList">
        {maintenanceList.maintenanceList.map((item) => (
          <li>
            <div className="MaintenanceItem">
              <p>{item.category}</p>
              <div className="Details">
                <p>{item.name}</p>
                <p>{item.frequency}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
