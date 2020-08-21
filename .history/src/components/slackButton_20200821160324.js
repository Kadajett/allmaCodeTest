import React from "react"
import PropTypes from "prop-types"
import ForumIcon from "@material-ui/icons/Forum"
import Button from "@material-ui/core/Button"

const SlackButton = ({ channelName, channelId }) => {
  const getSlackLink = channelid => {
    return `https://slack.com/app_redirect?channel=${channelId}`
  }
  return (
    <>
      {channelId && (
        <Button
          variant="outlined"
          color="secondary"
          target="_blank"
          href={getSlackLink(channelId)}
          rel="noopener noreferrer"
        >
          <ForumIcon /> Channel
        </Button>
      )}
    </>
  )
}

SlackButton.propTypes = {}

export { SlackButton }
