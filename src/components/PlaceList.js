import React from 'react';
import './PlaceList.css';
import Card from '../UI/Card';
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
    if(props.items.length === 0) {
        return (<div className="place-list center">
          <Card>
              <h2>No places found. Create one?</h2>
              <button>Add place</button>
          </Card>
        </div>
        );
    }
    return <ul className="place-list">
        {props.items.map(place => (<PlaceItem key={place.id}
                                             id={place.id}
                                             image={place.imageURL}
                                             title={place.title}
                                             description={place.description}
                                              address={place.address}
                                             creatorId={place.creator}
                                             coordinates={place.location} />))}
    </ul>
};
export default PlaceList;
