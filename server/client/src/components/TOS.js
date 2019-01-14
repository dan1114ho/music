import React, { Component } from 'react';
import './TOS.css'

class TOS extends Component {
    render(){
        return(
            <span>
<div class="wrap-collabsible">
<input id="collapsible" class="toggle" type="checkbox"/>
 <label for="collapsible" class="lbl-toggle">I agree</label>
<div class="collapsible-content">
<div class="content-inner">
   <p className="terms-of-service">2.7 You agree to use one of the buttons saying "powered by AudioScrobbler"
    from the page located at http://www.last.fm/resources, such button linking 
    back to Last.fm. All links to Last.fm from pages with profile information for 
    a Last.fm User account should link to the appropriate Last.fm User page 
     (example: http://www.last.fm/user/username. All links to Last.fm from pages 
    displaying information on an artist, album or track should link to the appropriate
   catalogue page on Last.fm. For example: http://www.last.fm/music/artistname, 
     http://www.last.fm/music/artistname/albumname, http://www.last.fm/music/
     artistname/_/trackname.All button/link placements are subject to approval
     by Last.fm and Last.fm can suggest the use of a button/link of its choice for You 
     to use if Last.fm deems necessary. You agree to only give public access to pages 
     using Last.fm's web services that have been previously approved by Last.fm in writing. 
     </p>
    </div>
  </div>
</div> 
</span>
        )
    }
}

export default TOS