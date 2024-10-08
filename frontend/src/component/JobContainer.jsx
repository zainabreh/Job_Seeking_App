import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import JobCard from "./JobCard";
import Pagination from "@mui/material/Pagination";

export default function JobContainer() {
  const [category, setCategory] = React.useState("");
  const [categoryOpen, setCategoryOpen] = React.useState(false);

  const [types, setTypes] = React.useState("");
  const [typesOpen, setTypesOpen] = React.useState(false);

  const [location, setLocation] = React.useState("");
  const [locationOpen, setLocationOpen] = React.useState(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCategoryOpen = () => {
    setCategoryOpen(true);
  };

  const handleCategoryClose = () => {
    setCategoryOpen(false);
  };

  const handleTypesChange = (event) => {
    setTypes(event.target.value);
  };

  const handleTypesOpen = () => {
    setTypesOpen(true);
  };

  const handleTypesClose = () => {
    setTypesOpen(false);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleLocationOpen = () => {
    setLocationOpen(true);
  };

  const handleLocationClose = () => {
    setLocationOpen(false);
  };

  return (
    <>
      <div className="main-container">
        <div className="filter-container">
          {/* Category */}
          <Box sx={{ width: 250 }}>
            <Button
              sx={{ display: "block", mt: 2 }}
              onClick={handleCategoryOpen}
            >
              Filter Job By Category
            </Button>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={categoryOpen}
                onClose={handleCategoryClose}
                onOpen={handleCategoryOpen}
                value={category}
                label="category"
                onChange={handleCategoryChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Types */}
          <Box sx={{ width: 250 }}>
            <Button sx={{ display: "block", mt: 2 }} onClick={handleTypesOpen}>
              Filter Job By Types
            </Button>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Types
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={typesOpen}
                onClose={handleTypesClose}
                onOpen={handleTypesOpen}
                value={types}
                label="types"
                onChange={handleTypesChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"fullTime"}>Full-Time</MenuItem>
                <MenuItem value={"partTime"}>Part-Time</MenuItem>
                <MenuItem value={"internship"}>Internship</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Location */}
          <Box sx={{ width: 250 }}>
            <Button
              sx={{ display: "block", mt: 2 }}
              onClick={handleLocationOpen}
            >
              Filter Job By Location
            </Button>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Location
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={locationOpen}
                onClose={handleLocationClose}
                onOpen={handleLocationOpen}
                value={location}
                label="location"
                onChange={handleLocationChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"fullTime"}>Full-Time</MenuItem>
                <MenuItem value={"partTime"}>Part-Time</MenuItem>
                <MenuItem value={"internship"}>Internship</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="card-container">
          <JobCard />
        </div>
      </div>
      {/* pagination */}
      <div
        style={{
          marginBlock: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination count={2} size="large" />
      </div>
    </>
  );
}
