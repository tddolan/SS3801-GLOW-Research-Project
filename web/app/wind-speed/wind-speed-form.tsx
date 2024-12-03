"use client";
import { useForm, Controller } from "react-hook-form";
import { Coordinate, CoordinateSchema } from "../types/coordinate";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";

export default function WindSpeedForm(props: {
  handleFetch: (coordinate: Coordinate) => void;
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<z.infer<typeof CoordinateSchema>>({
    mode: "onBlur",
    resolver: zodResolver(CoordinateSchema),
  });

  const onSubmit = handleSubmit(
    (values) => {
      props.handleFetch(values);
    },
    (errors) => {
      toast.error("Invalid form data");
    }
  );

  return (
    <Box>
      <Stack>
        <TextField
          type="number"
          fullWidth
          label="Latitude"
          required
          error={!!errors.latitude}
          helperText={(errors.latitude?.message as React.ReactNode) ?? " "}
          onChange={(e) => setValue("latitude", Number(e.target.value))}
        />
        <TextField
          type="number"
          fullWidth
          label="Longitude"
          required
          error={!!errors.latitude}
          helperText={(errors.latitude?.message as React.ReactNode) ?? " "}
          onChange={(e) => setValue("longitude", Number(e.target.value))}
        />
        <Button variant="outlined" onClick={onSubmit}>Submit</Button>
      </Stack>
    </Box>
  );
}
