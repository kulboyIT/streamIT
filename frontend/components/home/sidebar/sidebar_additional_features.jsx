import React from 'react';

const SideBarAdditionalFeatures = () => {
  return (
    <div className="sidebar-additional-features">
      <h3>MORE FROM YOUTUBE</h3>
      <div id="items-yt-more">
        <a href="">
          <i className="additional-features-premium"></i>
          <span>YouTube Premium</span>
        </a>
        <a href="">
          <i className="additional-features-live"></i>
          <span>Live</span>
        </a>
      </div>
    </div>
  )
}

export default SideBarAdditionalFeatures;