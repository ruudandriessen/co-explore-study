import {
  LabelCategory,
  transformLabelsToCategories,
} from "./transformLabelsToCategories";

const GROUP_REGEX = /[Gg]([0-9])[Pp]([0-9+]+)/;

export function transformLabels(input: string): {
  labels: string[];
  group?: number;
  participants: number[];
  categories: LabelCategory[];
} {
  const groupLabel = input.match(GROUP_REGEX);

  if (!groupLabel) {
    const labels = input
      .split(",")
      .map((label) => label.trim())
      .filter((label) => label != "");

    return {
      labels,
      participants: [],
      categories: transformLabelsToCategories(labels),
    };
  }

  const [groupLabelContent, group, participants] = groupLabel;

  const labels = input
    .replace(groupLabelContent, "")
    .split(",")
    .map((label) => label.trim())
    .filter((label) => label != "");

  return {
    labels,
    group: parseInt(group),
    participants: participants
      .split("+")
      .map((participant) => parseInt(participant)),
    categories: transformLabelsToCategories(labels),
  };
}
