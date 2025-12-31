import { ReactNode } from "react";
import { Target, Settings, FileImage, MessageSquare } from "lucide-react";

interface ProjectSection {
  title: string;
  icon: ReactNode;
  content: ReactNode;
}

interface ProjectCardProps {
  chapterNumber: number;
  title: string;
  objectives: string[];
  process: ReactNode;
  evidence: ReactNode;
  reflection: ReactNode;
}

const ProjectCard = ({
  chapterNumber,
  title,
  objectives,
  process,
  evidence,
  reflection,
}: ProjectCardProps) => {
  const sections: ProjectSection[] = [
    {
      title: "Mục tiêu học tập",
      icon: <Target className="w-5 h-5 text-primary" />,
      content: (
        <ul className="list-disc list-inside space-y-2 text-body">
          {objectives.map((obj, index) => (
            <li key={index}>{obj}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Quá trình thực hiện",
      icon: <Settings className="w-5 h-5 text-primary" />,
      content: process,
    },
    {
      title: "Minh chứng và sản phẩm",
      icon: <FileImage className="w-5 h-5 text-primary" />,
      content: evidence,
    },
    {
      title: "Phản ánh và đánh giá",
      icon: <MessageSquare className="w-5 h-5 text-primary" />,
      content: reflection,
    },
  ];

  return (
    <article className="card-academic animate-fade-in" style={{ animationDelay: `${chapterNumber * 0.1}s` }}>
      {/* Header */}
      <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
        <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
          <span className="text-primary font-bold text-xl">{chapterNumber}</span>
        </div>
        <div>
          <p className="text-sm text-caption font-medium mb-1">Chương {chapterNumber}</p>
          <h3 className="text-xl lg:text-2xl font-semibold text-heading">{title}</h3>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center gap-2">
              {section.icon}
              <h4 className="font-semibold text-heading">{section.title}</h4>
            </div>
            <div className="pl-7">{section.content}</div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
