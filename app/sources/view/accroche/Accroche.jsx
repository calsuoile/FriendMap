import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 600,
  },
  title: {
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
  },
  accroche: {
    display: "flex",
    justifyContent: "center",
  },
  p: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  }
});

export default function Accroche() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          World of the Day
        </Typography>
        <Typography className={classes.accroche} variant="h5" component="h2">
          Travel{bull}Around{bull}the{bull}World{bull}and{bull}find{bull}your{bull}Friends
        </Typography>
        <Typography className={classes.p} variant="body2" component="p">
          Vous voyagez, visitez un pays, une ville, mais vous ne savez plus lequels de vos amis s'y trouvent. Recherchez, trouvez.
        </Typography>
      </CardContent>
    </Card>
  );
}