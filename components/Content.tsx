import styled from "styled-components"
import { FOOTER_HEIGHT, HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from "../_constants"

interface ContentProps {
    children: React.ReactNode
}

export default function Content (props: ContentProps) {
    return <Wrapper>
        <Container>
            {props.children}
        </Container>
    </Wrapper>
}

const Wrapper = styled.div`
    margin-top: ${HEADER_HEIGHT}px;
    min-height: calc(100vh - ${FOOTER_HEIGHT}px - ${HEADER_HEIGHT}px);

    @media screen and (max-width: 767px) {
        margin-top: ${MOBILE_HEADER_HEIGHT}px;
    }
`

const Container = styled.div`
    max-width: 848px;
    margin: auto;
    padding: 16px;
`