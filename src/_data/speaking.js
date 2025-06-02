const topics = [
    // === STRATEGIC LEADERSHIP & CAREER DEVELOPMENT ===
    {
        id: "strategic-questioning",
        title: "Strategic Thinking for Technical Leaders",
        subtitle: "Learning to Ask the Right Questions",
        description: "Master the art of strategic inquiry that separates exceptional technical leaders from individual contributors. Explore frameworks for asking questions that uncover root causes, reveal hidden assumptions, and drive innovation. Learn how the right questions at the right time can transform team dynamics, technical decisions, and organizational outcomes.",
        audiences: ["Engineering Leaders", "Engineering Managers", "Senior Engineers"],
        formats: ["keynote", "session", "workshop"],
        featured: true
    },
    {
        id: "tech-career-navigation",
        title: "Navigating Technical Career Growth",
        subtitle: "From Code to Leadership Excellence", 
        description: "A comprehensive guide for students and early-career professionals on building successful technology careers. Covers technical skill development, networking strategies, interview preparation, and the critical transition from individual contributor to technical leadership roles. Includes real-world insights from 20+ years across startups, big tech, and entertainment industries.",
        audiences: ["Students & Early Career", "Engineering Teams", "Engineering Managers"],
        formats: ["session", "workshop", "masterclass"],
        featured: true
    },
    {
        id: "ai-creative-storytelling",
        title: "The Paths of Wisdom: Navigating AI's Role in Creative Storytelling",
        subtitle: "Technology as Creative Companion, Not Replacement",
        description: "Explore how adaptive AI technology is revolutionizing creative and media industries while preserving the human essence of storytelling. Drawing parallels to Tolkien's journey metaphors, this keynote examines the ethical opportunities and challenges of AI in creative processes, ensuring technology serves to amplify rather than replace human creativity and meaning.",
        audiences: ["C-Suite", "Engineering Leaders", "Creative Directors"],
        formats: ["keynote"],
        featured: true
    },

    // === ARCHITECTURE & SYSTEM DESIGN LEADERSHIP ===
    {
        id: "multi-tenant-mastery",
        title: "Multi-Tenant Architecture Strategy",
        subtitle: "One Backend to Rule Them All",
        description: "Master the strategic and technical decisions behind scalable multi-tenant systems. Learn how to design customizable user experiences for different clients while maintaining a single, efficient backend infrastructure. Covers DNS strategies, routing architecture, templating systems, and the leadership decisions that make or break multi-tenant implementations.",
        audiences: ["Engineering Leaders", "Senior Engineers", "Architects"],
        formats: ["session", "workshop"],
        featured: true
    },
    {
        id: "api-security-leadership",
        title: "API Security & Architecture Decisions",
        subtitle: "Building Secure Systems Without Lifting a Server",
        description: "Strategic approaches to API security that balance protection with development velocity. Explore serverless security patterns, OAuth implementation strategies, and the architectural decisions that create scalable, secure systems. Learn how to make security a competitive advantage rather than a bottleneck in your organization.",
        audiences: ["Engineering Leaders", "Senior Engineers", "Architects"],
        formats: ["session", "workshop"],
        featured: false
    },
    {
        id: "observability-strategy",
        title: "Production Observability Strategy",
        subtitle: "Beyond 'It Works on My Machine'",
        description: "Transform your organization's approach to production monitoring and debugging through strategic observability implementation. Learn how OpenTelemetry and modern monitoring practices create actionable insights, reduce mean time to resolution, and build confidence in deployment processes. Essential for leaders managing distributed systems at scale.",
        audiences: ["Engineering Leaders", "Engineering Managers", "Senior Engineers"],
        formats: ["session", "workshop"],
        featured: false
    },

    // === EMERGING TECHNOLOGIES & INNOVATION ===
    {
        id: "iot-innovation-leadership",
        title: "IoT & Edge Computing Strategy",
        subtitle: "Leading Innovation in Connected Systems",
        description: "Strategic insights into IoT implementation and edge computing decisions. Drawing from real-world experience building Disney's room occupancy detection systems, explore how leaders can evaluate emerging technologies, build proof-of-concepts, and scale IoT solutions across organizations. Covers technical architecture, team building, and innovation management.",
        audiences: ["Engineering Leaders", "Senior Engineers", "Innovation Teams"],
        formats: ["session", "workshop"],
        featured: false
    },
    {
        id: "real-time-data-architecture",
        title: "Real-Time Data Architecture for Leaders",
        subtitle: "Strategic Decisions for Data-Driven Organizations",
        description: "Leadership frameworks for building systems that process and analyze data at scale and speed. Explore architectural patterns, technology selection criteria, and team organization strategies for real-time data processing. Learn how to balance performance, cost, and complexity while enabling data-driven decision making across your organization.",
        audiences: ["Engineering Leaders", "Data Leaders", "Architects"],
        formats: ["session", "workshop"],
        featured: false
    },

    // === QUALITY & PROCESS LEADERSHIP ===
    {
        id: "testing-automation-strategy",
        title: "Testing & Quality Strategy Leadership",
        subtitle: "Building Confidence Through Automation",
        description: "Strategic approaches to testing and quality assurance that scale with your organization. Explore automated testing strategies, including full-stack email testing systems, Docker-based ephemeral environments, and quality gates that accelerate rather than slow development. Learn how to build testing cultures that empower teams.",
        audiences: ["Engineering Leaders", "Engineering Managers", "QA Leaders"],
        formats: ["session", "workshop"],
        featured: false
    },
    {
        id: "enterprise-adoption-patterns",
        title: "Technology Adoption in Enterprise Organizations",
        subtitle: "Strategic Technology Selection and Implementation",
        description: "Frameworks for evaluating, adopting, and scaling new technologies across enterprise organizations. Drawing from JavaScript's enterprise adoption journey and other technology transformation stories, learn how to navigate organizational change, build consensus, and implement technology strategies that drive business value.",
        audiences: ["Engineering Leaders", "C-Suite", "Technology Directors"],
        formats: ["keynote", "session"],
        featured: false
    },

    // === CROSS-INDUSTRY INNOVATION ===
    {
        id: "cross-industry-innovation",
        title: "Innovation Across Industries",
        subtitle: "Lessons from Entertainment, Big Tech, and Startups",
        description: "Unique insights from leading technical teams across entertainment (Disney/Lucasfilm), big tech (Amazon/Microsoft), and startup ecosystems. Learn how different industries approach innovation, technical decision-making, and team building. Discover cross-pollination opportunities and how diverse industry experience creates competitive advantages.",
        audiences: ["Engineering Leaders", "C-Suite", "Innovation Teams"],
        formats: ["keynote", "session"],
        featured: true
    }
];

