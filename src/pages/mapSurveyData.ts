const ENTRIES = [
  "Team composition - size",
  "Team composition - individual expertise",
  "Team composition - team expertise",
  "Team composition - group culture",
  "Team composition - leadership styles (1)",
  "Team composition - leadership styles (consult)",
  "Team composition - team member relations",
  "Communication - multilingual team",
  "Communication - common language",
  "Communication - impact of language",
  "Distribution",
  "Information - form (Design artifacts)",
  "Information - form (process knowledge)",
  "Information - ownership",
  "Nature of problem - equal contribution",
  "Nature of problem - coupling of sub-tasks",
  "Nature of problem - Individual exploration",
  "Nature of problem - Co-exploration",
];

function average(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function mapTeamComposition(row: Record<string, string>) {
  const size = row["Team composition - size"];
  const individualExpertise = row["Team composition - individual expertise"];
  const teamExpertise = row["Team composition - team expertise"];
  const groupCulture = row["Team composition - group culture"];
  const leadershipStyles1 = row["Team composition - leadership styles (1)"];
  const leadershipStylesConsult =
    row["Team composition - leadership styles (consult)"];
  const teamMemberRelations = row["Team composition - team member relations"];

  return average([
    Number(size),
    Number(individualExpertise),
    Number(teamExpertise),
    Number(groupCulture),
    Number(leadershipStyles1),
    Number(leadershipStylesConsult),
    Number(teamMemberRelations),
  ]);
}

function mapCommunication(row: Record<string, string>) {
  const multilingualTeam = row["Communication - multilingual team"];
  const commonLanguage = row["Communication - common language"];
  const impactOfLanguage = row["Communication - impact of language"];

  return average([
    Number(multilingualTeam),
    Number(commonLanguage),
    Number(impactOfLanguage),
  ]);
}

function mapDistribution(row: Record<string, string>) {
  const distribution = row["Distribution"];
  return Number(distribution);
}

function mapInformation(row: Record<string, string>) {
  const formDesignArtifacts = row["Information - form (Design artifacts)"];
  const formProcessKnowledge = row["Information - form (process knowledge)"];
  const ownership = row["Information - ownership"];

  return average([
    Number(formDesignArtifacts),
    Number(formProcessKnowledge),
    Number(ownership),
  ]);
}

function mapNatureOfProblem(row: Record<string, string>) {
  const equalContribution = row["Nature of problem - equal contribution"];
  const couplingOfSubTasks = row["Nature of problem - coupling of sub-tasks"];
  const individualExploration =
    row["Nature of problem - Individual exploration"];
  const coExploration = row["Nature of problem - Co-exploration"];

  return average([
    Number(equalContribution),
    Number(couplingOfSubTasks),
    Number(individualExploration),
    Number(coExploration),
  ]);
}

function mapSurveyDataRow(row: Record<string, string>) {
  return {
    id: row["ID"],
    teamId: row["Team name"],
    "Team composition": mapTeamComposition(row),
    Communication: mapCommunication(row),
    Distribution: mapDistribution(row),
    Information: mapInformation(row),
    "Nature of problem": mapNatureOfProblem(row),
  };
}

export function mapSurveyData(row: Record<string, string>[]) {
  return row.map(mapSurveyDataRow);
}
