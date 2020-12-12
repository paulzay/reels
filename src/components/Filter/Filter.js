import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const networks = [
  'All',
    'Scripted',
  'Documentary',
    'Talk Show',
  'Reality',
];

export default function NetworkFilter({ changeFilter }) {
  const handleChange = useCallback(event => {
    changeFilter(event.target.value);
  }, [changeFilter]);

  return (
    <div>
      <select className="form-control" onChange={handleChange}>
        {networks.map(network => (
          <option key={network} value={network}>{network}</option>
        ))}
      </select>
    </div>
  );
}
NetworkFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
