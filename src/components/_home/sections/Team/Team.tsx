import { FC, useRef } from 'react';
import useElementDimension from '../../../../hooks/useElementDimension';
import style from '../../../../styles/pages/home/sections/team.module.css';
import CustomConfetti from '../../../features/Confetti';
import teamInfo, { TeamMember as TeamMemberI } from './teamData';

const Team: FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { height, width } = useElementDimension(sectionRef);

  return (
    <section className={style.team} ref={sectionRef}>
      <CustomConfetti height={height} width={width} />
      <h2 className={style.section_title}>Teams</h2>
      <div className={style.team_container}>
        {teamInfo.map((info) => (
          <TeamMember info={info} key={info._id} />
        ))}
      </div>
    </section>
  );
};

interface TeamMemberProps {
  info: TeamMemberI;
}

const TeamMember: FC<TeamMemberProps> = ({ info }) => (
  <div className={style.team_member}>
    <div className={style.profile_img_ct}>
      <img src={info.profileImg} alt={info.name} />
    </div>

    <div className={style.profile_info}>
      <p className={style.username}>{info.name}</p>
      <p className={style.profession}>{info.workPosition}</p>
    </div>
  </div>
);

export default Team;
