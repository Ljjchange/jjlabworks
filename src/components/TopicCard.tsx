import type { Topic } from "@/src/types/topic";

type TopicCardProps = {
  topic: Topic;
};

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <div>
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
    </div>
  );
}