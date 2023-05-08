import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Details from "./../../components/Details";
import ExerciseVideo from "./../../components/ExerciseVideo";
import SimilarExercise from "./../../components/SimilarExercise";
import {
  fetchData,
  exerciseOptions,
  planOptions,
} from "./../../utils/fetchData";
import { Progress } from "@mongez/react-components";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const videoSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDataDetail = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDataDetail);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDataDetail.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDataDetail.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);

      const exerciseVideosData = await fetchData(
        `${videoSearchUrl}/search?query=${exerciseDataDetail.name}exercise`,
        planOptions
      );
      setExerciseVideos(exerciseVideosData);
    };
    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>无结果</Typography>
        <Progress loading value={50} color="grey" />
      </Box>
    );
  }

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercise
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
