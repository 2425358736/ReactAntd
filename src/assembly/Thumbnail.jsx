import React from 'react';
import Thumbnail from './customComponents/Thumbnail';

class ThumbnailExhibition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: [
        'http://y2.ifengimg.com/a282fca64216bddb/2013/0927/re_5244d39b0d5db.jpg',
        'http://d.5857.com/njhb_140411/003.jpg',
        'http://img1.3lian.com/2015/a1/129/d/237.jpg',
      ],
    };
  }
  render() {
    return (
      <div>
        <Thumbnail url={this.state.url} />
      </div>
    );
  }
}
export default ThumbnailExhibition;
