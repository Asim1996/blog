import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import constants from "../constants";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function BlogListItem(props) {
    const classes = useStyles();
    // console.log(props);
    // const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.blog_data.title}
                    </Typography>
                    {/* <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography> */}
                    {/* <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography> */}
                    <Typography variant="body2" component="p">
                        {props.blog_data.body}
                        {/* <br />
            {'"a benevolent smile"'} */}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={{
                        pathname: `/${constants.BLOGS_CATEGORY[props.blog_data.category]}/${props.blog_data.id}`,
                        state: {
                            blog_data: props.blog_data
                           }
                    }}>
                        <Button size="small">Read More</Button>
                    </Link>

                </CardActions>
            </Card>
        </div>
    )
}