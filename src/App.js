import { Alert, Divider } from "@mui/material";
import Heading from "./Components/Heading/Heading";
import SearchAppBar from "./Components/NavBar/SearchAppBar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import { WarningAmberOutlined } from "@mui/icons-material";

function App() {
  return (
    <>
      <SearchAppBar />
      <Alert icon={<WarningAmberOutlined fontSize="inherit" />} severity="warning">
        Category 3 hurricane expected to hit shores of Yellow Leaf Bay on Friday July 18, 2024.
        All emergency shelters are open to public. Your safety is out top priority. In case of emergency call 911.
      </Alert>
      <Heading title="Taniti Village" subtitle="Adventure awaits you..." />
      <Content />
      <Divider sx={{ margin: "1rem" }} />
      <Footer />
    </>
  );
}

export default App;
