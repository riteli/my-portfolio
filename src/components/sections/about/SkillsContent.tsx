import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import SkillCard from "@/components/ui/SkillCard";

export default function SkillsContent() {
  return (
    <div className="space-y-8 font-sans h-full pr-2">
      <div>
        <h4 className="text-accent font-serif border-b border-accent/30 pb-2 mb-4 inline-block tracking-wider">
          Languages
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkillCard
            icon={<SiHtml5 size={28} />}
            title="HTML5"
            description="セマンティックな記述を心がけています"
          />
          <SkillCard
            icon={<SiCss3 size={28} />}
            title="CSS3"
            description="レスポンシブデザインを意識したレイアウト構築が可能です"
          />
          <SkillCard
            icon={<SiJavascript size={28} />}
            title="JavaScript"
            description="基礎的なロジック記述とDOM操作が可能です"
          />
          <SkillCard
            icon={<SiTypescript size={28} />}
            title="TypeScript"
            description="型安全性を意識し、保守性の高いコードを書くよう心がけています"
          />
        </div>
      </div>

      <div>
        <h4 className="text-accent font-serif border-b border-accent/30 pb-2 mb-4 inline-block tracking-wider">
          Frameworks & Libraries
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkillCard
            icon={<SiReact size={28} />}
            title="React"
            description="Hooksを用いたコンポーネント開発が可能です"
          />
          <SkillCard
            icon={<SiNextdotjs size={28} />}
            title="Next.js"
            description="App Routerを用いた基本的な構築が可能です"
          />
          <SkillCard
            icon={<SiTailwindcss size={28} />}
            title="Tailwind"
            description="基本的なスタイリングとレスポンシブ対応が可能です"
          />
        </div>
      </div>

      <div>
        <h4 className="text-accent font-serif border-b border-accent/30 pb-2 mb-4 inline-block tracking-wider">
          Tools
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkillCard
            icon={<SiGit size={28} />}
            title="Git"
            description="基本操作とブランチワークを理解しています"
          />
          <SkillCard
            icon={<SiGithub size={28} />}
            title="GitHub"
            description="PRを用いたコード管理とレビューフローを学習中です"
          />
          <SkillCard
            icon={<SiFigma size={28} />}
            title="Figma"
            description="カンプの確認と簡単な編集が可能です"
          />
          <SkillCard
            icon={<SiVercel size={28} />}
            title="Vercel"
            description="デプロイ環境として利用しています"
          />
        </div>
      </div>
    </div>
  );
}
