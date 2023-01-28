import React, { Component } from 'react';
import handleViewport from 'react-in-viewport';
import "./Video.css";
import "../MainCSS.css";
import "../MainJS";


class Video extends Component {
    render() {
      const { enterCount, leaveCount } = this.props;
      return (
        <div className="Insta">
             <div className="container">
                 <div className={enterCount>0?"video card show" : "video card"}>
                     <iframe type="text/html" width="100%" height="100%" title="player" id="videoplayer" 
                        src={enterCount>leaveCount? "https://www.youtube.com/embed/zaT15m1dfmY?&loop=1&controls=0&autoplay=1&play=1" :
                                                "https://www.youtube.com/embed/zaT15m1dfmY?&loop=1&controls=0&autoplay=0&play=0"
                        } 
                        allow='autoplay'
                        frameBorder="0" ></iframe>
                </div>   
            </div>
        </div>
      );
    }
  }
  const MySection = handleViewport(Video, { rootMargin: '-145px' });
  
  export default MySection;
// const Video = () => {
//     return (
//         <div className="Insta">
//             <div className="container">
//                 <div className="video">
//                     <iframe type="text/html" width="100%" height="100%" title="player" id="videoplayer" 
//                     src="https://www.youtube.com/embed/zaT15m1dfmY?&loop=1&controls=0&autoplay=1"
//                     frameBorder="0"></iframe>
//                 </div>   
//              </div>
//         </div>
//     );
// }

// export default Video;
