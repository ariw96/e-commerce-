import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
const products = [
    {id: 1, name: 'hat', descreption: 'clothing',price: '$50'},
    {id: 2, name: 'camera', descreption: 'electronic',price: '$100'},
];

const Products = () => {
    return (
    <main>
        <Grid container justify='center' spacing={4}></Grid>
        {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
                </Grid>
        ))}

    </main>
    )
    }
    export default Products;