import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  }
});

function User({ data }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <img src={data.picture} alt="user picture" />
          <Typography>{data.firstName + " " + data.lastName}</Typography>
          <Typography>{data.email}</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default User;
