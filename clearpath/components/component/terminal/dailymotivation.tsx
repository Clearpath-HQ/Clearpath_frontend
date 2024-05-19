/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import React from "react";
import { useEffect, useRef, useState } from "react";

interface Quote {
  quote: string;
  author: string;
}

export default function DailyMotivation() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track errors

  useEffect(() => {
    const fetchQuote = async () => {
      const apiKey = process.env.NEXT_PUBLIC_API_NINJAS_KEY;
      if (!apiKey) {
        setError("API key is missing. Check your .env file.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/quotes?category=happiness",
          {
            headers: { "X-Api-Key": apiKey },
          }
        );
        if (!response.ok) {
          // Check if response status is not ok (e.g., 401 for unauthorized)
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setError("An error occurred while fetching the quote.");
      } finally {
        setIsLoading(false); // Always set isLoading to false, even on error
      }
    };

    fetchQuote();
  }, []);
  return (
    <div className="shadow-lg w-[461px] h-[250px] rounded-lg bg-gradient-to-br from-white to-gray-600 relative after:content[''] after:absolute after:w-full after:h-full after:bg-[url('/grainBG.png')] after:top-0">
      <div className="p-7">
        <Badge className="rounded-md">Daily Motivation</Badge>
        {isLoading ? (
          <p>Loading quote...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : quote ? (
          <p className="text-center text-lg font-semibold">
            "{quote.quote}" <br /> - {quote.author}
          </p>
        ) : null}
      </div>
    </div>
  );
}
