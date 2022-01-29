const handleSubmit=(e)=>{
    e.preventDefault();
    setIsPending(true);
    fetch('https://e18c-197-237-243-150.ngrok.io/addBooking',{
        method:'POST',
   
        headers:{
            Accept: 'application/json',
           'content-Type':'application/json'
       },
        
    }).then(()=>{
      setIsPending(false)
      Alert.alert(
       "Booking Status",
       "SUCCESSFUL!!",
       [
           { text: "OK" }
       ]
     );
    }).catch(err => console.error(err));
}