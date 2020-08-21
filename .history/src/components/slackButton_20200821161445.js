import React from "react"
import PropTypes from "prop-types"
import ForumIcon from "@material-ui/icons/Forum"
import Button from "@material-ui/core/Button"

const SlackButton = ({ channelName, channelId, teamId }) => {
  const canShowButton = channelId && teamId
  const getSlackLink = channelid => {
    return `slack://channel?team=${teamId}&id=${channelId}`
  }

  const getShortenedChannelName = channelName => {
    if (!channelName) return "Channel"
    if (channelName.length > 6) {
      return channelName.slice(0, 6) + "..."
    }
    return channelName
  }
  return (
    <>
      {canShowButton && (
        <Button
          variant="outlined"
          color="secondary"
          target="_blank"
          href={getSlackLink(channelId)}
          rel="noopener noreferrer"
        >
          <ForumIcon />
        </Button>
      )}
    </>
  )
}

SlackButton.propTypes = {}

export { SlackButton }
