module.exports = {
    // Core speaking topics with detailed information
    topics: [
        {
            id: "ai-leadership",
            title: "Building AI-Ready Organizations",
            subtitle: "Strategic Leadership for the AI Era",
            description:
                "How technical leaders can prepare their organizations for AI transformation while maintaining human-centered culture and innovation velocity.",
            keyPoints: [
                "AI strategy development and implementation roadmaps",
                "Building cross-functional AI teams and governance",
                "Ethical AI frameworks and responsible innovation",
                "Change management for AI adoption",
                "Measuring AI ROI and organizational impact",
            ],
            audiences: ["CTOs", "Engineering Leaders", "Product Leaders", "C-Suite"],
            duration: {
                keynote: "45-60 minutes",
                workshop: "3-4 hours",
                masterclass: "Full day",
            },
            formats: ["keynote", "workshop", "panel", "masterclass"],
            industries: ["Technology", "Financial Services", "Healthcare", "Manufacturing", "Retail"],
            level: "Executive/Senior Leadership",
            tags: ["AI", "Strategy", "Leadership", "Innovation", "Transformation"],
            featured: true,
            image: "/images/topics/ai-leadership.jpg",
            testimonial: {
                quote: "Transformative insights on building AI-ready culture while maintaining innovation velocity.",
                author: "Sarah Chen",
                title: "CTO, TechCorp",
                company: "Fortune 500 Technology Company",
            },
        },
        {
            id: "cross-cultural-teams",
            title: "Leading Global Technical Teams",
            subtitle: "Cross-Cultural Leadership in Technology",
            description:
                "Strategies for building high-performing technical teams across cultures, time zones, and diverse backgrounds while maintaining innovation and collaboration.",
            keyPoints: [
                "Cultural intelligence for technical leaders",
                "Remote and hybrid team dynamics",
                "Communication strategies across cultures",
                "Building inclusive technical cultures",
                "Global talent acquisition and retention",
            ],
            audiences: ["Engineering Managers", "CTOs", "HR Leaders", "Global Team Leads"],
            duration: {
                keynote: "45 minutes",
                workshop: "2-3 hours",
                masterclass: "Half day",
            },
            formats: ["keynote", "workshop", "panel"],
            industries: ["Technology", "Consulting", "Financial Services", "Startups"],
            level: "Mid to Senior Leadership",
            tags: ["Leadership", "Culture", "Global Teams", "Diversity", "Communication"],
            featured: true,
            image: "/images/topics/global-teams.jpg",
            testimonial: {
                quote: "Essential insights for any leader managing distributed technical teams.",
                author: "Marcus Rodriguez",
                title: "VP Engineering",
                company: "Global Software Company",
            },
        },
        {
            id: "scaling-innovation",
            title: "Scaling Innovation Through Hypergrowth",
            subtitle: "Maintaining Velocity While Growing",
            description:
                "How to preserve startup innovation culture and technical excellence while scaling from dozens to thousands of engineers.",
            keyPoints: [
                "Preserving innovation culture at scale",
                "Technical architecture for hypergrowth",
                "Engineering hiring and onboarding strategies",
                "Maintaining code quality and technical debt",
                "Leadership development during rapid scaling",
            ],
            audiences: ["Startup CTOs", "Scale-up Leaders", "Engineering VPs", "Founders"],
            duration: {
                keynote: "45 minutes",
                workshop: "3 hours",
                fireside: "30 minutes",
            },
            formats: ["keynote", "workshop", "fireside", "panel"],
            industries: ["Startups", "Scale-ups", "Technology", "Venture Capital"],
            level: "Senior Leadership",
            tags: ["Scaling", "Innovation", "Culture", "Architecture", "Growth"],
            featured: true,
            image: "/images/topics/scaling-innovation.jpg",
            testimonial: {
                quote: "Practical strategies that helped us scale from 50 to 500 engineers successfully.",
                author: "Jennifer Kim",
                title: "CTO & Co-founder",
                company: "Series B Startup",
            },
        },
        {
            id: "technical-due-diligence",
            title: "Technical Due Diligence for Leaders",
            subtitle: "Evaluating Technical Organizations",
            description:
                "Framework for assessing technical teams, architecture, and processes during acquisitions, investments, or organizational changes.",
            keyPoints: [
                "Technical assessment frameworks",
                "Code quality and architecture evaluation",
                "Team capability assessment",
                "Technical debt analysis",
                "Integration planning and risk assessment",
            ],
            audiences: ["Investors", "M&A Leaders", "Board Members", "Executive Teams"],
            duration: {
                workshop: "4 hours",
                masterclass: "Full day",
                consultation: "Custom",
            },
            formats: ["workshop", "masterclass", "consultation"],
            industries: ["Venture Capital", "Private Equity", "Investment Banking", "Technology"],
            level: "Executive",
            tags: ["Due Diligence", "Assessment", "M&A", "Investment", "Risk"],
            featured: false,
            image: "/images/topics/due-diligence.jpg",
        },
    ],

    // Speaking formats with descriptions
    formats: {
        keynote: {
            title: "Keynote Presentation",
            description: "High-impact opening or closing presentations for conferences and major events",
            duration: "45-60 minutes",
            audience: "200-5000 attendees",
            includes: ["Custom presentation", "Q&A session", "Meet & greet"],
        },
        workshop: {
            title: "Interactive Workshop",
            description: "Hands-on learning sessions with practical exercises and group work",
            duration: "2-4 hours",
            audience: "20-100 participants",
            includes: ["Workbook materials", "Group exercises", "Action planning"],
        },
        masterclass: {
            title: "Executive Masterclass",
            description: "Deep-dive sessions for senior leadership with case studies and strategic planning",
            duration: "Half or full day",
            audience: "10-30 executives",
            includes: ["Case study analysis", "Strategic frameworks", "Individual coaching"],
        },
        panel: {
            title: "Panel Discussion",
            description: "Moderated discussions with industry peers on trending topics",
            duration: "45-90 minutes",
            audience: "100-1000 attendees",
            includes: ["Topic preparation", "Audience Q&A", "Networking"],
        },
        fireside: {
            title: "Fireside Chat",
            description: "Intimate conversational format with interviewer or moderator",
            duration: "30-45 minutes",
            audience: "50-500 attendees",
            includes: ["Pre-interview prep", "Audience Q&A", "Casual networking"],
        },
    },

    // Audience types and their characteristics
    audiences: {
        CTOs: {
            title: "Chief Technology Officers",
            description: "Senior technology executives responsible for technical strategy and innovation",
            interests: ["Technical strategy", "Team scaling", "Innovation management", "Digital transformation"],
        },
        "Engineering Leaders": {
            title: "Engineering Leaders",
            description: "VPs, Directors, and Senior Managers leading technical teams",
            interests: ["Team management", "Technical excellence", "Career development", "Process optimization"],
        },
        Founders: {
            title: "Technical Founders",
            description: "Startup and scale-up founders with technical backgrounds",
            interests: ["Scaling challenges", "Technical hiring", "Product development", "Investment readiness"],
        },
        Investors: {
            title: "Investors & Board Members",
            description: "VCs, PEs, and board members evaluating technical organizations",
            interests: ["Due diligence", "Risk assessment", "Technical evaluation", "Growth planning"],
        },
    },
}
