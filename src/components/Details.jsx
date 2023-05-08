import React from "react";
import { Typography, Stack, Button, Box } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquimentImage from "../assets/icons/equipment.png";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, girUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquimentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row", p: "20px", alignItems: "center" } }}
    >
      <img src={girUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          健身保持你的健康
          <span style={{ textTransform: "capitalize" }}>{name}</span>
          是针对{target}最好的
          <br />
          锻炼方式之一。 它能帮助你{""}
          <br />
          改善情绪和保持精力。
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <Box width="50px" height="50px">
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
