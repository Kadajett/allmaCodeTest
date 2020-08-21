import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import moment from "moment"
import {secondsToDhms} from "../utils/time"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "15px",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  cardRoot: {
    minWidth: "275px",
  },
}))
const CardContainer = ({ incidents }) => {
  const classes = useStyles()
  const getTotalNumberOfIncidentsOpen = (incidents = []) => {
    return incidents.filter((incident) => incident.incidentStatusId !== "RESOLVED").length
  }
  const getNumberOfIncidentsPerDays = (incidents = []) => {
    // moment().isAfter(moment().subtract(30, 'days'))
    return incidents.filter(incident => {
      return moment(incident.createdOn)
        .local()
        .isAfter(moment().local().subtract(30, "days"))
    }).length
  }
  const getAverageResolutionTime = (incidents = []) => {
    const beforeAverage = incidents
    .filter(incident => (incident.incidentStatusId === "RESOLVED" && !isNaN(incident.duration)))
    .reduce((accum, current) => accum + current.duration, 0)
    debugger;
    return (
        secondsToDhms(beforeAverage / incidents.length)
    )
  }
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Open Incidents
                </Typography>
                <Divider />
                <Typography>{getTotalNumberOfIncidentsOpen(incidents)}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Incidents per 30 Days
                </Typography>
                <Divider />
                <Typography>
                  {getNumberOfIncidentsPerDays(incidents)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Average Resolution Time
                </Typography>
                <Divider />
                <Typography>{getAverageResolutionTime(incidents)}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

CardContainer.propTypes = {}

export { CardContainer }
