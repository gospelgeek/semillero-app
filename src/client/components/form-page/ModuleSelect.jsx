import React from 'react';
import { Typography, Button, Link, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Card from '../card/Card';

const UnivalleURL =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Univalle.svg/1200px-Univalle.svg.png';
const SemilleroURL =
    'https://assets.isu.pub/document-structure/200910202646-e04ba63e6e23b4decece88b4f4166831/v1/99f251e63e0005ad70a25cdb1fb8e4bf.jpg';
const UnivallePolitics =
    'https://drive.google.com/file/d/1rP_wVpq9jBoj-aaajw1FI2jXH4cUhG_g/view?usp=sharing';

const useStyles = makeStyles(theme => ({
    image: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(4),
        height: '45px',
        width: '300px',
        fontSize: '14px !important',
        textOverflow: 'ellipsis',
        lineHeight: '1 !important',
        overflow: 'hidden',
        overflowWrap: 'break-word',
        wordWrap: 'break-word !important',
        wordBreak: 'break-word',
        whiteSpace: 'normal',
    },
    card: {
        width: '100%',
        minWidth: '100%',
        padding: theme.spacing(2),
        boxSizing: 'border-box',
    },
    container: {
        width: '100%',
        '& .MuiBox-root.css-133y4kk': {
            width: '100%',
            '& .MuiPaper-root.MuiBox-root.css-1vozbvv': {
                width: '100%'
            }
        }
    }
}));

export default ({
    setEditing,
    setShowForm,
    setIsShowModules,
    setCodeModule,
    moduleData
}) => {
    const classes = useStyles();
    const [buttons, setButtons] = React.useState([]);

    const handlerClick = (_code) => {
        setIsShowModules(false)
        setEditing(true);
        setShowForm(true);
        setCodeModule(_code)
    }

    React.useEffect(() => {
        setButtons(moduleData)
    }, [moduleData])

    return (
        <Box className={classes.container}>
            <Card className={classes.card}>
                <Box>
                    <img
                        width={80}
                        height={'auto'}
                        className={classes.image}
                        src={UnivalleURL}
                    />
                    <img
                        width={140}
                        height={'auto'}
                        className={classes.image}
                        src={SemilleroURL}
                    />
                </Box>
                <Typography variant="h1" paragraph align="center">
                    Selecione un modulo
                </Typography>
                <Grid container>
                    <Grid item md={8}>
                        <Box mt={2} display="flex" gap="20px" flexWrap="wrap" alignItems="center"  className={classes.container}>
                            {buttons?.length > 0 && buttons.map(button => (
                                <Button
                                    key={button.id}
                                    color="secondary"
                                    variant="outlined"
                                    className={classes.button}
                                    onClick={() => handlerClick(button.codigo)}
                                >
                                    <span>{button.nombre}</span>
                                </Button>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}