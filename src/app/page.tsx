import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/f5818ca7-ae7c-45d4-8e1c-4224613466a1-ibcluw.png",
  "https://utfs.io/f/ca96259a-b479-4125-9f81-46eb955baabb-1xaic6.jpeg",
  "https://utfs.io/f/9e2c498e-f3e5-4b5e-817e-714bf8f32138-nm33wo.png",
  "https://utfs.io/f/07722ba2-b16e-4e06-90f2-a4897bce2437-ibclvr.png",
  "https://utfs.io/f/2d1b6114-99d9-4bf0-830d-542bb27d5411-kxp3xd.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
