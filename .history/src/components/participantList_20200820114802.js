import React from "react"
import PropTypes from "prop-types"
import Avatar from "@material-ui/core/Avatar"
import Tooltip from "@material-ui/core/Tooltip"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  participantsContainer: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  participantAvatar: {
    marginLeft: "-13px",
    boxShadow: "black 1px 2px 7px"
  }
}))

const ParticipantList = ({ participants = [] }) => {
  const classes = useStyles()
  
  return (
    <div className={classes.participantsContainer}>
      {participants.map(participant => (
        <Tooltip arrow title={participant?.user?.realName}>
          <Avatar className={classes.participantAvatar} alt={participant?.user?.realName} src={participant?.user?.avatarUrl} />
        </Tooltip>
      ))}
    </div>
  )
}

ParticipantList.propTypes = {}

export { ParticipantList }
