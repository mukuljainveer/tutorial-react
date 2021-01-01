import React, { createContext, useContext, useEffect } from "react";

const ctx = createContext({
  save: () => {},
});

function stepForm(props) {
  return <ctx.Provider>{props.children}</ctx.Provider>;
}

const useStepFormCtx = () => {
  const context = useContext(ctx);

  if (context === "undefined") {
    throw new Error(`useCourseCtx must be used within a CourseLayoutProvider`);
  }

  return context;
};

export { useStepFormCtx };
export default stepForm;
