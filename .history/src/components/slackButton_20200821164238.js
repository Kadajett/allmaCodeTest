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
    /**
     * split by -incident-
     * combine output
     * split by -
     * filter all substrings with characters
     * combine & return
     */
    if (!channelName) return "Channel"
    if (channelName.length > 10) {
      let split = channelName.split("-incident-")
      let combined = split.join()
      split = combined.split("-")
      combined = split.filter(str => {
          if(str) {
            return str.match(/[a-z]/i)
          }
      }).join()
      return combined
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
          size="small"
          startIcon={<ForumIcon />}
        >
          {getShortenedChannelName(channelName)}
        </Button>
      )}
    </>
  )
}

SlackButton.propTypes = {}

export { SlackButton }
