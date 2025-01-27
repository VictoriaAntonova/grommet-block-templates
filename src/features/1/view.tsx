import { Box, Heading, Paragraph, Grid } from "grommet"

import React from "react"
import styled from "styled-components"

import { IFeature1 } from "."
import DEF_VALUE from "./defaults"

const UiImageBox = styled(Box)`
    aspect-ratio: 1;
`

const ImageBox = () => {
    return (
        <UiImageBox
            fill="horizontal"
            background={{ color: "light-3" }}
            round={"small"}
        ></UiImageBox>
    )
}

const GridBox = () => {
    return (
        <Box fill="horizontal">
            <ImageBox />
        </Box>
    )
}

const Feature1: React.FC<Partial<IFeature1>> = (props) => {
    const { value = DEF_VALUE } = props

    const { title = DEF_VALUE.title, subtitle = DEF_VALUE.subtitle } = value

    return (
        <Box align="center" fill="horizontal">
            <Box width={"xlarge"}>
                <Box direction="row" gap="xlarge" pad={{ vertical: "medium" }}>
                    <Box direction="column" justify="center" fill="horizontal">
                        <Paragraph
                            color="dark-3"
                            fill
                            size="small"
                            margin={{ top: "none", bottom: "medium" }}
                            style={{
                                textTransform: "uppercase",
                            }}
                        >
                            <strong>{subtitle}</strong>
                        </Paragraph>
                        <Heading
                            color="dark-1"
                            level={2}
                            size="medium"
                            margin={{ top: "none", bottom: "medium" }}
                        >
                            {title}
                        </Heading>
                        <Paragraph
                            color="dark-2"
                            margin={{ top: "xsmall", bottom: "xsmall" }}
                            fill
                            size="medium"
                            style={{
                                lineHeight: "30px",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Paragraph>
                    </Box>
                    <Grid
                        justify="center"
                        fill="horizontal"
                        rows={["1fr", "1fr"]}
                        columns={["1fr", "1fr"]}
                        gap="medium"
                    >
                        <GridBox />
                        <GridBox />
                        <GridBox />
                        <GridBox />
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Feature1
