import React from "react"
import PropTypes from "prop-types"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
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
  primaryAvatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // minWidth: ,
  }
}))

const Incident = ({ incidentData }) => {
  const classes = useStyles()
  const getPrimaryParticipant = participants => {
    return participants.find(participant => participant?.role?.id === 1) || null
  }

  const primaryParticipant = getPrimaryParticipant(incidentData.participants)
  return (
    <ListItem >
      {primaryParticipant?.user && (
        <div className={classes.primaryAvatarContainer}>
          <ListItemAvatar className={classes.primaryAvatarContainer}>
            <Avatar
              alt={primaryParticipant?.user?.name}
              src={primaryParticipant?.user?.avatarUrl}
            />
          </ListItemAvatar>
          Commander
        </div>
      )}

      <ListItemText primary="Brunch this weekend?" />
    </ListItem>
  )
}

Incident.propTypes = {}

export { Incident }
