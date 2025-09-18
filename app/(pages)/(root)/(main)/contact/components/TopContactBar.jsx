// components/TopContactBar.jsx

import { BiPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const CONTACT_ITEMS = [
  {
    iconClass: <BiPhoneCall />,
    links: [
      { href: "tel:+923077760800", label: "+ 92 (307) 776-0800" },
      { href: "tel:+008898768", label: "+ 00 (8898) 768" },
    ],
  },
  {
    iconClass: <MdOutlineMarkEmailUnread />,
    links: [
      {
        href: "mailto:poorexcharityhelp@gmail.com",
        label: "poorexcharityhelp@gmail.com",
      },
      { href: "mailto:infocompany@gmail.com", label: "infocompany@gmail.com" },
    ],
  },
  {
    iconClass: <IoLocationOutline />,
    // For location we keep a single link with a <br/> inside
    rawHtml: `55 Hereford catdal street line <br/> New york, USA`,
    links: [{ href: "#", label: "" }],
  },
];

function ContactItem({ item }) {
  return (
    <div className="tp-contact__item d-flex align-items-center">
      <div className="tp-contact__icon">
        <span>{item.iconClass}</span>
      </div>

      <div className="tp-contact__text">
        {/* If rawHtml is provided (for the address), render that; otherwise render links */}
        {item.rawHtml ? (
          <a
            href={item.links?.[0]?.href || "#"}
            dangerouslySetInnerHTML={{ __html: item.rawHtml }}
          />
        ) : (
          item.links.map((l, idx) => (
            // Use <a> directly to preserve your CSS; Next <Link> is optional here
            <a key={idx} href={l.href}>
              {l.label}
            </a>
          ))
        )}
      </div>
    </div>
  );
}

export default function TopContactBar() {
  return (
    <div className="tp-contact__area">
      <div className="container">
        <div className="tp-contact__bg">
          <div className="tp-contact__wrapper d-flex align-items-center justify-content-between">
            {CONTACT_ITEMS.map((item, i) => (
              <ContactItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
