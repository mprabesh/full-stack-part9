import { CourseProps,CourseType } from "../types";

export const Content = ({courseParts}:CourseProps) => (
  <>
    {courseParts.map((val:CourseType) => (
      <p key={val.name}>
        {val.name} {val.exerciseCount}
      </p>
    ))}
  </>
);

