import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-120">
      <div className="alert alert-warning">We couldn't find that donation.</div>
      <Link href="/donation" className="btn btn-outline-secondary mt-2">
        Back to Donations
      </Link>
    </div>
  );
}
