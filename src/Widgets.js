import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('The upside to calling it quits', '1d ago  1,432 readers')}
      {newsArticle('CoronaVirus: India updates', 'Top news-996')}
      {newsArticle('Second wave? India Inc is ready', '2d ago 3,886 readers')}
      {newsArticle('CoronaVirus: India updates', 'Top news-996')}

      {newsArticle('Ind-Eng Series', 'India won the series with the last win')}
    </div>
  );
}

export default Widgets;
