
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Sparkles } from "lucide-react";
import { clothingData, StyleIdea } from '@/data/styleData';
import StyleSuggestionCard from '@/components/StyleSuggestionCard';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [currentIdea, setCurrentIdea] = useState<StyleIdea | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateIdea = () => {
    if (!selectedItem) {
      toast({
        title: "Select an item first",
        description: "Please select a clothing item before generating an idea.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Find the selected clothing item data
    const item = clothingData.find(item => item.id === selectedItem);
    
    if (item && item.ideas.length > 0) {
      // Get a random idea that's different from the current one
      let newIdeas = [...item.ideas];
      if (currentIdea) {
        newIdeas = newIdeas.filter(idea => idea.description !== currentIdea.description);
      }
      
      if (newIdeas.length > 0) {
        const randomIndex = Math.floor(Math.random() * newIdeas.length);
        
        // Add a slight delay for animation effect
        setTimeout(() => {
          setCurrentIdea(newIdeas[randomIndex]);
          setIsGenerating(false);
        }, 600);
      } else {
        // If we've shown all ideas, just pick a random one
        const randomIndex = Math.floor(Math.random() * item.ideas.length);
        
        setTimeout(() => {
          setCurrentIdea(item.ideas[randomIndex]);
          setIsGenerating(false);
        }, 600);
      }
    }
  };

  const handleSelectChange = (value: string) => {
    setSelectedItem(value);
    setCurrentIdea(null);
  };

  return (
    <div className="min-h-screen bg-fashion-beige">
      <div className="container max-w-3xl mx-auto py-12 px-4">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-fashion-navy mb-2">
            Style Swap
          </h1>
          <p className="text-fashion-terracotta">
            Discover fresh ways to style your favorite clothing items
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-2/3">
              <label htmlFor="clothing-select" className="block text-sm font-medium text-gray-700 mb-1">
                Choose a clothing item
              </label>
              <Select value={selectedItem} onValueChange={handleSelectChange}>
                <SelectTrigger id="clothing-select" className="w-full">
                  <SelectValue placeholder="Select an item" />
                </SelectTrigger>
                <SelectContent>
                  {clothingData.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button 
              onClick={generateIdea} 
              className={`w-full md:w-1/3 bg-fashion-navy hover:bg-opacity-90 transition-all ${isGenerating ? 'animate-pulse-soft' : ''}`}
              disabled={isGenerating}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {isGenerating ? "Generating..." : "Generate Style Idea"}
            </Button>
          </div>
        </div>

        <div className={`transition-all duration-500 ${isGenerating ? 'opacity-50' : 'opacity-100'}`}>
          <StyleSuggestionCard suggestion={currentIdea} />
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Style Swap &copy; {new Date().getFullYear()} - Refresh your wardrobe with creative styling ideas</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
