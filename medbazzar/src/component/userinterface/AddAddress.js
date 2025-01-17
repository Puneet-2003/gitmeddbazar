import Drawer from '@mui/material/Drawer';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { postData } from '../../services/FetchNodeServices';
import Swal from 'sweetalert2';

export default function AddAddress(props){

    const [address, setAddress]=useState('')
    const [landmark, setLandmark]=useState('')
    const [pincode, setPincode]=useState('')
    const [state, setState]=useState('')
    const [city, setCity]=useState('')

         const handleClose = () => { 
        props.setStatus(!props.status)
      }

    const handleSubmit=async()=>{

        var body={mobileno:props?.userData?.mobileno, address,landmark,pincode,state,city}
       var result= await postData("users/delivery_address",body)
       if(result.status){
        Swal.fire({
            position: "top",
            icon: "success",
            title: result.msg ,
            showConfirmButton: false,
            timer: 1500
          });
            props.setStatus(false)
          props.setPageRefresh(!props.pageRefresh)
        }
       else
       {
        Swal.fire({
            position: "top",
            icon: "Fail",
            title: result.msg ,
            showConfirmButton: false,
            timer: 1500
          });
          props.setPageRefresh(!props.pageRefresh)
       }
    }

    const drawerList=()=>{
        return(<div>
            <span style={{ display: 'flex', marginLeft:6, fontSize: 22, fontWeight: 'bold', fontFamily: 'Kanit',marginTop:20 }}>Add Address <div style={{marginLeft:'60%',cursor:'pointer'}} onClick={handleClose}><CloseIcon /></div></span>
            
            <div style={{ fontFamily: 'Kanit', fontSize: '1em', color: 'grey', marginLeft:6, display: 'flex',marginTop:12 }}>{props?.userData?.username} Enter your Address details</div>
            <div>
                <List  style={{display:'flex',justifyContent:'center',flexDirection:'column',textAlign:'center'}}>
                    <ListItem >
                        <ListItemText>
                            <TextField onChange={(e)=>setAddress(e.target.value)} label="Full Address" variant="standard" style={{width:'90%'}} />
                        </ListItemText>
                    </ListItem>
                   
                    <ListItem >
                        <ListItemText><TextField onChange={(e)=>setLandmark(e.target.value)} label="Landmark" variant="standard" style={{width:'90%'}}/></ListItemText>
                    </ListItem>

                    <ListItem >
                        <ListItemText><TextField onChange={(e)=>setPincode(e.target.value)} label="Pincode" variant="standard" style={{width:'90%'}}/></ListItemText>
                    </ListItem>

                    <ListItem >
                        <ListItemText>
                            <TextField onChange={(e)=>setState(e.target.value)} label="State" variant="standard"  style={{width:'41%',marginRight: '5%'}}/>
                            <TextField onChange={(e)=>setCity(e.target.value)} label="City" variant="standard" style={{width:'45%'}}/>
                        </ListItemText>
                    </ListItem>
            
                  
                    
                    <ListItem >
                        <ListItemText>
                        <Button onClick={handleSubmit} variant="contained"  style={{ fontSize: 12, background: '#006266', marginTop: 10, borderRadius: 20,width:'90%' }}>Save & Proceed</Button>
                        </ListItemText>
                    </ListItem>
                     
                </List>
            </div>
        </div>)
    }

    return(<div >
    <Drawer
        anchor={'right'}
        open={props.status}
        onClose={handleClose}
        
      >
        {drawerList()}
      </Drawer>
      </div>)
}