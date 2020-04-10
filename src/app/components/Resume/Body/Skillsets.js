import React, {Fragment, useEffect, useState} from 'react';
// import SkillsetsBars from './SkillSetsBars';
// import SkillsetsCards from './SkillSetsCards';
import utilities from '../../../utilities/utilities';

const Skillsets = (props) => {
  // const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

  // const updateMedia = () => {
  //   setDesktop(window.innerWidth > 900);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateMedia);
    
  //   return () => window.removeEventListener("resize", updateMedia);
  // });

  // const { primary } = props.skills;
  // console.log(primary)

  return (
    <Fragment>

      {/* TODO */}
      {/* {
        isDesktop ? (
          <SkillsetsCards primarySkillset={props.skills.primary} secondarySkillset={props.skills.secondary} />
        ) : (
          <SkillsetsBars primarySkillset={props.skills.primary} secondarySkillset={props.skills.secondary} />
        )} */}
        <section className="o-resume__skillset">
          <div className="c-skillset">
            <div className="c-snapshot-panel">
              <h3 className="c-snapshot-panel__title">{props.skills.title}</h3>
              <div className="c-snapshot-panel__content">
                <h5 className={'c-skillset__title--primary'}>Primary Skillset:</h5>
                <ul className='c-list c-list--primary-skillset'>
                  {
                    Object.entries(props.skills.primary).map((primarySkill, i) => {
                      const skillType = primarySkill[0];

                      // Insert a comma after each listed skill.
                      const skillList = primarySkill[1].reduce((acc, val) => {
                        acc.push(val);
                        acc.push(", ");

                        return acc;
                      }, []);

                      // Replace trailing comma with a period.
                      skillList.pop()
                      skillList.push(".");

                      return (
                        <li key={utilities.generateNewKey(i)} className='s-temp-list__listing'>
                          <p>{skillType}: {skillList}</p>
                        </li>
                      )
                    })
                  }
                </ul>
                <br></br>
                <h5 className={'c-skillset__title--secondary'}>Secondary Skillsets:</h5>
                  <ul className='c-list c-list--secondary-skillset'>
                    {
                      Object.entries(props.skills.secondary).map((secondarySkill, i) => {
                        return (
                          <li key={utilities.generateNewKey(i)} className='s-temp-list__listing'>
                            <p>- {secondarySkill[1]}</p>
                          </li>
                        )
                      })
                    }
                  </ul>
              </div>
            </div>
          </div>
        </section>
    </Fragment>
  );
}
export default Skillsets;