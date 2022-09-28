import React from 'react';
import format from 'date-fns/format';

function Clock({ time }) {
  return (
    <p className="clock">
      {format(time, 'HH:mm:ss')}
    </p>
  );
}

export default Clock;