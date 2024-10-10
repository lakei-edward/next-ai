import Link from "next/link";
export interface ChatPageProps {
  params: {
    id: string;
  };
}
export default function Chat({ params }: ChatPageProps) {
  return (
    <div>
      <h1>noon--breakfast</h1>
      <a href="">{params.id}</a>
      <div>lakiedward</div>
      <Link href="/lunch">跳转到--lunch</Link>
    </div>
  );
}
