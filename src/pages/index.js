import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { IncidentList } from "../components/incidentsList";
import { getIncidents } from "../utils/services";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CardContainer } from "../components/cardContainer";
import Divider from "@material-ui/core/Divider";
import ListControls from "../components/listControls";
const theme = createMuiTheme({
	palette: {
		primary: { 500: "#467fcf" },
	},
});
const IndexPage = ({
	data: {
		dataJson: { incidents },
	},
}) => {
	const [localIncidents, setLocalIncidents] = useState(incidents);
	const handleSummarySearch = (filteredIncidents = [], searchEmpty = true) => {
    // console.log('post debounce summary search', filteredIncidents, searchEmpty)
		if (searchEmpty) return setLocalIncidents(incidents);
		setLocalIncidents(filteredIncidents);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout>
				<SEO title="Home" />
				<CardContainer incidents={incidents} />
				<Divider />
				<ListControls
					incidents={incidents}
					handleSummarySearch={handleSummarySearch}
				></ListControls>
				<Divider />
				<IncidentList incidents={localIncidents} />
			</Layout>
		</ThemeProvider>
	);
};
export const query = graphql`
	query incidentsQuery {
		dataJson {
			incidents {
				id
				severity {
					name
					id
          description
				}
				channelId
				participants {
					user {
						realName
						avatarUrl
						id
					}
					role {
						name
						id
					}
				}
				workspace {
					teamId
				}
				createdOn
				duration
				incidentStatusId
				channelPrivate
				channelName
        name
        summary
			}
		}
	}
`;
export default IndexPage;
