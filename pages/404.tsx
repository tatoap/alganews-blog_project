import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../_constants"
import NotFoundImage from "../public/not_found.svg"

export default function NotFound () {
    return <Wrapper>
        <Image 
            src={NotFoundImage}
            width={350}
            height={350}
            objectFit={"contain"}
            alt={"não encontrado"}
        />
        <h2>Página não encontrada</h2>
        <Link href={"/"} passHref>
            <BackToHome>Voltar para a home</BackToHome>
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