import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import Quiz from "@/components/quiz";
import { Share } from "@/components/share";

export { generateMetadata };

export default function Home() {
  return (
    <main className="flex flex-col gap-4 place-items-center px-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <Quiz />
      <Share
        text={`${title} - ${description} ${process.env.NEXT_PUBLIC_URL}`}
        className="mt-4"
      />
    </main>
  );
}
