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
    id: 1,
    name: "Hamza Ejaz",
    role: "Chief Executive Officer",
    bio: "As CEO, I prioritize results over words. Partner with us for real outcomes.",
    image: "/images/ceo.png",
    social: {
      linkedin: "https://www.linkedin.com/in/hamzaejaz-",
    },
  },

  {
    id: 2,
    name: "Bilal Hassan ",
    role: "Chief Operating Officer",
    bio: "Driving Operational Excellence and Strategic Growth to Elevate our Company's Success.",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQE5W741EuYqPA/profile-framedphoto-shrink_400_400/B4DZZSifTNGwAc-/0/1745141495313?e=1759237200&v=beta&t=7s1Utf91Y6wemr79tuHZb6MdKy5J3uKgIjH9v9_HZHQ",
    social: {
      linkedin: "https://www.linkedin.com/in/bilal-hassan-783249231/",
    },
  },
]

interface TeamSectionProps {
  showAll?: boolean
}

export default function TeamSection({ showAll = false }: TeamSectionProps) {
  const displayMembers = showAll ? teamMembers : teamMembers.slice(0, 3)

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        {!showAll && (
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Meet the experts behind HamHib Coders who are driving innovation and excellence
              </p>
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayMembers.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-3 justify-center">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
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
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
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
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
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
                  <p className="text-pink-600 dark:text-pink-400 font-medium mb-3">{member.role}</p>
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
