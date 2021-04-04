import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Paper, Grid, ButtonBase, Button, Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { PlayBetterVariant } from '../types/types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '2em 0',
  },
  paper: {
    margin: 'auto',
    maxWidth: 500,
    padding: '2em 2em',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
const formatPrice = (price: number): string => {
  return (price / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
const inStock = (item: PlayBetterVariant) => {
  return item.available ? 'In Stock' : 'Out of Stock';
};
const CustomCard: React.FC<any> = ({ vendor, item, updatedAt }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt='complex'
                src={item.featured_image.src}
                title='SkyTrak'
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  {item.name}
                </Typography>
                <Typography variant='body2' gutterBottom>
                  {'Link:  '}
                  <Link
                    color='primary'
                    href='https://www.playbetter.com/collections/golf-launch-monitor/products/skytrak-golf-simulator-launch-monitor'
                  >
                    PlayBetter
                  </Link>
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {`Item updated: ${new Date(updatedAt).toLocaleDateString()}`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={
                    item.available ? { color: '#66eb51' } : { color: '#ed6161' }
                  }
                  variant='h4'
                >
                  {inStock(item)}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>
                {formatPrice(item.price)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Card>
  );
};
export default CustomCard;
