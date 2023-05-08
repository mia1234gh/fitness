import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { fetchData, exerciseOptions } from "./../utils/fetchData";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData); // eslint-disable-next-line
    };
    fetchExercisesData();
  }, [bodyPart]); // eslint-disable-next-line

  // pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (!currentExercises.length) {
    return <Loader />;
  }

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        搜索结果
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            shape="rounded"
            color="standard"
            defaultPage={1}
            page={currentPage}
            onChange={paginate}
            size="large"
            count={Math.ceil(exercises.length / exercisesPerPage)}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
