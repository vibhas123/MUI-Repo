import React from "react";
import Header from "./components/Header";

import MainContent from "./components/MainContent";
import FeaturedCompanies from "./components/FeaturedCompanies";
import Pagination from "./components/Pagination";
import { Grid, Box } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Box sx={{ padding: 1 }}>
        <Grid container spacing={6}>
          <Grid item xs={8}>
            <MainContent />
          </Grid>
          <Grid item xs={8}>
            <FeaturedCompanies />
          </Grid>
          <Grid item xs={12}>
            <Pagination />
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </div>
    
  );
}

export default App;
