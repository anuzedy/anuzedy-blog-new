import { Avatar, Divider, Grid, Paper } from "@mui/material";

interface ReplyInterface {
  id: number;
  name: string;
  content: string;
}

function createData(id: number, name: string, content: string): ReplyInterface {
  return { id, name, content };
}

const rows: Array<ReplyInterface> = [
  createData(0, "이름1", "내용1"),
  createData(1, "이름2", "내용2"),
  createData(2, "이름3", "내용3"),
];

const imgLink = "/images/pngegg.png";

export default function Reply() {
  return (
    <Paper style={{ padding: "20px 20px" }}>
      {rows.map((row) => (
        <>
          <Grid container wrap="nowrap" spacing={2} key={row.id}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={imgLink} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>{row.name}</h4>
              <p style={{ textAlign: "left" }}>{row.content}</p>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" style={{ margin: "20px 0" }} />
        </>
      ))}
    </Paper>
  );
}
