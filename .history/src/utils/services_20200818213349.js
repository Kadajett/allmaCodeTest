import { graphql } from "gatsby"

export const getIncidents = () => {
  return graphql`
    query incidentsQuery {
      dataJson {
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
    }
  `
}
