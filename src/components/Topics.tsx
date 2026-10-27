import { topics } from "@/src/data/topics";
import TopicCard from "@/src/components/TopicCard";

export default function Topics() {
  return (
    <section id="topics">
      <h2>What I&apos;m Exploring</h2>

      {topics.map((topic) => (
        <TopicCard
          key={topic.title}
          topic={topic}
        />
      ))}
    </section>
  );
}