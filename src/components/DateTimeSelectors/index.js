import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Container from "@mui/material/Container";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

// images
import FromFlightIcon from "../../assets/Icons/fromFlight.png";
import CalendarIcon from "../../assets/Icons/calendar.png";

export default function DateTimeSelectors() {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            background: "white",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
          mb={0.5}
        >
          <Grid container spacing={0} p={2}>
            <Grid item xs={12} md={6} lg={3}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="domestic"
              >
                <FormControlLabel
                  value="domestic"
                  control={<Radio />}
                  label="Domestic"
                />
                <FormControlLabel
                  value="international"
                  control={<Radio />}
                  label="International"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} md={6} lg={3.5}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="yes"
              >
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  style={{ paddingTop: 10, paddingRight: 10 }}
                >
                  Myanmar Citizens
                </FormLabel>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} md={6} lg={2.5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                mr={1}
              >
                <p style={{ marginTop: 8 }}>Trip Type</p>
                <Autocomplete
                  id="disable-close-on-select"
                  disableCloseOnSelect
                  defaultValue={tripTypes[0]}
                  options={tripTypes}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      style={{ width: 130, paddingTop: 5 }}
                      InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        style: { fontWeight: 700 }
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderRadius: 1,
                }}
              >
                <p style={{ marginTop: 8 }}>Passengers</p>
                <Autocomplete
                  id="disable-close-on-select"
                  disableCloseOnSelect
                  defaultValue={passengers[0]}
                  options={passengers}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      style={{ width: 150, paddingTop: 5, }}
                      InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        style: { fontWeight: 700 }
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* from and to , selected date */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            background: "white",
            borderRadius: 3,
          }}
        >
          <Grid container spacing={0} mt={0.5} p={2}>
            <Grid item xs={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <img src={FromFlightIcon} alt="From Flight Icon" />
                <TextField
                  id="standard-basic"
                  label="From"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  style={{ marginLeft: 20 }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <img src={FromFlightIcon} alt="To Flight Icon" />
                <TextField
                  id="standard-basic"
                  label="To"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  style={{ marginLeft: 20 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={CalendarIcon}
                  alt="From Flight Icon"
                  style={{ width: 35, height: 35, marginTop: 7 }}
                />
                <p style={{ fontSize: 16, fontWeight: "bold" }}>Sat, 11 Jun 2023</p>
                <Button
                  variant="contained"
                  size="medium"
                  style={{
                    height: 45,
                    width: 150,
                    marginTop: 1,
                    backgroundColor: "#ef900b",
                    borderRadius: 10,
                  }}
                >
                  Searh
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

const tripTypes = [
  { label: "One Way" },
  { label: "Two Way" },
  { label: "Three Way" },
];

const passengers = [
  { label: "1 Adult" },
  { label: "2 Adult" },
  { label: "3 Adult" },
];
