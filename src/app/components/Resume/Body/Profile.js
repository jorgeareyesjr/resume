import React from 'react';

const Profile = (props) => {

  return (
    <section className="o-resume__profile">
      <div className="c-profile">
        <div className="c-snapshot-panel">
          <h3 className="c-snapshot-panel__title">{props.profile.title}</h3>
          <p className="c-snapshot-panel__content">{props.profile.content}</p>
        </div>
      </div>
    </section>
  )
};

export default Profile;