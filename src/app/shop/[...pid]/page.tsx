"use client";
export interface ChatPageProps {
  params: {
    pid: string;
  };
}
export default function Chat({ params }: ChatPageProps) {
  console.log(params)
  return (
    <div>
      <h1>{params.pid}</h1>
    </div>
  );
}
