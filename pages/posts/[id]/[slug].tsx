import { GetServerSideProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { Post, PostService } from "tato_ap-sdk";
import { ResourceNotFoundError } from "tato_ap-sdk/dist/errors";
import { DiscussionEmbed } from "disqus-react";
import Markdown from "../../../components/Markdown";
import PostHeader from "../../../components/PostHeader";

interface PostProps extends NextPageProps {
  post?: Post.Detailed;
  host?: string;
}

export default function PostPage(props: PostProps) {
  const { post, host } = props;

  return (
    <>
      <Head>
        <meta property="og:title" content={post?.title} />
        <meta property="og:site_name" content="AlgaNews" />
        <meta property="og:url" content="alganews.com.br" />
        <meta property="og:description" content={post?.body.slice(0, 54)} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post?.imageUrls.medium} />
        <title>{post?.title} - AlgaNews</title>
        <link
          rel="canonical"
          href={`http://${host}/${post?.id}/${post?.slug}`}
        />
      </Head>
      {post && (
        <>
          <PostHeader
            thumbnail={post.imageUrls.large}
            createdAt={post.createdAt}
            editor={post.editor}
            title={post.title}
          />
          <Markdown>{post.body}</Markdown>
          <DiscussionEmbed
            shortname="alganews-13"
            config={{
              url: `http://${host}/${post?.id}/${post?.slug}`,
              identifier: String(post.id),
              title: post.title,
              language: "pt_BR",
            }}
          />
        </>
      )}
    </>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
  slug: string;
}

export const getServerSideProps: GetServerSideProps<
  PostProps,
  Params
> = async ({ params, res, req, query }) => {
  const { token } = query;
  console.log(token);
  try {
    if (!params) return { notFound: true };

    const { id, slug } = params;

    const { token } = query;

    const postId = Number(id);

    if (isNaN(postId)) return { notFound: true };

    console.log(token);

    const post = await PostService.getExistingPost(postId, token as string);

    return {
      props: {
        post,
        host: req.headers.host,
      },
    };
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return { notFound: true };
    }

    return {
      props: {
        error: {
          message: error.message,
          statusCode: error.data?.status || 500,
        },
      },
    };
  }
};
