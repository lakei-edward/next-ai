import { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "next.js",
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div>123123</div>
        {children}
      </Suspense>
    </section>
  );
}
