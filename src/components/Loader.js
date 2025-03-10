import React from "react";
import { Stack } from "@mui/material";
import { ClipLoader } from "react-spinners";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <ClipLoader color="grey" size={50} />
  </Stack>
);

export default Loader;
