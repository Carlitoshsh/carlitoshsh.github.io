import raw from "./data.json";

export type Resume = typeof raw;

export const resume: Resume = raw as Resume;

export interface DataItem {
  icon?: string;
  name: string;
  description: string;
  image?: string;
}

const iconMap: Record<string, string> = {
  javascript: "devicon-javascript-plain",
  typescript: "devicon-typescript-plain",
  html: "devicon-html5-plain-wordmark",
  css: "devicon-css3-plain-wordmark",
  angular: "devicon-angularjs-plain",
  java: "devicon-java-plain",
  dotnet: "devicon-dotnetcore-plain",
  dotnetcore: "devicon-dotnetcore-plain",
  csharp: "devicon-dotnetcore-plain",
  svelte: "devicon-svelte-plain",
  nodejs: "devicon-nodejs-plain",
  node: "devicon-nodejs-plain",
  react: "devicon-react-original",
  vue: "devicon-vuejs-plain",
  vuejs: "devicon-vuejs-plain",
  python: "devicon-python-plain",
};

function makeKey(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
}

const rawSkills: string[] =
  (resume.Skills && resume.Skills.Programming_Languages) || [];

const skillSet = new Map<string, DataItem>();

rawSkills.forEach((entry) => {
  const parts = entry
    .split(/[\/,&|]+/)
    .map((p) => p.trim())
    .filter(Boolean);
  parts.forEach((p) => {
    const key = makeKey(p);
    if (!skillSet.has(key)) {
      skillSet.set(key, {
        icon: iconMap[key] || "",
        name: p,
        description: p,
      });
    }
  });
});

export const programmingLanguages: DataItem[] = Array.from(skillSet.values());

export const projects: DataItem[] = (resume.Work_Experiences || []).map(
  (w: any) => ({
    image: "",
    name: w.Position
      ? `${w.Position} — ${w.Company || ""}`
      : w.Company || "Untitled",
    description: Array.isArray(w.Description)
      ? w.Description.join(" \n\n")
      : w.Description || "",
  })
);

export default resume;
