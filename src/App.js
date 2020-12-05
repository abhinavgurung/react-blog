import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
  blogContainer: {
    paddintTop: theme.spacing(3),

  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author:{
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}))

function App() {

  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={ classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>Abhi Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="image.jpg"
                  title="iamge1"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="avatar.jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Abhinav gurung
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Dec 4, 2020
                    </Typography>
                  </Box>
                  
                </Box>
                <Box>
                    <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="image.jpg"
                  title="iamge1"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions  className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="avatar.jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Abhinav gurung
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Dec 4, 2020
                    </Typography>
                  </Box>
                </Box>
                 <Box>
                    <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="image.jpg"
                  title="iamge1"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions  className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="avatar.jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Abhinav gurung
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Dec 4, 2020
                    </Typography>
                  </Box>
                </Box>
                 <Box>
                    <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="image.jpg"
                  title="iamge1"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions  className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="avatar.jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Abhinav gurung
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Dec 4, 2020
                    </Typography>
                  </Box>
                </Box>
                 <Box>
                    <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
         <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
