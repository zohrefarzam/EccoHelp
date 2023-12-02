import React from 'react'
import {
    AppBar,
    Box,
    Button,
    Container,
    CssBaseline,
    Paper,
    Toolbar,
    Typography,
  } from "@mui/material";
  import RequirementForm from "./RequirementForm";
import MuiRtl from './MuiRtl';

const EccoHelpFoormCard = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    <Paper
      variant="outlined"
      sx={{ my: { xs: 3 }, p: { xs: 2, md: 3 }, borderRadius: 3 }}
    >
        <RequirementForm />

      {/* {activeStep === steps.length ? (
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            {" "}
            نیازمندی شما با موفقیت ثبت شد
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                mt: 3,
                ml: 1,
                background: colorPallete.green,
                color: "white",
                ":hover": {
                  background: colorPallete.green + "80",
                },
              }}
            >
              {activeStep === steps.length - 1 ? "قبلی" : "بعدی"}
            </Button>
          </Box>
        </React.Fragment>
      )} */}
    </Paper>
  </Container>
  )
}

export default EccoHelpFoormCard