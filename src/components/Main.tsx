import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {
  const { posts, title } = props;

  const [postMarkdown, setPostMarkDown] = useState<Array<string>>([]);

  useEffect(() => {
    (async function fetchPosts() {
      const postArr: Array<string> = [];
      for (let i = 0; i < posts.length; i++) {
        const post: Response = await fetch(posts[i]);
        const text: string = await post.text();
        postArr.push(text);
      }
      setPostMarkDown(postArr);
    })();
  }, [posts]);

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {postMarkdown.map((post: string) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}
