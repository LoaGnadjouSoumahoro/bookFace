import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack, Container } from "@mui/material";

function App() {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        {/* Navbar */}
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
