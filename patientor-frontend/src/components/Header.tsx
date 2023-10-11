interface PropHeader{
    courseName:string
}
export const Header=({courseName}:PropHeader)=>(<h1>{courseName}</h1>)