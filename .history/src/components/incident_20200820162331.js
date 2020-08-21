import React from "react"
import PropTypes from "prop-types"
import Tooltip from "@material-ui/core/Tooltip"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import { Badge } from "@material-ui/core/Badge"
import { MailIcon } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import { SevName } from "./sevName"
import Divider from "@material-ui/core/Divider"
import { ParticipantList } from "./participantList"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import {secondsToDhms} from "../utils/time"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  issueContainer: {
    display: "flex",
    marginBottom: "10px",
    border: "1px solid gray",
  },
  primaryAvatarContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  },
  avatar: {
    alignItems: "end",
  },
  issueBodyNoAvatar: {
    display: "flex",
    flexDirection: "column",
  },
  issueBodyWithAvatar: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10px",
  },
}))

const getPrimaryParticipant = participants => {
  return [participants.find(participant => participant?.role?.id === 1)]
}

// removes duplicates and filters out the commander
const getNonPrimaryParticipants = participants => {
  const set = new Set(participants);
  const pArray = [...set];
  return pArray.filter(participant => participant?.role?.id !== 1)
}

const createRowData = ({
  name = `Incident`,
  severity = "N/A",
  participants = [],
  incidentStatusId = "N/A",
  duration = 0,
  createdOn = 0,
  chatChannel = "N/A",
  ...otherProps
}) => ({
  name,
  severity,
  // this is ugly. fix it
  primaryParticipant: ParticipantList({
    participants: getPrimaryParticipant(participants),
  }),
  participants: ParticipantList({
    participants: getNonPrimaryParticipants(participants),
  }),
  incidentStatusId,
  secondsToDhms(duration),
  createdOn,
  chatChannel,
  otherProps,
})

const Incident = ({ incidentData }) => {
  const classes = useStyles()

  const rowData = createRowData(incidentData)
  console.log("jerb: ", rowData)
  return (
    <TableRow key={rowData.name}>
      <TableCell component="th" scope="row">
        {rowData.name}
      </TableCell>
      <TableCell align="right">{rowData.severity?.name || "N/A"}</TableCell>
      <TableCell align="right">{rowData.primaryParticipant}</TableCell>
      <TableCell align="right">{rowData.participants}</TableCell>
      <TableCell align="right">{rowData.incidentStatusId}</TableCell>
      <TableCell align="right">{rowData.duration}</TableCell>
      <TableCell align="right">{rowData.createdOn}</TableCell>
      <TableCell align="right">{rowData.chatChannel}</TableCell>
    </TableRow>
  )
}

Incident.propTypes = {}

export { Incident }

// <div className={classes.issueContainer}>
// {primaryParticipant && (
//   <div className={[classes.primaryAvatarContainer]}>
//     <Avatar
//       className={classes.avatar}
//       alt={primaryParticipant?.user?.realName}
//       src={primaryParticipant?.user?.avatarUrl}
//     />
//     Commander {}
//   </div>
// )}
// <div className={bodyClass}>
//   <div className={classes.topHalf}>
//     <h3>{incidentData.name}</h3>
//     <Divider component="span" />
//   </div>
//   <div className={classes.bottomHalf}>
//     <Tooltip
//       title={incidentData.severity?.description}
//       aria-label={incidentData.severity?.description}
//       placement="top"
//     >
//       <Typography>{incidentData.severity?.name}</Typography>
//     </Tooltip>

//     <div>{incidentData.severity?.statusId}</div>
//   </div>
// </div>
// </div>
