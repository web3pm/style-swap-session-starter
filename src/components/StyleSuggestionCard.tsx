
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StyleIdea } from '@/data/styleData';

interface StyleSuggestionCardProps {
  suggestion: StyleIdea | null;
}

const StyleSuggestionCard: React.FC<StyleSuggestionCardProps> = ({ suggestion }) => {
  if (!suggestion) {
    return (
      <Card className="w-full bg-fashion-cream border-fashion-sage">
        <CardContent className="pt-6 text-center text-gray-500 italic">
          Select a clothing item and press "Generate Style Idea" to get started.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full bg-fashion-cream border-fashion-sage shadow-md transition-all duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-fashion-navy font-serif">
          {suggestion.description}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-fashion-terracotta mb-2">STYLING TIPS:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {suggestion.tips.map((tip, index) => (
              <li key={index} className="text-sm">{tip}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-fashion-terracotta mb-2">PERFECT FOR:</h4>
          <div className="flex flex-wrap gap-2">
            {suggestion.occasions.map((occasion, index) => (
              <Badge key={index} variant="outline" className="bg-fashion-sage bg-opacity-30 border-fashion-sage">
                {occasion}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StyleSuggestionCard;
