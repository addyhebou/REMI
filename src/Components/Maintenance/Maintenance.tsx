import React from 'react';
import {
  MaintenanceFrequencyMap,
  MaintenanceItem,
  maintenanceList,
} from '../../Constants/maintenanceList';
import '../../Styles/Maintenance.scss';

export default function Maintenance() {
  const sortFrequency = (a: MaintenanceItem, b: MaintenanceItem) =>
    a.frequency - b.frequency;
  return (
    <div>
      Maintenance
      <ul className="MaintenanceList">
        {maintenanceList.maintenanceList
          .sort(sortFrequency)
          .map((item, i, arr) => {
            const header =
              i == 0 || (i > 0 && item.frequency !== arr[i - 1].frequency)
                ? (MaintenanceFrequencyMap as any)[item.frequency]
                : '';
            return (
              <div>
                <h1>{header}</h1>
                <li>
                  <div className="MaintenanceItem">
                    <p>{item.category}</p>
                    <div className="Details">
                      <p>{item.name}</p>
                      <p>{(MaintenanceFrequencyMap as any)[item.frequency]}</p>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
