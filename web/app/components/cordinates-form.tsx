"use client";
import { useForm, Controller } from "react-hook-form";
import { Coordinate, CoordinateSchema } from "../schemas/coordinate";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";

export default function CoordinatesForm(props: {
  handleFetch: (coordinate: Coordinate) => void;
}) {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
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
        <Typography variant="h6">Query Wind Data</Typography>
        <Divider />
        <TextField
          type="number"
          fullWidth
          label="Latitude"
          required
          {...register("latitude")}
          error={!!errors.latitude}
          helperText={(errors.latitude?.message as React.ReactNode) ?? " "}
        />
        <TextField
          type="number"
          fullWidth
          label="Longitude"
          required
          {...register("longitude")}
          error={!!errors.latitude}
          helperText={(errors.latitude?.message as React.ReactNode) ?? " "}
        />
        <Button onClick={onSubmit}>Submit</Button>
      </Stack>
    </Box>
  );
}
