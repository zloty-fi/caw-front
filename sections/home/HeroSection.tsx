import React from "react";
import { chakra, Box, Stack, styled, useColorMode, Text, Spacer, useMediaQuery, useToken, Image, HStack, Center } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useTranslation } from "react-i18next";
import { m } from "framer-motion";

import Button from "components/buttons/Button";
import Iconify from "components/icons/Iconify";
import { MotionContainer, varFade } from "components/animate";
import { PATH_DASHBOARD } from "routes/paths";
import { FlippingText } from "./FlippingText";

const DecentralizedTextStyle = styled('span', {
    baseStyle: (prop: any) => ({
        background: `linear-gradient(to right, ${prop?.theme.colors.caw[ `dark` ]} 0%, ${prop?.theme.colors.caw[ `darker` ]}  13%, ${prop?.theme.colors.caw[ `main` ]}  100%)`,
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
    }),
});

type ContentAlignPops = {
    children: React.ReactNode;
}

const ContentAlign = React.forwardRef(({ children }: ContentAlignPops, ref: any) => {

    const mdSize = useToken('breakpoints', 'md');
    const [ isMd ] = useMediaQuery(`(min-width: ${mdSize})`)

    if (isMd)
        return <>{children}</>

    return (
        <Center>
            {children}
        </Center>
    );
});

export default function HeroSection() {

    const { t } = useTranslation();
    const mode = useColorMode();
    const mdSize = useToken('breakpoints', 'md');
    const [ isMd ] = useMediaQuery(`(min-width: ${mdSize})`)

    return (
        <MotionContainer id="home-hero-section" >
            <chakra.div minH={"container.lg"}>
                <Image
                    src="assets/images/cawnet.png"
                    alt="caw-image"
                    opacity={0.05}
                    objectFit='scale-down'
                    borderRadius={10}
                    position='absolute'
                    display={{ base: 'flex', md: 'none' }}
                />
                <Spacer h={100} />
                <Stack direction={[ 'column', 'row' ]} p={2}>
                    <Box w='100%' alignSelf="center"  >
                        <m.div variants={varFade().inDown}>
                            <ContentAlign>
                                <Text
                                    fontSize="6xl"
                                    fontWeight="bold"
                                    textAlign={isMd ? 'left' : 'center'}
                                >
                                    TEH
                                    <br />
                                    <DecentralizedTextStyle>DECENTRALIZED</DecentralizedTextStyle>
                                    <br />
                                    SOCIAL
                                </Text>
                            </ContentAlign>
                        </m.div>
                        <br />
                        <m.div variants={varFade().in}>
                            <ContentAlign>
                                <FlippingText />
                            </ContentAlign>
                        </m.div>
                        <Spacer h={20} />
                        <m.div variants={varFade().inDown}>
                            <ContentAlign>
                                <NextLink href={PATH_DASHBOARD.app.home} passHref>
                                    <Button
                                        size={'lg'}
                                        leftIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} color={"black"} />}
                                    >
                                        {t('verbs.explore')}
                                    </Button>
                                </NextLink>
                            </ContentAlign>
                        </m.div>
                    </Box>
                    <Box w='100%' alignSelf="center">
                        <m.div variants={varFade().inRight}>
                            <HStack>
                                <Spacer />
                                <Image
                                    src="assets/images/cawnet.png"
                                    alt="caw-image"
                                    opacity={mode.colorMode === 'dark' ? 0.5 : 1}
                                    boxSize='400px'
                                    objectFit='cover'
                                    borderRadius={10}
                                    display={{ base: 'none', md: 'flex' }}
                                />
                            </HStack>
                        </m.div>
                    </Box>
                </Stack>
            </chakra.div>
        </MotionContainer>
    );
}