// Helper functions for filtering and organizing topics
function getFeaturedTopics() {
    return topics.filter(topic => topic.featured);
}

function getTopicsByAudience(audienceType) {
    return topics.filter(topic => topic.audiences.includes(audienceType));
}

function getTopicsByFormat(formatType) {
    return topics.filter(topic => topic.formats.includes(formatType));
}

function getTopicById(id) {
    return topics.find(topic => topic.id === id);
}

// === SPEAKING ENGAGEMENTS ===
const engagements = [
    {
        id: "2023-ijs-newyork",
        eventName: "iJS New York",
        organizer: "Software & Support Media Group",
        location: "New York, NY",
        startDate: "2023-09-25",
        endDate: "2023-09-25", 
        website: "https://javascript-conference.com/new-york/",
        status: "completed",
        presentations: [
            {
                title: "Testing & Quality Strategy Leadership",
                type: "session",
                topicId: "testing-automation-strategy",
                duration: "45 minutes",
                audience: "Engineering teams and technical leaders",
                description: "Strategic approaches to automated testing including full-stack email testing systems and Docker-based ephemeral environments that build confidence in deployment processes.",
                isMainPresentation: true
            },
            {
                title: "API Security & Architecture Decisions", 
                type: "session",
                topicId: "api-security-leadership",
                duration: "45 minutes",
                audience: "Engineering leaders and senior developers",
                description: "Strategic approaches to API security using serverless methodologies and OAuth implementation that balance protection with development velocity.",
                isMainPresentation: false
            }
        ]
    },
    {
        id: "2023-allthingsopen-raleigh",
        eventName: "All Things Open 2023",
        organizer: "All Things Open",
        location: "Raleigh, NC",
        startDate: "2023-10-16",
        endDate: "2023-10-16",
        website: "https://2023.allthingsopen.org",
        status: "completed",
        presentations: [
            {
                title: "API Security & Architecture Decisions",
                type: "session", 
                topicId: "api-security-leadership",
                duration: "45 minutes",
                audience: "Engineering leaders and architects",
                description: "Building secure, scalable API systems using serverless security patterns and strategic architectural decisions that create competitive advantages.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2022-ijs-munich",
        eventName: "International JavaScript Conference",
        organizer: "Software & Support Media Group", 
        location: "Munich, Germany",
        startDate: "2022-10-24",
        endDate: "2022-10-24",
        website: "https://javascript-conference.com/munich/",
        status: "completed",
        presentations: [
            {
                title: "Real-Time Data Architecture for Leaders",
                type: "session",
                topicId: "real-time-data-architecture", 
                duration: "45 minutes",
                audience: "Technical leaders and data architects",
                description: "Strategic frameworks for building systems that process and analyze enterprise data at scale, balancing performance, cost, and organizational complexity.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2022-allthingsopen-raleigh",
        eventName: "All Things Open (10th Anniversary)",
        organizer: "All Things Open",
        location: "Raleigh, NC", 
        startDate: "2022-11-02",
        endDate: "2022-11-02",
        website: "https://2022.allthingsopen.org",
        status: "completed",
        presentations: [
            {
                title: "Real-Time Data Architecture for Leaders",
                type: "session",
                topicId: "real-time-data-architecture",
                duration: "60 minutes",
                audience: "Engineering leaders and data teams",
                description: "Extended session on leadership frameworks for real-time data processing, including architectural patterns and technology selection strategies for data-driven organizations.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2021-allthingsopen-raleigh", 
        eventName: "All Things Open",
        organizer: "All Things Open",
        location: "Raleigh, NC",
        startDate: "2021-10-18",
        endDate: "2021-10-18",
        website: "https://allthingsopen.org",
        status: "completed",
        presentations: [
            {
                title: "Real-Time Data Architecture for Leaders",
                type: "session",
                topicId: "real-time-data-architecture",
                duration: "45 minutes", 
                audience: "Technical leaders and engineers",
                description: "Enterprise data processing strategies using Node.js and Redis, focusing on architectural decisions that enable real-time analysis and organizational data capabilities.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2019-musiccitytech-nashville",
        eventName: "Music City Tech",
        organizer: "Music City Tech",
        location: "Nashville, TN",
        startDate: "2019-09-05", 
        endDate: "2019-09-05",
        website: "https://www.musiccitycode.com",
        status: "completed",
        presentations: [
            {
                title: "Emerging Technology Strategy",
                type: "session",
                topicId: "enterprise-adoption-patterns",
                duration: "45 minutes",
                audience: "Technical leaders and engineering teams", 
                description: "Strategic approaches to evaluating and adopting emerging technologies in enterprise environments, with focus on serverless architectures and organizational change management.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2019-opensource101-columbia",
        eventName: "Open Source 101",
        organizer: "Open Source 101",
        location: "Columbia, SC",
        startDate: "2019-04-18",
        endDate: "2019-04-18", 
        website: "https://opensource101.com",
        status: "completed",
        presentations: [
            {
                title: "Emerging Technology Strategy", 
                type: "session",
                topicId: "enterprise-adoption-patterns",
                duration: "45 minutes",
                audience: "Technical leaders and open source contributors",
                description: "Technology adoption frameworks and strategic decision-making for implementing serverless and cloud-native architectures in enterprise organizations.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2019-confoo-montreal",
        eventName: "ConFoo Montreal",
        organizer: "ConFoo", 
        location: "Montreal, QC",
        startDate: "2019-03-13",
        endDate: "2019-03-13",
        website: "https://confoo.ca/en",
        status: "completed",
        presentations: [
            {
                title: "Strategic Thinking for Technical Leaders",
                type: "session",
                topicId: "strategic-questioning",
                duration: "45 minutes",
                audience: "Technical leaders and senior engineers",
                description: "Frameworks for strategic inquiry and decision-making that separate exceptional technical leaders from individual contributors, focusing on question formulation and organizational impact.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2019-jsconfhawaii-honolulu", 
        eventName: "JSConf Hawaii",
        organizer: "JSConf Hawaii",
        location: "Honolulu, HI",
        startDate: "2019-02-17",
        endDate: "2019-02-17",
        website: "https://www.jsconfhi.com",
        status: "completed",
        presentations: [
            {
                title: "Emerging Technology Strategy",
                type: "session", 
                topicId: "enterprise-adoption-patterns",
                duration: "30 minutes",
                audience: "JavaScript developers and technical leaders",
                description: "Strategic technology adoption frameworks with focus on serverless architectures and organizational transformation in rapidly evolving technical landscapes.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2018-nodeinteractive-vancouver",
        eventName: "Node + JS Interactive",
        organizer: "Linux Foundation",
        location: "Vancouver, BC", 
        startDate: "2018-10-17",
        endDate: "2018-10-17",
        website: null,
        status: "completed",
        presentations: [
            {
                title: "Technology Adoption in Enterprise Organizations",
                type: "keynote",
                topicId: "enterprise-adoption-patterns",
                duration: "45 minutes",
                audience: "JavaScript community and enterprise technical leaders",
                description: "Keynote exploring JavaScript's journey from browser scripting to enterprise backbone, examining patterns of technology adoption and organizational transformation in large-scale environments.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2018-allthingsopen-raleigh",
        eventName: "All Things Open",
        organizer: "All Things Open",
        location: "Raleigh, NC",
        startDate: "2018-10-22",
        endDate: "2018-10-22",
        website: "https://allthingsopen.org",
        status: "completed",
        presentations: [
            {
                title: "Emerging Technology Strategy",
                type: "session",
                topicId: "enterprise-adoption-patterns", 
                duration: "45 minutes",
                audience: "Open source contributors and technical leaders",
                description: "Strategic frameworks for technology evaluation and adoption, with focus on serverless architectures and cloud-native transformation strategies.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2018-trilug-raleigh",
        eventName: "Triangle Linux Users Group", 
        organizer: "Triangle Linux Users Group",
        location: "Raleigh, NC",
        startDate: "2018-07-12",
        endDate: "2018-07-12",
        website: "https://trilug.org",
        status: "completed",
        presentations: [
            {
                title: "Emerging Technology Strategy",
                type: "session",
                topicId: "enterprise-adoption-patterns",
                duration: "60 minutes",
                audience: "Linux users and system administrators",
                description: "Technology adoption patterns and strategic decision-making for serverless and cloud infrastructure, with focus on Linux-based enterprise environments.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2018-revolutionconf-virginiabeach",
        eventName: "Revolution Conf",
        organizer: "Revolution Conf", 
        location: "Virginia Beach, VA",
        startDate: "2018-05-18",
        endDate: "2018-05-18",
        website: "https://www.revolutionconf.com",
        status: "completed",
        presentations: [
            {
                title: "Emerging Technology Strategy",
                type: "session",
                topicId: "enterprise-adoption-patterns",
                duration: "45 minutes",
                audience: "Full-stack developers and technical leaders",
                description: "Strategic approaches to serverless adoption and cloud-native transformation, focusing on organizational change management and technology evaluation frameworks.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2018-opensource101-columbia",
        eventName: "Open Source 101",
        organizer: "Open Source 101",
        location: "Columbia, SC", 
        startDate: "2018-04-17",
        endDate: "2018-04-17",
        website: "https://www.opensource101.com",
        status: "completed",
        presentations: [
            {
                title: "IoT & Edge Computing Strategy",
                type: "session",
                topicId: "iot-innovation-leadership",
                duration: "45 minutes",
                audience: "Open source developers and technical leaders",
                description: "Strategic insights into IoT implementation and edge computing decisions, drawing from real-world experience building connected systems at enterprise scale.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2018-ncstate-raleigh",
        eventName: "NC State IT Club",
        organizer: "NC State University",
        location: "Raleigh, NC",
        startDate: "2018-03-20",
        endDate: "2018-03-20", 
        website: "https://www.csc.ncsu.edu/",
        status: "completed",
        presentations: [
            {
                title: "Navigating Technical Career Growth",
                type: "session",
                topicId: "tech-career-navigation",
                duration: "60 minutes",
                audience: "Computer science students and early-career professionals",
                description: "Comprehensive career guidance covering technical skill development, networking strategies, interview preparation, and the transition from student to professional technology roles.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2018-bju-greenville",
        eventName: "BJU Computer Science",
        organizer: "Bob Jones University",
        location: "Greenville, SC",
        startDate: "2018-02-22", 
        endDate: "2018-02-22",
        website: "https://www.bju.edu/academics/programs/computer-science/",
        status: "completed",
        presentations: [
            {
                title: "Navigating Technical Career Growth",
                type: "session",
                topicId: "tech-career-navigation",
                duration: "60 minutes",
                audience: "Computer science students",
                description: "Career insights and strategies for technology students, covering industry trends, skill development, networking, and preparing for successful technology careers.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2018-opensource101-raleigh",
        eventName: "Open Source 101",
        organizer: "Open Source 101", 
        location: "Raleigh, NC",
        startDate: "2018-02-17",
        endDate: "2018-02-17",
        website: "https://www.opensource101.com",
        status: "completed",
        presentations: [
            {
                title: "IoT & Edge Computing Strategy",
                type: "session",
                topicId: "iot-innovation-leadership",
                duration: "45 minutes",
                audience: "Open source developers and IoT enthusiasts",
                description: "Leadership frameworks for IoT implementation using open source technologies, covering strategic decision-making for connected systems and edge computing architectures.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2017-midwestjs-minneapolis",
        eventName: "Midwest JS",
        organizer: "Midwest JS", 
        location: "Minneapolis, MN",
        startDate: "2017-08-17",
        endDate: "2017-08-17",
        website: "https://www.midwestjs.com",
        status: "completed",
        presentations: [
            {
                title: "IoT & Edge Computing Strategy",
                type: "session",
                topicId: "iot-innovation-leadership",
                duration: "30 minutes",
                audience: "JavaScript developers and technical leaders",
                description: "Strategic insights into IoT development using JavaScript and Node.js, covering architectural decisions and team building for connected systems projects.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2017-seattlejs-seattle",
        eventName: "Seattle JS",
        organizer: "Seattle JS Meetup",
        location: "Seattle, WA",
        startDate: "2017-08-17",
        endDate: "2017-08-17",
        website: "https://www.meetup.com/seattlejs", 
        status: "completed",
        presentations: [
            {
                title: "IoT & Edge Computing Strategy",
                type: "session",
                topicId: "iot-innovation-leadership",
                duration: "45 minutes",
                audience: "JavaScript developers and IoT enthusiasts",
                description: "Real-world IoT implementation strategies using JavaScript technologies, with focus on architectural thinking and strategic technology decisions for connected systems.",
                isMainPresentation: true
            }
        ]
    },
    {
        id: "2016-nodevember-nashville",
        eventName: "Nodevember",
        organizer: "Nodevember Conference",
        location: "Nashville, TN",
        startDate: "2016-11-20",
        endDate: "2016-11-20",
        website: "https://www.nodevember.org",
        status: "completed",
        presentations: [
            {
                title: "IoT & Edge Computing Strategy", 
                type: "session",
                topicId: "iot-innovation-leadership",
                duration: "30 minutes",
                audience: "Node.js developers and technical innovators",
                description: "Introduction to IoT development strategies using Node.js and modern web technologies, showcasing real-world implementation experience and strategic decision-making frameworks.",
                isMainPresentation: true
            }
        ]
    },
    
    // === RECENT ENGAGEMENTS (2024-2025) ===
    {
        id: "2024-ijs-mldevops-munich",
        eventName: "iJS Munich",
        organizer: "Software & Support Media Group",
        location: "Munich, Germany",
        startDate: "2024-11-11",
        endDate: "2024-11-15",
        website: "https://javascript-conference.com/munich/",
        status: "completed",
        presentations: [
            {
                title: "The Paths of Wisdom: Navigating AI's Role in Creative Storytelling",
                type: "keynote",
                topicId: "ai-creative-storytelling",
                duration: "45 minutes",
                audience: "C-Suite executives, engineering leaders, and creative directors",
                description: "Keynote exploring how adaptive AI technology revolutionizes creative and media industries while preserving human storytelling essence. Using Tolkien's journey metaphors, examines ethical opportunities and challenges of AI in creative processes, ensuring technology amplifies rather than replaces human creativity and meaning.",
                isMainPresentation: true
            },
            {
                title: "Multi-Tenant Architecture Strategy",
                type: "session",
                topicId: "multi-tenant-mastery",
                duration: "45 minutes",
                audience: "Engineering leaders, senior engineers, and architects",
                description: "Strategic and technical frameworks for building scalable multi-tenant systems with customizable user experiences per client while maintaining efficient single-backend infrastructure. Covers DNS strategies, routing architecture, templating systems, and critical leadership decisions.",
                isMainPresentation: false
            }
        ]
    },
    {
        id: "2024-ijs-mldevops-nyc",
        eventName: "iJS New York",
        organizer: "Software & Support Media Group",
        location: "New York, NY",
        startDate: "2024-09-23",
        endDate: "2024-09-27",
        website: "https://javascript-conference.com/new-york/",
        status: "completed",
        presentations: [
            {
                title: "Production Observability Strategy",
                type: "session",
                topicId: "observability-strategy",
                duration: "45 minutes",
                audience: "Engineering leaders, DevOps teams, and senior engineers",
                description: "Transform organizational approaches to production monitoring and debugging through strategic observability implementation. Learn how OpenTelemetry and modern monitoring practices create actionable insights, reduce mean time to resolution, and build deployment confidence.",
                isMainPresentation: true
            },
            {
                title: "Multi-Tenant Architecture Strategy",
                type: "session",
                topicId: "multi-tenant-mastery",
                duration: "45 minutes",
                audience: "Engineering leaders, senior engineers, and architects",
                description: "Strategic and technical frameworks for building scalable multi-tenant systems with customizable user experiences per client while maintaining efficient single-backend infrastructure. Covers DNS strategies, routing architecture, templating systems, and critical leadership decisions.",
                isMainPresentation: false
            }
        ]
    },
    {
        id: "2025-ijs-mldevops-sandiego",
        eventName: "iJS San Diego",
        organizer: "Software & Support Media Group",
        location: "San Diego, CA",
        startDate: "2025-05-20",
        endDate: "2025-05-21",
        website: "https://javascript-conference.com/san-diego/",
        status: "confirmed",
        presentations: [
            {
                title: "The Paths of Wisdom: Navigating AI's Role in Creative Storytelling",
                type: "keynote",
                topicId: "ai-creative-storytelling",
                duration: "45 minutes",
                audience: "C-Suite executives, engineering leaders, and creative directors",
                description: "Keynote exploring how adaptive AI technology revolutionizes creative and media industries while preserving human storytelling essence. Using Tolkien's journey metaphors, examines ethical opportunities and challenges of AI in creative processes, ensuring technology amplifies rather than replaces human creativity and meaning.",
                isMainPresentation: true
            },
            {
                title: "Multi-Tenant Architecture Strategy",
                type: "session",
                topicId: "multi-tenant-mastery",
                duration: "45 minutes",
                audience: "Engineering leaders, senior engineers, and architects",
                description: "Strategic and technical frameworks for building scalable multi-tenant systems with customizable user experiences per client while maintaining efficient single-backend infrastructure. Covers DNS strategies, routing architecture, templating systems, and critical leadership decisions.",
                isMainPresentation: false
            },
            {
                title: "Production Observability Strategy",
                type: "session",
                topicId: "observability-strategy",
                duration: "45 minutes",
                audience: "Engineering leaders, DevOps teams, and senior engineers",
                description: "Strategic observability implementation frameworks for distributed systems. Covers OpenTelemetry adoption, monitoring strategy development, and leadership approaches to building organizational confidence in production deployments and incident response.",
                isMainPresentation: false
            }
        ]
    }
];

// Helper functions for filtering and organizing engagements
function getEngagementsByStatus(status) {
    return engagements.filter(engagement => engagement.status === status);
}

function getEngagementsByYear(year) {
    return engagements.filter(engagement => 
        new Date(engagement.startDate).getFullYear() === year
    );
}

function getEngagementsByTopicId(topicId) {
    return engagements.filter(engagement => 
        engagement.presentations.some(presentation => presentation.topicId === topicId)
    );
}

function getKeynoteEngagements() {
    return engagements.filter(engagement => 
        engagement.presentations.some(presentation => presentation.type === "keynote")
    );
}

function getEngagementById(id) {
    return engagements.find(engagement => engagement.id === id);
}

// Export the topics array, engagements array, and helper functions
module.exports = {
    topics,
    engagements,
    getFeaturedTopics,
    getTopicsByAudience,
    getTopicsByFormat,
    getTopicById,
    getEngagementsByStatus,
    getEngagementsByYear,
    getEngagementsByTopicId,
    getKeynoteEngagements,
    getEngagementById
};