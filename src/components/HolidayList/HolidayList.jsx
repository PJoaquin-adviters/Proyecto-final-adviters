import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";

export default function HolidayList({ children }) {
  return (
    <List sx={{ width: "100%", maxWidth: 560, bgcolor: "background.paper" }}>
      {children}
    </List>
  );
}
