export interface CourseType {
  name: string;
  exerciseCount: number;
}

export const Content = (courseParts: CourseType[]) => (
  <>
    {courseParts.map((val) => (
      <p>
        {val.name} {val.exerciseCount}
      </p>
    ))}
  </>
);

