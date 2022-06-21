import styled from "styled-components";
import { Post } from "tato_ap-sdk";

interface FeaturedPostProps {
    postSummary: Post.Summary
}

export default function FeaturedPost (props: FeaturedPostProps) {
    return <Wrapper>
        <Tags>
            {props.postSummary.tags.map(tag => <Tag key={tag}>{ tag }</Tag>)}
        </Tags>
        <span>editor</span>
        <span>title</span>
    </Wrapper>
}

const Wrapper = styled.div`
    background-color: ${p => p.theme.primaryBackgound};
    color: ${p => p.theme.primaryForeground};
    border-radius: ${(p) => p.theme.borderRadius};

    gap: 24px;

    padding: 32px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    min-height: 256px;
`

const Tags = styled.ul`
    list-style: none;
    display: flex;
    gap: 8px;
`

const Tag = styled.li`
    background-color: ${p => p.theme.activeElementBackground};
    color: ${p => p.theme.activeElementForeground};
    border-radius: ${(p) => p.theme.borderRadius};

    text-transform: lowercase;
    padding: 4px 12px;
    cursor: default;
`