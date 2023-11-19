export default function Heading({children, level}) {
  const Heading = `h${level}`;
  return (
    <Heading>
      {children}
    </Heading>
  )
}