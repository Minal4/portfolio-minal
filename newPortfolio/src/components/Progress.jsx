import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

export default function Progress() {
  return (
    <div className="stats">
      <ul>
        <li>
          <h3>Photoshop</h3>
          <ProgressBar className='progressbar' bgColor="#00f5ff" completed={95} />
        </li>
        <li>
          <h3>CSS3</h3>
          <ProgressBar className='progressbar' bgColor="#264de4" completed={95} />
        </li>
        <li>
          <h3>HTML5</h3>
          <ProgressBar className='progressbar' bgColor="#00f5ff" completed={95} />
        </li>
        <li>
          <h3>JQUERY</h3>
          <ProgressBar className='progressbar' bgColor="#00f5ff" completed={90} />
        </li>
        <li>
          <h3>SASS</h3>
          <ProgressBar className='progressbar' bgColor="#c69" completed={95} />
        </li>
        <li>
          <h3>Bootstrap</h3>
          <ProgressBar className='progressbar' bgColor="#563d7c" completed={95} />
        </li>
        <li>
          <h3>Wordpress</h3>
          <ProgressBar className='progressbar' bgColor="#21759b" completed={90} />
        </li>
        <li>
          <h3>Elementor</h3>
          <ProgressBar className='progressbar' bgColor="#950841" completed={90} />
        </li>
        <li>
          <h3>React</h3>
          <ProgressBar className='progressbar' bgColor="#61dbfb" completed={75} />
        </li>
      </ul>
    </div>
  );
};
