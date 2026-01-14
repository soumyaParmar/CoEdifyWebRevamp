"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-slate-950 px-4 text-center">
      <div className="space-y-6 max-w-lg">
        {/* Icon Container */}
        <div className="mx-auto w-24 h-24 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-8">
          <AlertTriangle className="w-12 h-12 text-red-500" />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Something went wrong!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We apologize for the inconvenience. An unexpected error has
            occurred.
          </p>
          {process.env.NODE_ENV === "development" && (
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg text-left overflow-auto max-h-48 border border-red-200 dark:border-red-900/20">
              <p className="text-sm font-mono text-red-600 dark:text-red-400">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-all font-medium w-full sm:w-auto justify-center shadow-lg"
          >
            <RefreshCw size={20} />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors font-medium w-full sm:w-auto justify-center"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
