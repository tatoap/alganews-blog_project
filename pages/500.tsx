import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../_constants"
import ServerErrorImage from "../public/server_error.svg"
import Head from "next/head"

export default function ServerError () {
    return <Wrapper>
        <Head>
            <title>Erro interno - 500</title>
        </Head>
        <Image 
            src={ServerErrorImage}
            width={350}
            height={350}
            objectFit={"contain"}
            alt={"não encontrado"}
        />
        <h2>Erro interno</h2>
        <p>O estagiário desconectou o cabo errado...</p>
        <Link href={"/"} passHref>
            <BackToHome>Tentar acessar a home</BackToHome>
        </Link>
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 16px;

    min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`

const BackToHome = styled.a`
    color: ${(p) => p.theme.primaryBackgound};
    text-decoration: none;
`