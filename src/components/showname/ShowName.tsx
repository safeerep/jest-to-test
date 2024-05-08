interface ShowNameProps {
    name?: string;
}
const ShowName = (props: ShowNameProps) => {
  return (
    <div>Good morning {props.name}</div>
  )
}

export default ShowName