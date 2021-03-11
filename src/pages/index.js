import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Em, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="#00c1fe">
			<Section background="#284b56">
				<Box
					display="flex"
					padding="12px 0"
					justify-content="space-between"
					align-items="center"
					flex-direction="row"
					md-flex-direction="column"
				>
					<Text
						margin="0"
						md-margin="0px 0 20px 0"
						text-align="left"
						font="--lead"
						color="#fdf9f9"
					>
						Crazy techies
					</Text>
				</Box>
			</Section>
			<Text
				margin="0px 0 24px 0"
				text-align="center"
				font="--headline2"
				md-font="--headline3"
				color="#fcf8f8"
				text-decoration-line="underline"
				text-shadow="8px 4px 0 #471838"
				background="#06baf3"
				box-shadow="6px 0 0 0 transparent"
				hover-transition="--transformInOut"
				hover-transform="scaleX(-1)"
				text-overflow="ellipsis"
				hyphens="auto"
				white-space="nowrap"
				text-indent="4"
				overflow-wrap="break-word"
				word-break="break-word"
				position="sticky"
				bottom="6px"
				left="6px"
				top="6px"
				right="6px"
				mix-blend-mode="screen"
				cursor="crosshair"
				opacity="6"
			>
				Crazy Techies
			</Text>
			<Section
				text-align="center"
				background-color="--primary"
				color="--light"
				padding="100px 0"
				sm-padding="40px 0"
				background="#09b9f0"
			>
				<Text
					as="h5"
					font="--lead"
					margin="10px 0 0 0"
					text-transform="uppercase"
					letter-spacing="5px"
				/>
				<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
					About me
				</Text>
				<Text as="p" font="--lead" margin="40px 0 20px 0">
					<Strong>
						<Em>
							We are crazy Techies. We are an Instagram page and a Tech Youtube Channel
						</Em>
					</Strong>
				</Text>
			</Section>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0">
			<SocialMedia youtube="https://www.youtube.com/channel/UCyIDLBSR5_yGel0FDKD6-zA" instagram="https://www.instagram.com/Krrish_gaurav/" background="#ffffff">
				<Override
					slot="link"
					border-radius="50%"
					margin="0 8px"
					background="--color-light"
					hover-background="--color-greyD1"
					color="#284b56"
				/>
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});