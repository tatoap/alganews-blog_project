import Image from "next/image"
import { transparentize } from "polished"
import styled from "styled-components"
import { Post } from "tato_ap-sdk"
import formatPostDate from "../core/utils/formatPostDate"

interface PostHeaderProps {
    thumbnail: string
    createdAt: string
    editor: Post.Detailed["editor"]
    title?: string
}

export default function PostHeader (props: PostHeaderProps) {
    const { thumbnail, createdAt, editor, title } = props

    return (
        <Wrapper>
            <Thumbnail>
                <Image 
                    src={thumbnail}
                    width={848}
                    height={256}
                    objectFit={"cover"}
                    alt={title}
                />
            </Thumbnail>
            <Editor>
                <Image 
                    src={editor.avatarUrls.small} 
                    width={64} 
                    height={64} 
                    objectFit={"cover"}
                    alt={editor.name}
                />
            </Editor>
            <PublishDate>{formatPostDate(createdAt)}</PublishDate>
            <Title>{title}</Title>
        </Wrapper>  
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
`

const Thumbnail = styled.div`
    height: 256px;
    width: 100%;
    overflow: hidden;
    object-fit: cover;

    border-top-left-radius: ${(p) => p.theme.borderRadius};
    border-top-right-radius: ${(p) => p.theme.borderRadius};
    
    img {
        height: 100%;
        object-fit: cover;
    }
`

const Editor = styled.div`
    position: relative;
    border-radius: 32px;
    margin-top: -48px;
    width: 64px;
    height: 64px;
    box-shadow: 0 0 0 4px ${(p) => p.theme.pageBackground};

    img {
        border-radius: 32px;
    }
`

const PublishDate = styled.p`
    font-size: 12px;
    color: ${p => transparentize(0.5, p.theme.pageForeground)}
`

const Title = styled.h1`
    font-weight: 600;
    font-size: 36px;
`