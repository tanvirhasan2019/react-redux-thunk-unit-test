import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { increaseCounter, decreaseCounter } from '../redux/actions/counter.actions'
import { useDispatch, useSelector } from 'react-redux'

export default function MediaControlCard() {
    const dispatch = useDispatch()
    const { count } = useSelector(state => state.count)
    return (
        <Card elevation={6} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNVnz-n50kAn_jv-atI_MV9NG2j0aiLrXoA&usqp=CAU"
                alt="green iguana"
            />
            <CardContent>
                <Typography align='center' gutterBottom variant="h5" component="div">
                    Number :{count}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Fab onClick={() => dispatch(increaseCounter())} color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Fab onClick={() => dispatch(decreaseCounter())} color="secondary" aria-label="add">
                        <RemoveIcon />
                    </Fab>
                </Grid>
            </CardActions>
        </Card>
    );
}
