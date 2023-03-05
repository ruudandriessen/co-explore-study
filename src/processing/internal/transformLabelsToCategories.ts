export enum LabelCategory {
  TeamCommunication = "Team communication activities",
  Ideation = "Ideation activities",
  Prototyping = "Prototyping",
  Research = "Research activities",
  DemoDay = "Demo day deliverables",
}

const LABEL_MAPPING: Record<string, LabelCategory> = {
  "planned meeting": LabelCategory.TeamCommunication,
  "chance meeting": LabelCategory.TeamCommunication,
  presenting: LabelCategory.TeamCommunication,
  feedback: LabelCategory.TeamCommunication,
  reflection: LabelCategory.TeamCommunication,
  discussion: LabelCategory.TeamCommunication,
  "decision making": LabelCategory.TeamCommunication,
  planning: LabelCategory.TeamCommunication,
  preparation: LabelCategory.TeamCommunication,
  bonding: LabelCategory.TeamCommunication,
  "coordinating with others": LabelCategory.TeamCommunication,
  "squad activity": LabelCategory.TeamCommunication,

  brainstorming: LabelCategory.Ideation,
  ideation: LabelCategory.Ideation,
  conceptualising: LabelCategory.Ideation,
  sketching: LabelCategory.Ideation,
  illustrating: LabelCategory.Ideation,
  scenarios: LabelCategory.Ideation,
  storyboards: LabelCategory.Ideation,
  "finding inspiration": LabelCategory.Ideation,
  mindmaps: LabelCategory.Ideation,
  "mood boards": LabelCategory.Ideation,
  "journey maps": LabelCategory.Ideation,
  "role playing": LabelCategory.Ideation,
  experiencing: LabelCategory.Ideation,
  exploration: LabelCategory.Ideation,

  "material exploration": LabelCategory.Prototyping,
  "digital prototyping": LabelCategory.Prototyping,
  "physical prototyping": LabelCategory.Prototyping,
  calculation: LabelCategory.Prototyping,
  finalizing: LabelCategory.Prototyping,

  conference: LabelCategory.Research,
  "literature reading": LabelCategory.Research,
  research: LabelCategory.Research,
  testing: LabelCategory.Research,
  interview: LabelCategory.Research,
  questionnaire: LabelCategory.Research,
  observation: LabelCategory.Research,
  "data preparing": LabelCategory.Research,
  analysis: LabelCategory.Research,

  photos: LabelCategory.DemoDay,
  videos: LabelCategory.DemoDay,
  poster: LabelCategory.DemoDay,
  pitch: LabelCategory.DemoDay,
  "set-up": LabelCategory.DemoDay,
  "report writing": LabelCategory.DemoDay,
  "demo day": LabelCategory.DemoDay,
};

export function transformLabelsToCategories(labels: string[]) {
  const categories = new Set<LabelCategory>();
  labels.map((label) => {
    const category = LABEL_MAPPING[label.toLowerCase()];
    if (category) {
      categories.add(category);
    }
  });

  return Array.from(categories);
}
