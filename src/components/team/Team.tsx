interface TeamProps {
  name?: string;
  captain?: string;
}

const Team = (props: TeamProps) => {
  return (
    <div>
      <span>
        {props.captain} is the captain of the team {props.name}
      </span>
      <span>{props.captain} is an indian</span>
    </div>
  );
};

export default Team;
