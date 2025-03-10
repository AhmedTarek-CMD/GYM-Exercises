import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercise from "../components/Exercise";
import SearchExercise from "../components/SearchExercise";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercise
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
