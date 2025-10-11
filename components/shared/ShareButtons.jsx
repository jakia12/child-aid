"use client";

import { useEffect, useMemo, useState } from "react";

export default function ShareButtons({
  path,
  title,
  summary,
  hashtags = ["donate", "charity"],
  utm = "utm_source=share",
}) {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    const envOrigin = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(
      /\/$/,
      ""
    );
    setOrigin(
      envOrigin || (typeof window !== "undefined" ? window.location.origin : "")
    );
  }, []);

  const pageUrl = useMemo(() => {
    if (!origin) return "";
    const base = `${origin}${path.startsWith("/") ? path : `/${path}`}`;
    return utm ? `${base}${base.includes("?") ? "&" : "?"}${utm}` : base;
  }, [origin, path, utm]);

  const enc = encodeURIComponent;
  const hashtagStr = (hashtags || []).join(",");

  const twitterHref = useMemo(() => {
    const text = summary ? `${title} — ${summary}` : title;
    return `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(
      pageUrl
    )}&hashtags=${enc(hashtagStr)}`;
  }, [title, summary, pageUrl, hashtagStr]);

  const facebookHref = useMemo(
    () => `https://www.facebook.com/sharer/sharer.php?u=${enc(pageUrl)}`,
    [pageUrl]
  );

  const linkedinHref = useMemo(
    () => `https://www.linkedin.com/sharing/share-offsite/?url=${enc(pageUrl)}`,
    [pageUrl]
  );

  const openCentered = (href) => {
    const w = 640;
    const h = 640;
    const y =
      typeof window !== "undefined" && window.top
        ? (window.top.outerHeight - h) / 2
        : 100;
    const x =
      typeof window !== "undefined" && window.top
        ? (window.top.outerWidth - w) / 2
        : 100;
    window.open(
      href,
      "_blank",
      `toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1,width=${w},height=${h},top=${y},left=${x}`
    );
  };

  const tryNativeShare = async (network) => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: summary, url: pageUrl });
        return;
      } catch {
        // user cancelled or unsupported — fall back
      }
    }
    const href =
      network === "twitter"
        ? twitterHref
        : network === "facebook"
        ? facebookHref
        : linkedinHref;
    openCentered(href);
  };

  // Preserves your exact classes/markup
  return (
    <div className="d-flex gap-2">
      <a
        className="btn btn-outline-secondary btn-sm"
        href={twitterHref || "#"}
        onClick={(e) => {
          e.preventDefault();
          tryNativeShare("twitter");
        }}
        aria-label="Share on X"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-x-twitter me-2"></i>Twitter
      </a>

      <a
        className="btn btn-outline-secondary btn-sm"
        href={facebookHref || "#"}
        onClick={(e) => {
          e.preventDefault();
          tryNativeShare("facebook");
        }}
        aria-label="Share on Facebook"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-facebook-f me-2"></i>Facebook
      </a>

      <a
        className="btn btn-outline-secondary btn-sm"
        href={linkedinHref || "#"}
        onClick={(e) => {
          e.preventDefault();
          tryNativeShare("linkedin");
        }}
        aria-label="Share on LinkedIn"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin-in me-2"></i>LinkedIn
      </a>
    </div>
  );
}
