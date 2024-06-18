import { Fragment, React } from "react";
import {
  Grid,
  Typography,
  Box,
  Divider,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ResponsivePadding from "../../Components/ResponsivePadding";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {
  return (
    <Fragment>
      <Box sx={{ backgroundColor: "#f0f0f0" }}>
        <ResponsivePadding>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12} lg={6}>
              <Typography variant="h1" gutterBottom>
                FAQ
              </Typography>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  width: "100%",
                  paddingTop: "25px",
                }}
              >
                <Typography sx={{ flex: 1 }}>
                  Fine Dining, Superb Night Experience
                </Typography>
                <Divider
                  sx={{
                    height: ".5px",
                    width: "70%",
                    backgroundColor: "black",
                    flexShrink: 0,
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ paddingTop: "48px" }}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={12} lg={6}>
                <Typography variant="h3">Your questions, answered.</Typography>
              </Grid>

              <Grid item xs={12} md={12} lg={6}>
                <Accordion
                  sx={{
                    boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>Where is Astoria Located?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  sx={{
                    marginTop: "24px",
                    boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>How much is per night?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  sx={{
                    marginTop: "24px",
                    boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>What is Astoria's Instagram?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                    .
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  sx={{
                    marginTop: "24px",
                    boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>Is Astoria a 5-star hotel?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Box>
        </ResponsivePadding>
      </Box>
    </Fragment>
  );
}

export default FAQ;
