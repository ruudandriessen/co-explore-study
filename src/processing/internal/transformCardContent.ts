import { ContentProperties } from "../../models/RowData";

const WELL_KNOWN_PROPERTIES = [
  "content",
  "work style (remote/on-site/ hybrid)",
  "tools",
  "outputs",
];

function findNextProperty(input: string) {
  const propertyDistance = WELL_KNOWN_PROPERTIES.map((property) => {
    const index = input.indexOf(property);
    return index === -1 ? Infinity : index;
  });

  const minDistance = Math.min(...propertyDistance);

  if (minDistance === Infinity) {
    return null;
  }

  return WELL_KNOWN_PROPERTIES[propertyDistance.indexOf(minDistance)];
}

function getNextPropertyFromString(input: string) {
  const [key, ...remainingSearchText] = input.split(":");

  const nextProperty =
    remainingSearchText.length > 0
      ? findNextProperty(remainingSearchText.join(":"))
      : null;
  if (!nextProperty) {
    return null;
  }

  const [value, ...remaining] = remainingSearchText
    .join(":")
    .split(nextProperty);

  return {
    key: key.trim(),
    value,
    remaining: `${nextProperty}${remaining.join(":")}`,
  };
}

function getAllPropertiesFromString(input: string) {
  let remainingString = input.replace(
    "Can you briefly explain your activities?",
    ""
  );

  let property = getNextPropertyFromString(remainingString);
  let result: Record<string, string> = {};

  while (property != null) {
    const { key, value, remaining } = property;
    remainingString = remaining;
    result[key] = value;

    property = getNextPropertyFromString(remainingString);
  }

  return result;
}

export function transformCardContent(input: string): ContentProperties {
  const properties = getAllPropertiesFromString(input);
  const content = properties["content"]?.trim();
  const workStyle = properties["work style (remote/on-site/ hybrid)"]?.trim();
  const tools = properties["tools"];
  const outputs = properties["outputs"];

  return {
    content,
    workStyle,
    tools: tools ? tools.split(",").map((tool) => tool.trim()) : [],
    outputs: outputs ? outputs.split(",").map((output) => output.trim()) : [],
  };
}