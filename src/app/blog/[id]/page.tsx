export interface ChatPageProps {
  params: {
    id: string;
  };
}
export default function Chat({ params }: ChatPageProps) {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}
