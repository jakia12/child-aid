// components/TeamSection.jsx

const teamMembers = [
  {
    id: 1,
    name: "Kaira Beasley",
    role: "Volunteer",
    image: "/images/team/team-1-1.jpg",
    delay: ".3s",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      pinterest: "#",
    },
  },
  {
    id: 2,
    name: "Charlotte Ava",
    role: "Volunteer",
    image: "/images/team/team-1-2.jpg",
    delay: ".5s",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      pinterest: "#",
    },
  },
  {
    id: 3,
    name: "Alessio Done",
    role: "Volunteer",
    image: "/images/team/team-1-3.jpg",
    delay: ".7s",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      pinterest: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <div className="tp-team-2__area pt-115 pb-65">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-12">
            <div className="tp-team-2__section-title pb-50 text-center">
              <span className="tp-section-subtitle-2">our TEAM</span>
              <h4 className="tp-section-title">Meet With Our Expert</h4>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="row">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay={member.delay}
            >
              <div className="tp-team-2__wrapper">
                <div className="tp-team-2__item text-center">
                  <div className="tp-team-2__thumb">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="tp-team-2__content">
                    <div className="tp-team-2__author-info">
                      <a href="team-details.html">
                        <h4 className="tp-team-2__author-name">
                          {member.name}
                        </h4>
                      </a>
                      <span>{member.role}</span>
                    </div>
                    <div className="tp-team-2__social-box">
                      <a href={member.socials.facebook}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href={member.socials.instagram}>
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href={member.socials.twitter}>
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={member.socials.pinterest}>
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
