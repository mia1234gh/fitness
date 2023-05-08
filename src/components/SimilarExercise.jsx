import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";
import Horizontal from "./Horizontal";

const SimilarExercise = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        相似<span style={{ color: "#FF2625" }}>健身目标</span>推荐
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises.length !== 0 ? (
          <Horizontal data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        相似 <span style={{ color: "#FF2625" }}>健身设备</span> 推荐
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {equipmentExercises.length !== 0 ? (
          <Horizontal data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;
