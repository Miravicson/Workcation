import React from "react";
import DestinationCard from './DestinationCard';

export default function DestinationList({ data }) {
  return (
    <React.Fragment>
      {data.map((destination) => (
        <DestinationCard destination={destination} key={destination.city}/>
      ))}
    </React.Fragment>
  );
}
