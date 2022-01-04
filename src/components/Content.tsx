import { Paper } from "@mui/material";

interface Content {
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
): Content {
  return { id, subject, name, content };
}

const rows: Array<Content> = [
  createData(0, "제목1", "이름1", "내용1"),
  createData(1, "제목2", "이름2", "내용2"),
  createData(2, "제목3", "이름3", "내용3"),
];

export default function Content() {
  const content: Content | undefined = rows.find((content) => content.id === 1);
  return <Paper>{content?.subject}</Paper>;
}
