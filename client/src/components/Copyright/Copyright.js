import React, { Component } from 'react';
import logo2 from '../../assets/assets/logo/pics-logo.svg';
import panacloudlogo from '../../assets/assets/logo/panacloud-logo.png';
// import panacloudlogo from '../../';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/home.css';



class Copyright extends Component {
    state = {  }
    render() { 
        return ( 
          <div className="copyright">
          <p>© 2018 PIAIC. All rights reserved.</p>
          <div><img src={panacloudlogo} height="60px" /></div>
        </div>
         );
    }
}
 
export default Copyright;