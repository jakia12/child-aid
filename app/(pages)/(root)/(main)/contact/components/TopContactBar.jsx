// components/TopContactBar.jsx

import { BiPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const CONTACT_ITEMS = [
  {
    iconClass: <BiPhoneCall />,
    links: [
      { href: "tel:+12125551234", label: "+1 (212) 555-1234" },
      { href: "tel:+12125559876", label: "+1 (212) 555-9876" },
    ],
  },
  {
    iconClass: <MdOutlineMarkEmailUnread />,
    links: [
      { href: "mailto:hello@childaid.org", label: "hello@childaid.org" },
      { href: "mailto:support@childaid.org", label: "support@childaid.org" },
    ],
  },
  {
    iconClass: <IoLocationOutline />,
    // For location we keep a single link with a <br/> inside
    rawHtml: `125 Maiden Lane, Suite 5 <br/> New York, NY 10038`,
    links: [
      {
        href: "https://maps.google.com/?q=125+Maiden+Lane,+New+York,+NY+10038",
        label: "",
      },
    ],
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
