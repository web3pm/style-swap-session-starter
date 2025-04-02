
export interface StyleIdea {
  description: string;
  tips: string[];
  occasions: string[];
}

export type ClothingItem = {
  id: string;
  name: string;
  ideas: StyleIdea[];
};

export const clothingData: ClothingItem[] = [
  {
    id: "shirts",
    name: "Shirts",
    ideas: [
      {
        description: "Layered with a contrasting cardigan",
        tips: [
          "Choose a cardigan in a complementary color to your shirt",
          "Roll up the sleeves of the shirt for a casual look",
          "Leave the cardigan unbuttoned for an effortless vibe"
        ],
        occasions: ["Casual Friday", "Weekend outing", "Coffee date"]
      },
      {
        description: "French-tucked into high-waisted bottoms",
        tips: [
          "Only tuck in the front portion of your shirt",
          "Pair with a statement belt to define your waist",
          "Works with jeans, skirts, or tailored pants"
        ],
        occasions: ["Office casual", "Dinner with friends", "Shopping trip"]
      },
      {
        description: "Knotted at the waist",
        tips: [
          "Tie a loose knot at the front or side",
          "Pair with high-waisted bottoms",
          "Add layered necklaces for extra style points"
        ],
        occasions: ["Beach day", "Festival", "Vacation"]
      },
      {
        description: "Open as a light jacket over a simple tee",
        tips: [
          "Choose a solid colored tee that complements your shirt",
          "Leave all buttons open",
          "Roll up the sleeves slightly"
        ],
        occasions: ["Casual hangouts", "Running errands", "Outdoor events"]
      }
    ]
  },
  {
    id: "jeans",
    name: "Jeans",
    ideas: [
      {
        description: "Cuffed with statement shoes",
        tips: [
          "Roll up the hem 2-3 times",
          "Pair with bold colored or patterned shoes",
          "Keep the top simple to let the shoes shine"
        ],
        occasions: ["Casual outing", "Weekend brunch", "Shopping day"]
      },
      {
        description: "Dressed up with a blazer",
        tips: [
          "Choose dark wash jeans without distressing",
          "Add a structured blazer and dressy shoes",
          "Complete with minimal, elegant accessories"
        ],
        occasions: ["Smart casual workplace", "Dinner date", "Networking event"]
      },
      {
        description: "Monochrome look with matching top",
        tips: [
          "Pair blue jeans with a similar blue tone top",
          "Add texture through different fabrics",
          "Break it up with a neutral belt"
        ],
        occasions: ["Casual Friday", "Lunch with friends", "City exploring"]
      },
      {
        description: "Boho style with flowy tops",
        tips: [
          "Pair with a loose, flowy blouse or tunic",
          "Add layered necklaces and bangles",
          "Finish with ankle boots or sandals depending on season"
        ],
        occasions: ["Festival", "Art gallery visit", "Outdoor concert"]
      }
    ]
  },
  {
    id: "dresses",
    name: "Dresses",
    ideas: [
      {
        description: "Layered over a fitted turtleneck",
        tips: [
          "Works best with sleeveless or short-sleeved dresses",
          "Choose a contrasting or complementary color turtleneck",
          "Add tights and boots for colder weather"
        ],
        occasions: ["Work day", "Cool weather events", "Fall outings"]
      },
      {
        description: "Belted with a statement belt",
        tips: [
          "Choose a belt that contrasts with your dress",
          "Position at natural waistline to create shape",
          "Pair with coordinating shoes or bag"
        ],
        occasions: ["Office setting", "Lunch date", "Semi-formal event"]
      },
      {
        description: "With a denim jacket for casual contrast",
        tips: [
          "Works best with feminine or fancy dresses",
          "Roll up the jacket sleeves for a relaxed look",
          "Add casual sneakers to further dress it down"
        ],
        occasions: ["Movie date", "Casual dinner", "Day to night transition"]
      },
      {
        description: "Styled as a skirt with an oversized sweater",
        tips: [
          "Choose a longer dress that looks good bunched up",
          "Add a wide belt over the sweater at your waist",
          "Coordinate sweater color with shoes or accessories"
        ],
        occasions: ["Weekend casual", "Coffee meet-up", "University classes"]
      }
    ]
  },
  {
    id: "sweaters",
    name: "Sweaters",
    ideas: [
      {
        description: "Half-tucked with wide-leg pants",
        tips: [
          "Tuck just the front portion of your sweater",
          "Choose high-waisted pants for balance",
          "Add a long necklace or scarf for vertical interest"
        ],
        occasions: ["Office setting", "Parent-teacher meeting", "Shopping trip"]
      },
      {
        description: "Layered over a collared shirt",
        tips: [
          "Let the collar and cuffs peek out",
          "Choose contrasting colors for visual interest",
          "Works with crew neck or V-neck sweaters"
        ],
        occasions: ["Business casual", "Dinner date", "Holiday gathering"]
      },
      {
        description: "With a statement skirt",
        tips: [
          "Pair a simple sweater with a bold patterned or textured skirt",
          "Tuck in the sweater fully or partially",
          "Add minimal accessories to let the skirt be the focus"
        ],
        occasions: ["Office party", "Gallery opening", "Upscale dinner"]
      },
      {
        description: "Off-shoulder with fitted bottoms",
        tips: [
          "Let the sweater drape off one shoulder",
          "Pair with skinny jeans or leggings for balance",
          "Add delicate jewelry to highlight collar bones"
        ],
        occasions: ["Date night", "Girls' night out", "Cocktail party"]
      }
    ]
  },
  {
    id: "skirts",
    name: "Skirts",
    ideas: [
      {
        description: "With an oversized graphic tee",
        tips: [
          "Tuck in the front of the tee for shape",
          "Add a leather jacket for edge",
          "Finish with ankle boots or sneakers"
        ],
        occasions: ["Concert", "Casual weekend", "Meeting friends"]
      },
      {
        description: "Monochrome look with matching top",
        tips: [
          "Choose the same color family for top and skirt",
          "Play with texture to add visual interest",
          "Add a contrasting accessory like a belt or scarf"
        ],
        occasions: ["Office setting", "Formal event", "Upscale dinner"]
      },
      {
        description: "With a tucked-in button-down shirt",
        tips: [
          "Fully tuck in a crisp button-down",
          "Add a slim belt that matches your shoes",
          "Roll up the sleeves for a more casual look"
        ],
        occasions: ["Work meeting", "Business lunch", "College presentation"]
      },
      {
        description: "With a cropped sweater or jacket",
        tips: [
          "Choose a high-waisted skirt for proportional balance",
          "The hem of the top should hit at or just below the waistband",
          "Works with both fitted and flowing skirt styles"
        ],
        occasions: ["Date night", "Evening event", "Weekend outing"]
      }
    ]
  },
  {
    id: "jackets",
    name: "Jackets",
    ideas: [
      {
        description: "Draped over the shoulders",
        tips: [
          "Don't put arms through the sleeves",
          "Works best with structured jackets like blazers",
          "Wear a fitted outfit underneath for balance"
        ],
        occasions: ["Fashion event", "Upscale dinner", "Art gallery opening"]
      },
      {
        description: "Belted closed with no visible top",
        tips: [
          "Choose a jacket that closes fully",
          "Add a statement belt to cinch and secure",
          "Wear a camisole underneath for practicality"
        ],
        occasions: ["Evening out", "Cocktail party", "Date night"]
      },
      {
        description: "With rolled sleeves over a dress",
        tips: [
          "Roll sleeves to just below elbow",
          "Choose a fitted dress to contrast with structured jacket",
          "Add minimal accessories to keep the look clean"
        ],
        occasions: ["Office to evening", "Business dinner", "Networking event"]
      },
      {
        description: "With monochrome outfit underneath",
        tips: [
          "Choose an outfit in one color under a contrasting jacket",
          "The jacket becomes the statement piece",
          "Keep accessories minimal and in the same color family as the outfit"
        ],
        occasions: ["Business meeting", "Job interview", "Important presentation"]
      }
    ]
  }
];
