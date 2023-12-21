import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "@/store/store";

export interface WWProgramInfo {
  estimated_duration: string;
  location: number;
  program: string;
}

export interface WashProgressInfo extends WWProgramInfo {
  min: number;
  sec: number;
  targetDateInMs: number;
  washFinished: boolean;
}

const initialState: InitialState<WashProgressInfo> = {
  value: {
    estimated_duration: "0:00",
    location: 0,
    program: "none",
    min: 0,
    sec: 0,
    targetDateInMs: 0,
    washFinished: false,
  },
};

const calculateTarget = (duration: string): number => {
  const [minutes, seconds] = duration.split(":");
  const add = (parseInt(minutes) * 60 + parseInt(seconds)) * 1000;
  const target = new Date();
  return target.getTime() + add;
};

// Slice
export const washSlice = createSlice({
  name: "wash",
  initialState,
  reducers: {
    updateWashInfo: (
      state: InitialState<WashProgressInfo>,
      action: PayloadAction<WWProgramInfo>
    ) => {
      // Unwrap
      const { estimated_duration, location, program } = action.payload;
      // Set default WWProgram info
      state.value.estimated_duration = estimated_duration;
      state.value.location = location;
      state.value.program = program;
      // Set info for Countdown
      state.value.targetDateInMs = calculateTarget(estimated_duration);
    },
    countdown: (state: InitialState<WashProgressInfo>) => {
      const now = new Date();
      const target = new Date(state.value.targetDateInMs);
      const diff = target.getTime() - now.getTime();
      const minutes = Math.floor(diff / 1000 / 60);
      const seconds = Math.floor(diff / 1000) % 60;
      if (minutes <= 0 && seconds <= 0) {
        state.value.washFinished = true;
        state.value.min = 0;
        state.value.sec = 0;
      } else {
        state.value.min = minutes;
        state.value.sec = seconds;
      }
    },
  },
});

export const { updateWashInfo, countdown } = washSlice.actions;
export const selectWashInfo = (state: any): WashProgressInfo =>
  state.wash.value;
