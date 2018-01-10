import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';

import AddChannel from './AddChannel';

const ChannelsList = ({ data: {loading, error, channels }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="channelsList">
      <AddChannel />
      { channels.map( ch => <div key={ch.id} className="channel">{ch.name}</div> ) }
    </div>
  );
};

export const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;

// export default graphql(channelsListQuery)(ChannelsList);
// component will make update of added element on several client
// i.e if you add element in one client (one window), element will show in other clients (other windows) after 5 secs
export default graphql(channelsListQuery, {
  options: { pollInterval: 5000 },
})(ChannelsList);