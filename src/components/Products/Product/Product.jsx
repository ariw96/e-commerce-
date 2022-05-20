import React from 'react'
import {Card,CardContent,Typography,Grid,CardActions,CardMedia, IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles'


 const Product = ({product}) => {
     const classes = useStyles();
  return (
<Card className={classes.root}>
    <CardMedia className={classes.media} image="https://source.unsplash.com/random" title={product.name} />
     <CardContent>
       <div className={classes.CardContent}>
           <Typography variant="h5" gutterBottom>
                {product.name}
            </Typography>
           <Typography variant="h5">
                {product.price}
            </Typography>
            </div>
           <Typography variant="h2" color='textSecondary'>
                {product.descreption}
            </Typography>
     </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="add to shopping cart"></IconButton>
            <AddShoppingCart /> 
        </CardActions>
</Card>
       )
    }
    export default Product
       
