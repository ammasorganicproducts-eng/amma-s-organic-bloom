import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found | Amma's Organic Products";
  }, []);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-base btn-emerald">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
