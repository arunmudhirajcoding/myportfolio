import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Heading from "./Heading";

const certificates = [
  {
    id: 1,
    title: "Galactic Problem Solver",
    issuer: "NASA International Space Apps Challenge",
    date: "October 5–6, 2024",
    description:
      "Recognized for outstanding participation and efforts to address challenges we face on Earth and in space during the 2024 NASA International Space Apps Challenge.",
    image: "/certificates/nasa-space-apps.png",
    avatar: "/AboutProfile.png",
    credentialId: "",
    credentialUrl: "https://drive.google.com/file/d/1Xth6QtpJ7tdOdZswqwdQ72GB3tiLzD9Z/view?usp=sharing",
  },
  {
    id: 2,
    title: "IBM SkillsBuild Gen AI & Cloud Computing Internship",
    issuer: "BharatCares",
    date: "June 22 – July 31, 2026",
    description:
      "Successfully completed a 6-week IBM SkillsBuild Gen AI & Cloud Computing Internship conducted by BharatCares in association with AICTE and IBM SkillsBuild.",
    image: "/certificates/ibm-skillsbuild-internship.png",
    avatar: "/AboutProfile.png",
    credentialId: "BHIBMAC15522",
    credentialUrl: "https://drive.google.com/file/d/1OyJ8MTewdzMOE_LPbUyv_Lx7COobqYYy/view?usp=sharing",
  },
  {
    id: 3,
    title: "DevOps 101: What is DevOps?",
    issuer: "Simplilearn SkillUp",
    date: "October 11, 2025",
    description:
      "Successfully completed the DevOps 101 course, demonstrating initiative and commitment to developing skills in DevOps and advancing professional knowledge.",
    image: "/certificates/devops-101.png",
    avatar: "/AboutProfile.png",
    credentialId: "9145103",
    credentialUrl: "https://drive.google.com/file/d/1VED77NWaQCtQdz7BIb0bLC0cjZNeNsWT/view?usp=sharing",
  },
  {
    id: 4,
    title: "Alpha (DSA with Java)",
    issuer: "Apna College",
    date: "Certificate of Completion",
    description:
      "Successfully completed the Alpha course focused on Data Structures and Algorithms with Java.",
    image: "/certificates/dsa-java.png",
    avatar: "/AboutProfile.png",
    credentialId: "67b4b39789dd03099d026cc4",
    credentialUrl: "https://drive.google.com/file/d/1m6B8UNYqPf8Y0x6r24h9BWufwtFhzCFB/view?usp=sharing",
  },
  {
    id: 5,
    title: "PCAP - Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "November 19, 2024",
    description:
      "Successfully completed Partner: PCAP - Programming Essentials in Python through the Cisco Networking Academy program.",
    image: "/certificates/python-pcap.png",
    avatar: "/AboutProfile.png",
    credentialId: "",
    credentialUrl: "https://drive.google.com/file/d/1s5Z_bmmB9usQiRtA86mODw79vs0L9-BG/view?usp=sharing",
  },
  {
    id: 6,
    title: "Delta (Full Stack Web Development)",
    issuer: "Apna College",
    date: "Certificate of Completion",
    description:
      "Successfully completed the Delta course focused on Full Stack Web Development.",
    image: "/certificates/full-stack-web-development.png",
    avatar: "/AboutProfile.png",
    credentialId: "6866a33c7f416c1e450326a8",
    credentialUrl: "https://drive.google.com/file/d/1cMPsjKz8pfCn3echyVAu5DMmJ367CanA/view?usp=sharing",
  },
];

const TitleComponent = ({
  title,
  avatar,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={avatar}
        height="24"
        width="24"
        alt={title}
        className="rounded-full border-2 border-white object-cover"
      />
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
};

const CertificateCard = ({
  certificate,
}) => {
  return (
    <FollowerPointerCard
      title={
        <TitleComponent
          title={certificate.issuer}
          avatar={certificate.avatar}
        />
      }
    >
      <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-zinc-800 bg-zinc-950">
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-zinc-100 bg-zinc-900">
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-95 group-hover:rounded-2xl"
          />

          <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/5" />
        </div>

        <div className="p-5">
          <div className="mb-3">
            <p className="text-xs font-medium uppercase tracking-wide text-blue-600 text-blue-400">
              {certificate.issuer}
            </p>

            <h2 className="mt-2 text-lg font-bold leading-snug text-zinc-100">
              {certificate.title}
            </h2>
          </div>

          <p className="line-clamp-3 text-sm leading-6 text-zinc-400">
            {certificate.description}
          </p>

          <div className="mt-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-zinc-400">
                Issued / Completed
              </p>

              <p className="mt-1 text-sm font-medium text-zinc-300">
                {certificate.date}
              </p>
            </div>

            {certificate.credentialUrl ? (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-black transition hover:bg-zinc-100 hover:text-black"
              >
                View Certificate
              </a>
            ) : (
              <div className="relative z-10 rounded-xl bg-white  px-5 py-2.5 text-xs font-bold text-black">
                Certificate
              </div>
            )}
          </div>

          {certificate.credentialId && (
            <div className="mt-4 border-t border-zinc-100 pt-3 border-zinc-800">
              <p className="text-xs text-zinc-400">
                Credential ID
              </p>

              <p className="mt-1 break-all text-xs font-medium text-zinc-300">
                {certificate.credentialId}
              </p>
            </div>
          )}
        </div>
      </div>
    </FollowerPointerCard>
  );
};

export default function CertificatesSection() {
  return (
    <div
      className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        			<Heading text={"Certifications & Achievements"} />


        <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg">
          A collection of certifications, internships, and learning
          experiences that have helped me strengthen my technical and
          problem-solving skills.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
          />
        ))}
      </div>
      
    </div>
  );
}