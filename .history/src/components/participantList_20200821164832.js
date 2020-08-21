import React from "react"
import PropTypes from "prop-types"
import Avatar from "@material-ui/core/Avatar"
import Tooltip from "@material-ui/core/Tooltip"
import { makeStyles } from "@material-ui/core/styles"
import AvatarGroup from "@material-ui/lab/AvatarGroup"
const useStyles = makeStyles(theme => ({
  participantsContainer: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  participantAvatar: {
      '& $img': {
          marginBottom: '0px'
      }
  },
}))

const ParticipantList = ({ participants = [] }) => {
  const classes = useStyles()
  return (
    <div className={classes.participantsContainer}>
      <AvatarGroup max={4}>
        {participants.length > 0 && participants.map(participant => (
          <Tooltip arrow title={participant?.user?.realName}>
            <Avatar
              className={classes.participantAvatar}
              alt={participant?.user?.realName}
              src={participant?.user?.avatarUrl}
            />
          </Tooltip>
        ))}
      </AvatarGroup>
    </div>
  )
}

ParticipantList.propTypes = {}

export { ParticipantList }
