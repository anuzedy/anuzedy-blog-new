import { Card, CardContent, Divider, Typography } from "@mui/material";
import Reply from "./Reply";

interface ContentInterface {
  id: number;
  subject: string;
  name: string;
  content: string;
}

function createData(
  id: number,
  subject: string,
  name: string,
  content: string
): ContentInterface {
  return { id, subject, name, content };
}

const rows: Array<ContentInterface> = [
  createData(0, "제목1", "이름1", "내용1"),
  createData(1, "제목2", "이름2", "내용2"),
  createData(2, "제목3", "이름3", "내용3"),
];

export default function Content() {
  const content: ContentInterface | undefined = rows.find(
    (content) => content.id === 1
  );
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          align="left"
          sx={{ marginTop: "2%" }}
        >
          {content?.subject}
        </Typography>
        <Divider />
        <Typography
          gutterBottom
          component="div"
          align="left"
          sx={{ margin: "5% 0 5% 0" }}
        >
          {content?.content}
        </Typography>
        <Divider />
        <Reply />
      </CardContent>
    </Card>
  );
}
