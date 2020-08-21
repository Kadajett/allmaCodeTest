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
import {SevName} from "./sevName";

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
    borderRight: "1px solid gray",
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

const Incident = ({ incidentData }) => {
  const classes = useStyles()
  const getPrimaryParticipant = participants => {
    return participants.find(participant => participant?.role?.id === 1) || null
  }

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
        <h3>{incidentData.name}</h3>
        <Tooltip title={incidentData.severity?.description} aria-label={incidentData.severity?.description}>
          <SevName name={incidentData.severity?.name}></SevName>
        </Tooltip>

        <div>{incidentData.severity?.statusId}</div>
      </div>
    </div>
  )
}

Incident.propTypes = {}

export { Incident }
