export interface CourseType {
  name: string;
  exerciseCount: number;
}

interface CourseProps{
    courseParts:CourseType[]
}


export const Content = ({courseParts}:CourseProps) => (
  <>
  {console.log(Array.isArray(courseParts))}
    {courseParts.map((val:CourseType) => (
      <p key={val.name}>
        {val.name} {val.exerciseCount}
      </p>
    ))}
  </>
);

