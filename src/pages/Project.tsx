import { useNavigate, useParams } from "react-router-dom";
import { Team } from "../components";
import data from "../data/output.json";
import { useEffect } from "react";

interface ProjectInfo {
  "Group No.": number;
  "Project Title": string;
  "Team Members": string;
  "Guide": string;
  "Co-guide": string; // Optional property
  "Project Description (300-700 words)": string;
  "GitHub Link": string;
  "Demo Video Link": string;
  "Project Domain": string;
}

export default function Project() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const projectData  = data.find((project) => project["Group No."].toString() === projectId);
  let projectInfo: ProjectInfo;
  useEffect(() => {
    if(projectInfo === undefined) {
      navigate('/')
    }
    window.scrollTo(0, 0);
  }, [])
  projectInfo = {
                  "Group No.":0, 
                  "Project Title": 
                  "Project title", 
                  "Team Members": "Team Members", 
                  "Guide": "Guide",
                  "Co-guide": "Co-guide", 
                  "Project Description (300-700 words)": "Project Description (300-700 words)", 
                  "GitHub Link": "GitHub Link", 
                  "Demo Video Link": "Demo Video Link", 
                  "Project Domain":"Project Domain"
                };
  if(projectData !== undefined) projectInfo = projectData;
  let teamInfo: string[] = ["temp"];
  const teamMentors = [projectInfo?.['Guide'], projectInfo?.["Co-guide"]];
  const teamMembers = projectInfo["Team Members"].split(',');
  if(teamMentors !== undefined){
    teamInfo.pop();
    teamInfo.push(...teamMentors);
  }
  if(teamMembers !== undefined){
    teamInfo.push(...teamMembers);
  }
  
  return (
    <div className="flex flex-col justify-between p-6 md:p-14 md:gap-10 md:flex-row">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-left">{(projectInfo && projectInfo["Project Title"]) || "BE Project"}</h2>
        <div className="flex flex-col text-left opacity-60 gap-4">
          <p>
            {(projectInfo && projectInfo["Project Description (300-700 words)"]) || "Project Description"}
          </p>
          <p>
            {(projectInfo && projectInfo["Project Description (300-700 words)"]) || "Project Description"}
          </p>
          <p>
            {(projectInfo && projectInfo["Project Description (300-700 words)"]) || "Project Description"}
          </p>
        </div>
        <div>
          <iframe
            className="w-full h-[300px] md:min-h-[450px]"
            src={(projectInfo && projectInfo["Demo Video Link"]) || "https://www.youtube.com/embed/WPl10ZrhCtk?si=dkPXWysF-RYY7BRR"}
            title="video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-left">
          <a
            className="text-blue-600 italic font-semibold underline"
            href={(projectInfo && projectInfo["GitHub Link"]) || "https://www.github.com/404"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <Team team={teamInfo} />
    </div>
  );
}
