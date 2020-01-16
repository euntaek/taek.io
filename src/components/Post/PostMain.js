/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  font-family: "Noto Sans KR", sans-serif;
  &:after {
    content: "";
    margin: 3.5rem auto 1.75rem;
    display: block;
    width: 60%;
    border: none;
    border-radius: 1px;
    height: 2px;
    background-color: black;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 3.5rem 0 1.75rem;
  }
  a {
    text-decoration: none;
    font-weight: 600;
  }
  ul,
  ol {
    padding: 0;
    margin-bottom: 1.75rem;
    @media only screen and (max-width: 420px) {
      margin-left: 1.25rem;
    }
  }
  li {
    &,
    & > p {
      margin-bottom: calc(1.75rem / 2);
    }
    & > ul,
    ol {
      margin-left: 1.25rem;
    }
  }
  p {
    margin: 0 0 1.75rem;
  }
  blockquote {
    font-size: 1.125rem;
    margin: 0 1.25rem 1.75rem -1.25rem;
    padding-left: 1rem;
    border-left: 0.25rem solid;
    opacity: 0.8;
  }
  blockquote *:last-child {
    margin-bottom: 0;
  }
  hr {
    margin: 0 0 calc(1.75rem - 1px);
    padding: 0;
    border: none;
    height: 1px;
  }
`;

function PostMain({ html }) {
  return (
    <section
      css={style}
      className="post-main"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default PostMain;