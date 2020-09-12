import React from 'react';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import {  Grid, FormControl, Input, FormHelperText, OutlinedInput ,Select } from '@material-ui/core';
import Home from './Home';
import Map from './Map';
import { getLatitude, getLongitude, latitudeKeys, longitudeKeys } from 'geolib';
import {  getPreciseDistance } from 'geolib';
import { Alert } from '@material-ui/lab';











 export default class GeoLocation extends React.Component{
    constructor(props){
        super(props)
        this.state={
          
            latitude:false,
            longitude:false,
            
open:true,
copySuccess: '',

updatelongitude:localStorage.getItem ('longitude'),
updatelatitude:localStorage.getItem ('latitude'),

latitudee:localStorage.getItem('latitude'),
longitudee:localStorage.getItem('longitude'),
        };
    
        this.getLocation=this.getLocation.bind(this);
        this.getCoordinates=this.getCoordinates.bind(this);

        
        }

        copyToClipboard = (e) => {
          this.textArea.select();
          document.execCommand('copy');
          // This is just personal preference.
          // I prefer to not show the whole text area selected.
          e.target.focus();
          this.setState({ copySuccess: 'Copied Successfully !' });
        };
    


  editlatitude=()=>{
    this.setState({
      latitude:true,
     
    })
}


onChangeUpdatelatitude=(e)=>{
    this.setState({
      updatelatitude:e.target.value,
      latitude:e.target.value,
    
      

    })
}

editlatitudeCancel=()=>{
    this.setState({
        updatelatitude:localStorage.getItem('latitude'),
        latitude:localStorage.getItem('latitude'),
      
    })
}

editlatitudeUpdate=()=>{
    this.setState({
      latitudee:this.state.updatelatitude,

     
    })
    localStorage.setItem('latitude', this.state.updatelatitude)
}

editlongitude=()=>{
  this.setState({
    longitude:true
      
    
  })
}

onChangeUpdatelongitude=(e)=>{
  this.setState({
    updatelongitude:e.target.value,
    longitude:e.target.value
  })
}

editlongitudeCancel=()=>{
  this.setState({
      updatelongitude:localStorage.getItem('longitude'),
      longitude:localStorage.getItem('longitude'),
     
  })
}

editlongitudeUpdate=()=>{
  this.setState({
    longitudee:this.state.updatelongitude,

   
  })
  localStorage.setItem('longitude', this.state.updatelongitude)
}













     handleClose = () => {
          this.setState({open:false});
        };
         getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(this.getCoordinates ,this.handleLocationError);
            } else {
              alert("Geolocation is not supported by this browser.");
            }
          }
          getCoordinates(position){
              this.setState({
              latitude:position.coords.latitude,
              longitude:position.coords.longitude,
             open:false
              })
              
          }
handleLocationError(error){
           switch(error.code) {
              case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
              case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
              case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
              case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
                default:
                alert("An unknown error occurred.")
               
           }
          }
          getPreciseDistance = (props) => {
            var Distance = getPreciseDistance(
              { latitude:`${this.state.latitude}`, longitude:`${this.state.longitude}` },
              { latitude: 9.66845, longitude: 80.00742 }
            );
            alert(`Distance-${Distance} Meter\nor\n Distance-${Distance / 1000} KM`);
         
         }



        render(){
         
                
            return(
                <div>
          <div>


          <Button
                
                onClick={() => {
                  this.getPreciseDistance();
                }}>
                <h1>Get Precise Distance</h1>
              </Button>
        {
         /* Logical shortcut for only displaying the 
            button if the copy command exists */
         document.queryCommandSupported('copy') &&
          <div>
            <Button variant="contained" color="primary"
            onClick={this.copyToClipboard}>Copy </Button> 
           <Alert variant="filled">{this.state.copySuccess}</Alert> 
          </div>
        }
        <form>
          <textarea hidden
            ref={(textarea) => this.textArea = textarea}
            value={`${this.state.latitude},${this.state.longitude}`}
          />
        </form>
      </div>



<div  style={{display:"flex",marginTop:"1%"}}>


                              <FormControl variant="outlined" >
                                  <InputLabel htmlFor="Price">latitude</InputLabel>
                                  <OutlinedInput
                                  endAdornment={
                                    <InputAdornment position="end">
                                @
                                    </InputAdornment>}
                                    type="number"
                                      id="Price"
                                      
                                      value={this.state.latitude}
                                      onChange={this.onChangeUpdatelatitude}
                                      label="Price"
                                  />



{this.state.latitude &&(
                            <Button  onClick={this.editlatitudeUpdate} color="primary" >
                              Update
                            </Button>
            )}
                              </FormControl>


                    
                                             <FormControl variant="outlined" style={{marginLeft:"10%"}}>
                                                 <InputLabel htmlFor="longitudee">longitude</InputLabel>
                                                 <OutlinedInput
                                                 endAdornment={
                                                   <InputAdornment position="end">
                                               @
                                                   </InputAdornment>}
                                                   type="number"
                                                     id="longitude"
                                                     value={this.state.longitude}
                                                     onChange={this.onChangeUpdatelongitude}
                                                     label="longitude"
                                                     
                                                 />

                                            {this.state.longitude &&(
                                           <Button  onClick={this.editlongitudeUpdate} color="primary" >
                                             Update
                                           </Button>
                                           
  )}
  
                                             </FormControl>
                                            
                      
                                 <Button onClick={this.getLocation }  color="primary" >
            Reset
          </Button>  
     
          </div>
          
          {this.state.longitude &&(
     
      <div style={{magin:'50px'}}>
      
      <Map
   google={this.props.google}
   center={{lat:7.256499600000001, lng:80.7214417}}
   height='300px'
   width='500px'
   zoom={13}
  />

  </div>
  
      )}
          
       
      <Dialog
        open={this.state.open}
      
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location.please agree this message
          </DialogContentText>
        </DialogContent>
        <DialogActions>
      
          <Button onClick={this.getLocation }  color="primary" autoFocus>
            Agree
          </Button>
         
        </DialogActions>
      </Dialog>
   
                
                </div>
            )
        }
    }



