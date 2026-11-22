"use client";

import { createContext, useContext } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
/* import { createContext, useContext, useState } from "react"; */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MAX_PLAN = 5;

const FitLogContext = createContext(null);

export function FitLogProvider({ children }) {
const [plan, setPlan, planLoaded] = useLocalStorage("fitlog-plan", []);
const [saved, setSaved, savedLoaded] = useLocalStorage("fitlog-saved", []);
const loaded = planLoaded && savedLoaded;

  const isInPlan = (id) => plan.some((w) => w.id === id);
  const isSaved = (id) => saved.some((w) => w.id === id);
  const planIsFull = plan.length >= MAX_PLAN;

  function addToPlan(workout) {
    if (isInPlan(workout.id)) {
      toast.info("Already in today's plan");
      return;
    }
    if (planIsFull) {
      toast.error(`Plan is full. Max ${MAX_PLAN} lifts per day.`);
      return;
    }
    setPlan((prev) => [...prev, { ...workout, done: false }]);
    toast.success("Added to today's plan");
  }

  function saveForLater(workout) {
    if (isSaved(workout.id)) {
      toast.info("Already saved");
      return;
    }
    setSaved((prev) => [...prev, workout]);
    toast.success("Saved for later");
  }

  function removeFromPlan(id) {
    setPlan((prev) => prev.filter((w) => w.id !== id));
    toast.info("Removed from today's plan");
  }

  function removeFromSaved(id) {
    setSaved((prev) => prev.filter((w) => w.id !== id));
    toast.info("Removed from saved");
  }

  function markDone(id) {
    setPlan((prev) => prev.map((w) => (w.id === id ? { ...w, done: true } : w)));
    toast.success("Workout marked as done 💪");
  }

  const value = {
    plan,
    saved,
    loaded,
    planIsFull,
    isInPlan,
    isSaved,
    addToPlan,
    saveForLater,
    removeFromPlan,
    removeFromSaved,
    markDone,
  };

  return (
    <FitLogContext.Provider value={value}>
      {children}
      <ToastContainer position="bottom-right" theme="dark" autoClose={2500} />
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const ctx = useContext(FitLogContext);
  if (!ctx) throw new Error("useFitLog must be used inside <FitLogProvider>");
  return ctx;
}