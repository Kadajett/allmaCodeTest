import { graphql } from "gatsby"

export const getIncidents = () => {
  const query = graphql`
    {
      incidents {
        id
        severity {
          name
        }
        channelId
        participants {
          user {
            realName
            avatarUrl
          }
        }
        workspace {
          teamId
        }
        createdOn
        duration
        incidentStatusId
      }
    }
  `

  debugger
  return query
}
