import { Spinner } from "@heroui/react";
import React from "react";

const loading = () => {
  return (
    <div className="my-20">
      <div className="flex  items-center justify-center gap-2">
        <Spinner color="current" />
        <span className="text-xs text-muted">Doctors</span>
      </div>
    </div>
  );
};

export default loading;
