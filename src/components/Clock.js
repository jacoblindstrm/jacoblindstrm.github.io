import React from 'react';
import format from 'date-fns/format';

function Clock({ time }) {
  return (
    <ul className="time">
      <li>
        {format(new Date(), 'MMMM Y') }
      </li>
      <li>
        Nyköping
      </li>
      <li>
        {format(time, 'HH:mm:ss')}
      </li>
    </ul>
  );
}

export default Clock;