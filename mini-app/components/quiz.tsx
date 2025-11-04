'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "What is your favorite color?",
    options: ["Red", "Blue", "Pink", "Gold"],
  },
  {
    question: "Which animal do you feel most connected to?",
    options: ["Lion", "Dolphin", "Eagle", "Wolf"],
  },
  {
    question: "What is your ideal vacation?",
    options: ["Beach", "Mountains", "City", "Countryside"],
  },
  {
    question: "Which trait describes you best?",
    options: ["Kindness", "Courage", "Wisdom", "Beauty"],
  },
  {
    question: "What is your favorite dessert?",
    options: ["Cake", "Ice Cream", "Pie", "Cookies"],
  },
];

const princesses = [
  "Snow White",
  "Cinderella",
  "Aurora",
  "Belle",
  "Jasmine",
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleSelect = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[current] = index;
    setAnswers(newAnswers);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      computeResult(newAnswers);
    }
  };

  const computeResult = (ans: number[]) => {
    // Simple logic: pick the princess that matches the most frequent answer index
    const counts = Array(questions.length).fill(0);
    ans.forEach((a) => {
      counts[a] = (counts[a] ?? 0) + 1;
    });
    const maxIndex = counts.indexOf(Math.max(...counts));
    setResult(princesses[maxIndex % princesses.length]);
  };

  if (result) {
    const imageName = result.toLowerCase().replace(/\\s+/g, "-");
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">
          You are most similar to {result}!
        </h2>
        <img
          src={`/${imageName}.png`}
          alt={result}
          className="mx-auto my-4 w-32 h-32 rounded-full object-cover"
        />
      </div>
    );
  }

  const q = questions[current];
  return (
    <div className="w-full max-w-md">
      <h3 className="text-lg font-medium mb-2">{q.question}</h3>
      <div className="grid gap-2">
        {q.options.map((opt, idx) => (
          <Button
            key={idx}
            variant="outline"
            className="w-full"
            onClick={() => handleSelect(idx)}
          >
            {opt}
          </Button>
        ))}
      </div>
    </div>
  );
}
