/*
 * @Author: lakeiedward lakeiedward@126.com
 * @Date: 2024-10-10 22:50:25
 * @LastEditors: lakeiedward lakeiedward@126.com
 * @LastEditTime: 2024-10-10 23:08:18
 * @FilePath: \next-ai\app\chat\page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Link from "next/link";
export interface ChatPageProps {
  params: {
    id: string;
  };
}
export default async function Chat({}: ChatPageProps) {
  const columns = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="flex justify-between">
        {columns.map((r, i) => (
          <>
            <div
              key={i}
              className="bg-share-ico text-regal-blue sm:w-24 md:w-32 m-4 text-center hidden sm:block"
            >
              {r}
            </div>
          </>
        ))}
      </div>
      <button className="bg-sky-500 lg:hover:bg-sky-700 px-5 py-2 mt-5 rounded-3xl hidden sm:block">
        <Link href="/share">跳转到--share</Link>
      </button>

      <div>
        <div className="max-w-md mx-auto dark:bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0"></div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:font-FeilongGBT">
                Case study 你的名字
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Finding customers for your new business
              </a>
              <p className="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
