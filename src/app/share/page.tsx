/*
 * @Author: lakeiedward lakeiedward@126.com
 * @Date: 2024-10-10 22:54:16
 * @LastEditors: lakeiedward lakeiedward@126.com
 * @LastEditTime: 2024-10-10 23:29:41
 * @FilePath: \next-ai\src\app\share\page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
      <div>
        <Link href="/chat">跳转到--chat</Link>
      </div>
      <button type="button" onClick={() => router.push("/chat")}>
        useRouter--share
      </button>
    </>
  );
}
