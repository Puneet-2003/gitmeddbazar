import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
    root: {
      display: 'flex',
      width:'100%',
      height:'100vh',
      fontFamily:'Bree Serif',
      justifyContent:'center',
      alignItems:'center',
      background:'#84817a'
    },

    box:{
      boxShadow:'20px 20px 50px #ffb142 inset', 
      width:600,
      height:'auto',
      background:'#fff',
      borderRadius:10,
      padding:10
    },
})