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

import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

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
  return participants.find(participant => participant?.role?.id === 1) || null
}

const createTableData = ({
  name = `Incident`,
  severity = "N/A",
  primaryParticipant = null,
  participants = [],
  statusId = "N/A",
  duration = 0,
  createdOn = 0,
  chatChannel = "N/A",
}) => {
  name,
    severity,
    getPrimaryParticipant(participants),
    participants,
    statusId,
    duration,
    createdOn,
    chatChannel
}

const Incident = ({ incidentData }) => {
  const classes = useStyles()

  const primaryParticipant = getPrimaryParticipant(incidentData.participants)
  const bodyClass = primaryParticipant
    ? classes.issueBodyWithAvatar
    : classes.issueBodyNoAvatar
  return (
    <div className={classes.issueContainer}>
      {primaryParticipant && (
        <div className={[classes.primaryAvatarContainer]}>
          <Avatar
            className={classes.avatar}
            alt={primaryParticipant?.user?.realName}
            src={primaryParticipant?.user?.avatarUrl}
          />
          Commander {}
        </div>
      )}
      <div className={bodyClass}>
        <div className={classes.topHalf}>
          <h3>{incidentData.name}</h3>
          <Divider component="span" />
        </div>
        <div className={classes.bottomHalf}>
          <Tooltip
            title={incidentData.severity?.description}
            aria-label={incidentData.severity?.description}
            placement="top"
          >
            <Typography>{incidentData.severity?.name}</Typography>
          </Tooltip>

          <div>{incidentData.severity?.statusId}</div>
        </div>
      </div>
    </div>
  )
}

Incident.propTypes = {}

export { Incident }
