import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div
            key={image.id + index.toString()}
            className="flex h-60 w-48 flex-col"
          >
            <div className="h-52 w-48 overflow-hidden">
              <img
                src={image.url}
                className="h-full w-full object-cover"
                alt="image"
              />
            </div>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
