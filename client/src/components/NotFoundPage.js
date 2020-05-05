import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const notfound = require('../images/notfound.gif');

const useStyles = makeStyles((theme) => ({
	rootStyle: {
		textAlign: 'center'
	},
	titleStyle: {
		letterSpacing: '1px',
		fontSize: '2rem',
		fontWeight: '600',
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem',
		},
	},
	divStyle: {
		margin: '1rem 0',
		textAlign: 'center'
	},
	imgStyle: {
		width: '50vw',
		[theme.breakpoints.down('xs')]: {
			width: '100vw',
		},
	},
	linkStyle: {
		color: 'white',
		letterSpacing: '1px',
		textDecoration: 'none',
		cursor: 'pointer',
		textAlign: 'center',

	},
	button: {
		background: '#4286f4',
		'&:hover':{
			background: '#4286f4',
		}
	},
	subtitle: {
		textAlign: 'center',
		margin : '0 auto'
	}
}));


function NotFoundPage(props) {
	const classes = useStyles();
	const pagetitle = props.location.pathname.replace(/[^\w\s]/gi, '');
	const email = "awesomeasim2596@gmail.com";
	return (
		<div>
			<Typography className={classes.titleStyle} variant="h4" component="h4" color="inherit">
				The 404 Not Found Page!
					</Typography>
			<div className={classes.divStyle}>
				<img src={notfound} alt="not-found animation" className={classes.imgStyle} />
			</div>
			<Typography component="p" color="inherit" className={classes.subtitle}>
				Interested in writing articles under the topic <b>{pagetitle}</b>
			</Typography>
			<Typography component="p" color="inherit" className={classes.subtitle}>
				Drop an email at <b>{email}</b>
			</Typography>
			<div className={classes.subtitle}> 
			<Button variant="contained" className = {classes.button}>
				<Link to="/" className={classes.linkStyle} >Go home</Link>
			</Button>
			</div>

		</div>
	)
}

export default withRouter(NotFoundPage);

