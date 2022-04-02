import { Avatar, Grid } from '@material-ui/core';
import React from 'react';

const RowAvatar=({name})=>{
    return(
        <Grid container alignItems="center">
            <Grid item sm={3}>
                  <Avatar style={{backgroundColor:"#1434A4"}}>{name[0]}</Avatar>
                  </Grid>
            <Grid item>
               {name}
              
                </Grid>
</Grid>
    )
}
export default RowAvatar;