import { Grid,Paper,Avatar,TextField, Button} from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { useHistory  } from 'react-router-dom';


function Login(){
   //admin login form style
  const btnStyle={marginTop:10}
  const  paperstyle={padding :20,height:'40vh',width:280,margin:"40px auto"}
  const  avatarstyle={backgroundColor:'blue'}
  const history = useHistory()

//   const [username, setProf] = useState({});


 const submitForm = (e) => {
    
       //after submit form redirect user
       e.preventDefault()
       history.push('/homeee'); 
}

return(
       <div>

        <form onSubmit={submitForm}>
              <Grid>
              <Paper elevation={10} style={paperstyle}>
              <Grid align='center'>
              <Avatar style={avatarstyle}>R</Avatar>
              <h2>Sign In</h2>
              </Grid>
              
              <TextField label='username' placeholder='Enter Username' fullWidth required />
              <TextField label='password'  placeholder='Enter Password' type='password' fullWidth required />
             
              <Button type='submit'  color='primary' variant="contained" style={btnStyle} fullWidth >SIGN IN</Button>
              </Paper>

                     </Grid> 
       </form>
       </div>
 
    )
  
}

export default withRouter(Login);