module.exports = {
    // Speaker requirements and logistics
    logistics: {
        travelPolicy: {
            domestic: "Available for travel within North America",
            international: "Available globally with advance notice",
            minimumNotice: "4 weeks for international, 2 weeks for domestic",
            preferredBooking: "3+ months in advance for optimal scheduling",
        },

        technicalRequirements: {
            presentation: [
                "Wireless presentation remote",
                "Backup slides on USB drive",
                "HDMI and USB-C adapters",
                "Confidence monitor preferred",
            ],
            audio: [
                "Wireless lapel or headset microphone",
                "Backup handheld microphone",
                "Audio check 30 minutes before presentation",
            ],
            lighting: [
                "Stage lighting that allows note reading",
                "Avoid backlighting or harsh spotlights",
                "Consistent lighting for video recording",
            ],
        },

        roomSetup: {
            keynote: "Theater or auditorium style with clear sightlines",
            workshop: "Round tables for 6-8 people with power outlets",
            panel: "Comfortable seating with side tables for water",
            masterclass: "U-shape or boardroom style for interaction",
        },
    },

    // Speaking fees and packages (ranges for transparency)
    investment: {
        keynote: {
            domestic: "$15,000 - $25,000",
            international: "$20,000 - $35,000",
            includes: ["Custom presentation", "Travel expenses", "Q&A session", "Meet & greet"],
        },
        workshop: {
            halfDay: "$12,000 - $18,000",
            fullDay: "$20,000 - $30,000",
            includes: ["Custom curriculum", "Workbook materials", "Follow-up resources"],
        },
        masterclass: {
            executive: "$25,000 - $40,000",
            includes: ["Strategic frameworks", "Case study analysis", "Individual coaching", "Follow-up consultation"],
        },
        virtual: {
            keynote: "$8,000 - $15,000",
            workshop: "$10,000 - $20,000",
            includes: ["Interactive presentation", "Digital materials", "Recording rights"],
        },

        notes: [
            "All fees plus travel expenses for in-person events",
            "Discounts available for non-profit and educational institutions",
            "Package deals for multiple sessions or annual partnerships",
            "Custom consulting engagements quoted separately",
        ],
    },

    // What's included in speaking engagements
    deliverables: {
        preSpeaking: [
            "Pre-event consultation call",
            "Custom presentation tailored to audience",
            "Speaker bio and headshots",
            "Social media promotion",
            "Pre-event audience survey (optional)",
        ],

        duringEvent: [
            "Professional presentation delivery",
            "Interactive Q&A session",
            "Networking and meet & greet",
            "Social media coverage",
            "Professional photos/video cooperation",
        ],

        postSpeaking: [
            "Digital copy of presentation slides",
            "Follow-up resources and frameworks",
            "Connection on professional networks",
            "Testimonial and feedback collection",
            "Future collaboration discussion",
        ],
    },

    // Booking process
    bookingProcess: [
        {
            step: 1,
            title: "Initial Inquiry",
            description: "Submit speaking inquiry form with event details",
            timeline: "Immediate",
        },
        {
            step: 2,
            title: "Consultation Call",
            description: "30-minute call to discuss objectives and fit",
            timeline: "Within 48 hours",
        },
        {
            step: 3,
            title: "Proposal & Contract",
            description: "Custom proposal with terms and speaking agreement",
            timeline: "Within 1 week",
        },
        {
            step: 4,
            title: "Content Development",
            description: "Presentation customization and material preparation",
            timeline: "4-6 weeks before event",
        },
        {
            step: 5,
            title: "Event Delivery",
            description: "Professional speaking engagement and follow-up",
            timeline: "Event date",
        },
    ],
}
