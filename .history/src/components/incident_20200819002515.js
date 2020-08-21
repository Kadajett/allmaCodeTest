import React from "react"
import PropTypes from "prop-types"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
const Incident = ({ incidentData }) => {
    console.log(incidentData)
  const getPrimaryParticipant = participants =>
    participants.find(participant => participant.role.id === 1)

  const { user: primaryParticipant, role } = getPrimaryParticipant(
    incidentData.participants
  )
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt={primaryParticipant.name}
          src={primaryParticipant.avatarUrl}
        />
      </ListItemAvatar>
      <ListItemText primary="Brunch this weekend?" />
    </ListItem>
  )
}

Incident.propTypes = {}

export { Incident }