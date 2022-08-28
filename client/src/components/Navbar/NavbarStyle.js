const classes = {
    appbar: {
      border: '0px solid white',
        borderRadius: '15px',
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        backgroundColor: 'white'
        // [theme.breakpoints.down('sm')]: {
        //   flexDirection: 'column',
        // },
      },
      heading: {
        color: "#100F0F",
        textDecoration: 'none',
        fontSize: '2.5rem',
        fontWeight: 800,
      },
      navItems: {
        fontSize: '1rem',
        color: '#2196f3'
      },
    toolbar: {
        marginLeft: '10%',
        display: 'flex',
        justifyContent: 'space-between',
        width: '300px',
        // border: '1px solid red'
        // [theme.breakpoints.down('sm')]: {
        //   width: 'auto',
        // },
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        alignItems: 'center',
        // border: '1px solid red'
        // [theme.breakpoints.down('sm')]: {
        //   width: 'auto',
        //   marginTop: 20,
        //   justifyContent: 'center',
        // },
      },
      logout: {
        marginLeft: '5px',
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
      },
      avatar: {
        backgroundColor: '#3AB0FF'
      }
}

export default classes;