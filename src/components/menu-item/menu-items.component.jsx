import React from 'react';
import './menu-items.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  // Note that the destructured items (i.e. {title, imageUrl, size}) are all props.
  
  <>
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{
          // backgroundImage: {styles}
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  </>
);

export default MenuItem;