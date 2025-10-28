import { Reveal } from "@/components/ui/reveal"
import { Linkedin, Twitter, Github } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

const teamMembers: TeamMember[] = [
  {
   {
  id: 1,
  name: "Hamza Ejaz",
  role: "Chief Executive Officer",
  bio: "As the CEO of Wrapify Solutions, I lead with vision and execution—turning ideas into measurable results. My focus is on driving innovation, empowering teams, and building partnerships that deliver real impact.",
  image: "/images/ceo.png",
  social: { linkedin: "https://www.linkedin.com/in/hamzaejaz-" },
},
{
  id: 2,
  name: "Bilal Hassan",
  role: "Chief Operational Officer",
  bio: "As COO, I focus on operational excellence and technological advancement, ensuring seamless project execution and sustainable growth for our clients and company alike.",
  image: "/images/cto.png",
  social: { linkedin: "https://media.licdn.com/dms/image/v2/D4D03AQFjbHIZDc3arw/profile-displayphoto-crop_800_800/B4DZl2pqJnJYAI-/0/1758632257864?e=1762992000&v=beta&t=ydVgD8eVDaUwHVvouwwAgTKfsn_mMWN-wpBrP_62InQ" },
},
{
  id: 3,
  name: "Wasif Mehmod",
  role: "AI Team Lead",
  bio: "Leading the AI division with a focus on research, innovation, and scalable solutions. Passionate about leveraging data and intelligence to build smarter digital ecosystems.",
  image: "/images/coo.png",
  social: { linkedin: "https://www.linkedin.com/in/wasifmehmod/" },
},
{
  id: 4,
  name: "Muhammad Atif Khan",
  role: "Web Team Lead",
  bio: "Dedicated to developing high-performance, user-centric web solutions that merge creativity with functionality. I aim to build scalable architectures that empower digital transformation.",
  image: "/placeholder.svg?height=480&width=360",
  social: { linkedin: "https://media.licdn.com/dms/image/v2/D4D03AQEbntOxJ67qLg/profile-displayphoto-scale_400_400/B4DZgS81RjHwAg-/0/1752664594165?e=1762992000&v=beta&t=c7-185a4n0_Sn5qxgneueYE368LAGmrSeM_iaFp0XRA" },
},
{
  id: 5,
  name: "Misbah Raazaq",
  role: "UI/UX Designer",
  bio: "A design enthusiast committed to crafting intuitive and engaging user experiences. I bridge creativity with strategy to design interfaces that are both functional and visually stunning.",
  image: "/placeholder.svg?height=480&width=360",
  social: {linkedin: "https://media.licdn.com/dms/image/v2/D5603AQHHiIm1wE-i5g/profile-displayphoto-scale_400_400/B56ZmmgszNJ0Ak-/0/1759435215831?e=1762992000&v=beta&t=PZ0FjXOeEIIZnzdEMSbw3Hac53z0eeHipIBzI7vX6to" },
}

]

interface TeamSectionProps {
  showAll?: boolean
}

export default function TeamSection({ showAll = true }: TeamSectionProps) {
  const displayMembers = showAll ? teamMembers : teamMembers.slice(0, 3)

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        {!showAll && (
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-gray-600 dark:text-gray-300">Meet the team driving innovation and excellence</p>
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayMembers.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.05}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={member.image || "/placeholder.svg?height=480&width=360&query=team+member"}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-3 justify-center">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary transition-colors duration-300"
                          aria-label={`${member.name}'s LinkedIn`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-5 w-5 text-white" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary transition-colors duration-300"
                          aria-label={`${member.name}'s Twitter`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="h-5 w-5 text-white" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary transition-colors duration-300"
                          aria-label={`${member.name}'s GitHub`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
