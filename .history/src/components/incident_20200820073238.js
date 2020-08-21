import React from "react"
import PropTypes from "prop-types"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import { Badge } from "@material-ui/core/Badge"
import { MailIcon } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

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

  },
  primaryAvatarContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid gray",
  },
  issueBodyNoAvatar: {
    display: "flex",
    flexDirection: "row",
  },
  issueBodyWithAvatar: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "10px",
  },
}))

const Incident = ({ incidentData }) => {
  const classes = useStyles()
  const getPrimaryParticipant = participants => {
    return participants.find(participant => participant?.role?.id === 1) || null
  }

  const primaryParticipant = getPrimaryParticipant(incidentData.participants)
  const bodyClass = primaryParticipant ? classes.issueBodyWithAvatar : classes.issueBodyNoAvatar;
  return (
    <div className={classes.issueContainer}>
      {primaryParticipant && (
        <div className={[classes.primaryAvatarContainer]}>
          <Avatar
            alt={primaryParticipant?.realName}
            src={primaryParticipant?.avatarUrl}
          />
          Incident Commander
        </div>
      )}
      <div className={bodyClass}>
        {incidentData.name}
        <Badge></Badge>
      </div>
    </div>
  )
}

Incident.propTypes = {}

export { Incident }
