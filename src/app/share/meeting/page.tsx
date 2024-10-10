"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export interface ChatPageProps {
  params: {
    id: string;
  };
}
export default function Chat({ params }: ChatPageProps) {
  const router = useRouter();
  return (
    <>
      <h1>meeting</h1>
      <div>
        <Link href="/chat">跳转到--chat</Link>
      </div>
      <button type="button" onClick={() => router.push("/chat")}>
        useRouter--share
      </button>
    </>
  );
}
